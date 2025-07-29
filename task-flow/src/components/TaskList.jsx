import React from "react";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks, toggleComplete }) => (
  <div>
    <h2 className="text-lg font-semibold mb-2">Tasks</h2>
    {tasks.length === 0 ? (
      <p className="text-gray-400">No tasks available</p>
    ) : (
      tasks.map((task) => (
        <TaskCard key={task.id} task={task} onToggle={toggleComplete} />
      ))
    )}
  </div>
);

export default TaskList;