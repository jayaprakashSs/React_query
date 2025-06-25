// components/CardItem.jsx
import React from "react";
import LiquidGauge from "./LiquidGauge";

function CardItem({ tankName, location, value }) {
  const status = value > 20 ? "ON" : "OFF";

  return (
    <div className="bg-white rounded-xl shadow-md border p-4 flex items-center space-x-4 w-full">
      {/* Gauge */}
      <div className="shrink-0">
        <LiquidGauge value={value} radius={40} />
      </div>

      {/* Info */}
      <div className="flex-grow">
        <h3 className="text-lg font-bold text-gray-800">{tankName}</h3>
        <p className="text-sm text-gray-500">{location}</p>
        <p className="text-sm mt-2">
          Status:{" "}
          <span className={`font-semibold ${status === "ON" ? "text-green-600" : "text-red-600"}`}>
            {status}
          </span>
        </p>
        <p className="text-sm text-gray-600">Level: {value}%</p>
      </div>
    </div>
  );
}

export default CardItem;
