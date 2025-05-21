"use client"

import { motion } from "framer-motion"

interface AnimatedAnkhProps {
  size?: number
  color?: string
  pulseColor?: string
  className?: string
}

export default function AnimatedAnkh({
  size = 60,
  color = "#c9a227",
  pulseColor = "#00a2ff",
  className = "",
}: AnimatedAnkhProps) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size * 1.5 }}>
      {/* Pulsing background */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0.3 }}
        animate={{ scale: 1.2, opacity: 0 }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
        className="absolute inset-0 rounded-full"
        style={{
          backgroundColor: pulseColor,
          top: size * 0.25,
          left: size * 0.25,
          width: size * 0.5,
          height: size * 0.5,
        }}
      />

      {/* Ankh symbol */}
      <motion.svg
        viewBox="0 0 24 36"
        width={size}
        height={size * 1.5}
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <motion.path
          d="M12 0C9.8 0 8 1.8 8 4C8 6.2 9.8 8 12 8C14.2 8 16 6.2 16 4C16 1.8 14.2 0 12 0ZM12 10C7.6 10 4 7.8 4 5V12C4 14.8 7.6 17 12 17C16.4 17 20 14.8 20 12V5C20 7.8 16.4 10 12 10ZM12 19C11.4 19 11 19.4 11 20V35C11 35.6 11.4 36 12 36C12.6 36 13 35.6 13 35V20C13 19.4 12.6 19 12 19Z"
          fill={color}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            repeatDelay: 1,
          }}
        />
      </motion.svg>
    </div>
  )
}
