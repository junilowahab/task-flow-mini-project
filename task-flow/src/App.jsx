import React, { useState, useEffect } from "react";
import AddTaskModal from "./components/AddTaskModal";
import StatsCard from "./components/StatsCard";
import TaskList from "./components/TaskList";
import MiniCalendar from "./components/MiniCalendar";
import Button from "./components/Button";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("taskflow_tasks")) || [];
    setTasks(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("taskflow_tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);
  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const today = new Date().toISOString().split("T")[0];
  const completedToday = tasks.filter(
    (task) => task.completed && task.date === today
  ).length;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">TaskFlow 🔥</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatsCard label="Total Tasks" value={tasks.length} />
        <StatsCard label="Completed Today" value={completedToday} />
        <StatsCard
          label="Pending"
          value={tasks.filter((t) => !t.completed).length}
        />
      </div>

      <div className="flex justify-between items-center mb-4">
        <Button label="+ Add Task" onClick={() => setShowModal(true)} />
        <MiniCalendar />
      </div>

      <TaskList tasks={tasks} toggleComplete={toggleComplete} />
      {showModal && (
        <AddTaskModal
          close={() => setShowModal(false)}
          onSave={addTask}
        />
      )}
    </div>
  );
};

export default App;
