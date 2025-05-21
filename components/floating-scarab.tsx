"use client"

import { motion } from "framer-motion"

interface FloatingScrabProps {
  size?: number
  color?: string
  glowColor?: string
  className?: string
}

export default function FloatingScarab({
  size = 60,
  color = "#c9a227",
  glowColor = "rgba(201, 162, 39, 0.3)",
  className = "",
}: FloatingScrabProps) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <motion.div
        initial={{ y: 0, rotate: 0 }}
        animate={{ y: [-5, 5, -5], rotate: [0, 5, -5, 0] }}
        transition={{
          y: {
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          },
          rotate: {
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          },
        }}
        className="absolute inset-0"
        style={{
          filter: `drop-shadow(0 0 10px ${glowColor})`,
        }}
      >
        <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Scarab body */}
          <motion.path
            d="M30 15C20 15 12 23 12 33C12 43 20 51 30 51C40 51 48 43 48 33C48 23 40 15 30 15Z"
            fill={color}
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />

          {/* Scarab wings */}
          <motion.path
            d="M12 33C8 28 8 20 12 15M48 33C52 28 52 20 48 15"
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

          {/* Scarab details */}
          <motion.path
            d="M20 33C20 28 25 24 30 24C35 24 40 28 40 33C40 38 35 42 30 42C25 42 20 38 20 33Z"
            stroke={color}
            strokeWidth="1.5"
            fill="none"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1.1 }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />

          {/* Scarab legs */}
          <motion.path
            d="M15 28L10 25M15 38L10 41M45 28L50 25M45 38L50 41"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </svg>
      </motion.div>
    </div>
  )
}
