"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wifi, WifiOff, AlertTriangle } from "lucide-react"

export interface SensorData {
  id: string
  name: string
  value: number
  unit: string
  status: "online" | "offline" | "warning"
  lastUpdated: Date
}

interface SensorCardProps {
  sensor: SensorData
}

export function SensorCard({ sensor }: SensorCardProps) {
  const getStatusIcon = () => {
    switch (sensor.status) {
      case "online":
        return <Wifi className="h-4 w-4" />
      case "offline":
        return <WifiOff className="h-4 w-4" />
      case "warning":
        return <AlertTriangle className="h-4 w-4" />
    }
  }

  const getStatusColor = () => {
    switch (sensor.status) {
      case "online":
        return "bg-green-100 text-green-800 border-green-200"
      case "offline":
        return "bg-red-100 text-red-800 border-red-200"
      case "warning":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
    }
  }

  const getBorderColor = () => {
    switch (sensor.status) {
      case "online":
        return "border-l-green-500"
      case "offline":
        return "border-l-red-500"
      case "warning":
        return "border-l-yellow-500"
    }
  }

  return (
    <Card className={`transition-all duration-200 hover:shadow-lg border-l-4 ${getBorderColor()}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">{sensor.name}</h3>
          <Badge variant="outline" className={`${getStatusColor()} flex items-center gap-1`}>
            {getStatusIcon()}
            {sensor.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <span className="text-3xl font-bold text-gray-900">{sensor.value}</span>
          <span className="text-base text-gray-500 ml-1">{sensor.unit}</span>
        </div>
        <div className="pt-3 border-t border-gray-200">
          <p className="text-sm text-gray-500">Last updated: {sensor.lastUpdated.toLocaleString()}</p>
        </div>
      </CardContent>
    </Card>
  )
}
