"use client"

import { motion } from "framer-motion"

interface PyramidLoaderProps {
  size?: number
  color?: string
  glowColor?: string
  className?: string
}

export default function PyramidLoader({
  size = 80,
  color = "#c9a227",
  glowColor = "rgba(201, 162, 39, 0.3)",
  className = "",
}: PyramidLoaderProps) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
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
        <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Pyramid */}
          <motion.path
            d="M40 10L10 70H70L40 10Z"
            fill={color}
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />

          {/* Pyramid lines */}
          <motion.path
            d="M40 10L40 70M40 10L10 70M40 10L70 70"
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="1"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0.3 }}
            animate={{ pathLength: 1, opacity: 0.7 }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              repeatDelay: 0.5,
            }}
          />

          {/* Sun above pyramid */}
          <motion.circle
            cx="40"
            cy="5"
            r="3"
            fill="#FFFFFF"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1.5 }}
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
