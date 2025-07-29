import React, { useState } from "react";

const AddTaskModal = ({ close, onSave }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [tag, setTag] = useState("General");

  const handleSave = () => {
    const task = {
      id: Date.now(),
      title,
      date,
      priority,
      tag,
      completed: false,
    };
    onSave(task);
    close();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-6 rounded w-96">
        <h2 className="text-lg font-bold mb-4">Add New Task</h2>
        <input
          type="text"
          placeholder="Task Title"
          className="w-full border p-2 mb-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="date"
          className="w-full border p-2 mb-2"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <select
          className="w-full border p-2 mb-2"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <input
          type="text"
          placeholder="Tag (e.g. Work)"
          className="w-full border p-2 mb-4"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />
        <div className="flex justify-end gap-2">
          <button onClick={close} className="px-4 py-2 bg-gray-200 rounded">
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
