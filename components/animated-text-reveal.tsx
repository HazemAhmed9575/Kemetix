"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface AnimatedTextRevealProps {
  text: string
  hieroglyphicMap?: Record<string, string>
  className?: string
  textClassName?: string
  duration?: number
  delay?: number
  onComplete?: () => void
}

export default function AnimatedTextReveal({
  text,
  hieroglyphicMap = {
    A: "𓂝",
    B: "𓃀",
    C: "𓎡",
    D: "𓂧",
    E: "𓇋",
    F: "𓆑",
    G: "𓎼",
    H: "𓉔",
    I: "𓇋",
    J: "𓆓",
    K: "𓎡",
    L: "𓃭",
    M: "𓅓",
    N: "𓈖",
    O: "𓍯",
    P: "𓊪",
    Q: "𓏘",
    R: "𓂋",
    S: "𓋴",
    T: "𓏏",
    U: "𓅱",
    V: "𓆑",
    W: "𓅱",
    X: "𓎗",
    Y: "𓇋",
    Z: "𓊃",
  },
  className = "",
  textClassName = "",
  duration = 2.5,
  delay = 0,
  onComplete,
}: AnimatedTextRevealProps) {
  const [showHieroglyphics, setShowHieroglyphics] = useState(true)

  useEffect(() => {
    const timer = setTimeout(
      () => {
        setShowHieroglyphics(false)
        if (onComplete) {
          setTimeout(onComplete, duration * 1000)
        }
      },
      duration * 1000 + delay * 1000,
    )

    return () => clearTimeout(timer)
  }, [duration, delay, onComplete])

  return (
    <div className={`relative ${className}`}>
      {/* Hieroglyphic version */}
      <AnimatePresence>
        {showHieroglyphics && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex justify-center"
          >
            <div className={`flex items-center space-x-1 ${textClassName}`}>
              {Array.from(text.toUpperCase()).map((letter, index) => (
                <motion.div
                  key={`hiero-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + delay }}
                  className="text-[#c9a227]"
                >
                  {letter === " " ? "\u00A0" : hieroglyphicMap[letter] || letter}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* English version */}
      <AnimatePresence>
        {!showHieroglyphics && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex justify-center"
          >
            <div className={`flex items-center space-x-0.5 ${textClassName}`}>
              {Array.from(text).map((letter, index) => (
                <motion.div
                  key={`eng-${index}`}
                  initial={{ opacity: 0, scale: 1.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-[#00a2ff]"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
