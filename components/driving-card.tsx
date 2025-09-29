"use client"

import { motion } from "framer-motion"

interface DrivingCardProps {
  className?: string
}

export function DrivingCard({ className = "" }: DrivingCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
      className={`relative aspect-[1.586/1] bg-[#1849C6] rounded-2xl overflow-hidden w-full flex items-center justify-center ${className}`}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/30 to-transparent" />

      {/* Card content */}
      <div
        className="absolute inset-0 p-6 flex flex-col justify-between items-start"
        style={{ width: "300px", margin: "auto" }}
      >
        {/* Header: Driving License Logo */}
        <div className="flex justify-between items-center w-full mb-4">
          <div className="w-12 h-8 bg-yellow-400 rounded" /> {/* Placeholder for emblem */}
          <div className="text-white text-xl font-bold">DL</div>
        </div>

        {/* License Number */}
        <div className="text-white text-2xl tracking-wider font-medium mb-4">
          DL-1234-5678-9012
        </div>

        {/* Name and Expiry */}
        <div className="flex justify-between items-center text-white/80 text-sm w-full">
          <span>John Smith</span>
          <span>12/28</span>
        </div>

        {/* Optional: Additional info */}
        <div className="mt-2 text-white/70 text-xs w-full">
          Class: B | Issued: 01/22 | State: CA
        </div>
      </div>
    </motion.div>
  )
}
