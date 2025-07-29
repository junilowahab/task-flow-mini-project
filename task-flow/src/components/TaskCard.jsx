import React from "react";

const TaskCard = ({ task, onToggle }) => (
  <div className="flex items-center justify-between bg-gray-100 p-3 rounded mb-2">
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="mr-2"
      />
      <span className={task.completed ? "line-through text-gray-500" : ""}>
        {task.title} ({task.priority})
      </span>
    </div>
    <span className="text-xs bg-blue-200 text-blue-700 px-2 py-1 rounded">
      {task.tag}
    </span>
  </div>
);

export default TaskCard;