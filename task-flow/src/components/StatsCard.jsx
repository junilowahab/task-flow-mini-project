import React from "react";

const StatsCard = ({ label, value }) => (
  <div className="bg-white shadow p-4 rounded">
    <p className="text-sm text-gray-500">{label}</p>
    <p className="text-xl font-bold">{value}</p>
  </div>
);

export default StatsCard;