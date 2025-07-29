import React from "react";

const MiniCalendar = () => {
  const date = new Date().toDateString();
  return (
    <div className="text-sm text-gray-600">Today: {date}</div>
  );
};

export default MiniCalendar;