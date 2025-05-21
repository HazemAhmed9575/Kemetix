"use client"

import { motion } from "framer-motion"

interface PharaohSilhouetteProps {
  width?: number
  height?: number
  color?: string
  glowColor?: string
  className?: string
}

export default function PharaohSilhouette({
  width = 120,
  height = 200,
  color = "#c9a227",
  glowColor = "rgba(201, 162, 39, 0.3)",
  className = "",
}: PharaohSilhouetteProps) {
  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      <motion.div
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 0.8 }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="absolute inset-0"
        style={{
          filter: `drop-shadow(0 0 10px ${glowColor})`,
        }}
      >
        <svg width={width} height={height} viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Pharaoh silhouette */}
          <motion.path
            d="M60 0C55 0 50 5 50 10V15C45 15 40 20 40 25V35C35 40 30 50 30 60V70C25 75 20 85 20 95V110C20 120 25 130 30 135V145C30 150 35 155 40 155H45V165C45 170 50 175 55 175H65C70 175 75 170 75 165V155H80C85 155 90 150 90 145V135C95 130 100 120 100 110V95C100 85 95 75 90 70V60C90 50 85 40 80 35V25C80 20 75 15 70 15V10C70 5 65 0 60 0Z"
            fill={color}
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />

          {/* Nemes headdress details */}
          <motion.path
            d="M40 25V35M80 25V35M30 60H40M80 60H90M45 155V165M75 155V165M50 15H70M40 155H80"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0.5 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              repeatDelay: 1,
            }}
          />

          {/* Eye of Horus */}
          <motion.path
            d="M50 80C50 80 55 75 60 75C65 75 70 80 70 80C70 80 65 85 60 85C55 85 50 80 50 80Z"
            fill={color}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1.1 }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </svg>
      </motion.div>
    </div>
  )
}
