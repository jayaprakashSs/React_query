// components/Dashboard.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import CardItem from "./CardItem";

function Dashboard() {
  const [tanks, setTanks] = useState([]);
  const [error, setError] = useState(null);

  const fetchTankData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/tanks");
      setTanks(response.data);
    } catch (err) {
      console.error("Error fetching tank data:", err);
      setError("Failed to load tank data");
    }
  };

  useEffect(() => {
    fetchTankData(); // fetch on mount
    const interval = setInterval(fetchTankData, 5000); // refresh every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-blue-200 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
         S-Tank Monitoring Dashboard
      </h1>

      {error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {tanks.map((tank) => (
            <CardItem
              key={tank.id}
              tankName={tank.tankName}
              location={tank.location}
              value={tank.waterLevel}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
