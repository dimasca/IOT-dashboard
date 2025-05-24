"use client"

import { SensorCard, type SensorData } from "./sensor-card"

export default function IoTDashboard() {
  const sensorData: SensorData[] = [
    {
      id: "temp-001",
      name: "Temperature Sensor",
      value: 23.5,
      unit: "°C",
      status: "online",
      lastUpdated: new Date(Date.now() - 2 * 60 * 1000), // 2 minutes ago
    },
    {
      id: "humid-001",
      name: "Humidity Sensor",
      value: 65,
      unit: "%",
      status: "online",
      lastUpdated: new Date(Date.now() - 1 * 60 * 1000), // 1 minute ago
    },
    {
      id: "pressure-001",
      name: "Pressure Sensor",
      value: 1013.25,
      unit: "hPa",
      status: "warning",
      lastUpdated: new Date(Date.now() - 5 * 60 * 1000), // 5 minutes ago
    },
    {
      id: "light-001",
      name: "Light Sensor",
      value: 450,
      unit: "lux",
      status: "offline",
      lastUpdated: new Date(Date.now() - 15 * 60 * 1000), // 15 minutes ago
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">IoT Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sensorData.map((sensor) => (
            <SensorCard key={sensor.id} sensor={sensor} />
          ))}
        </div>
      </div>
    </div>
  )
}
