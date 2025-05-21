"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

// Map English letters to hieroglyphic equivalents
// These are approximate representations
const hieroglyphicMap: Record<string, string> = {
  K: "𓎡",
  E: "𓇋",
  M: "𓅓",
  T: "𓏏",
  I: "𓇋",
  X: "𓎗",
}

export default function LoadingScreen() {
  const [showHieroglyphics, setShowHieroglyphics] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Set visited flag
    localStorage.setItem("kemetix-visited", "true")

    // Animation sequence
    const timer1 = setTimeout(() => {
      setShowHieroglyphics(false)
    }, 2500)

    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, 80)

    return () => {
      clearTimeout(timer1)
      clearInterval(progressInterval)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a1520]">
      <div className="relative flex flex-col items-center">
        {/* Animated background effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1.5 }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00a2ff] to-[#c9a227]"
          style={{ filter: "blur(30px)" }}
        />

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 mb-8"
        >
          <Image src="/images/kemetix-logo.png" alt="Kemetix Logo" width={100} height={100} priority />
        </motion.div>

        {/* Text animation container */}
        <div className="relative h-20 w-80">
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
                <div className="flex items-center space-x-2">
                  {Array.from("KEMETIX").map((letter, index) => (
                    <motion.div
                      key={`hiero-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="text-4xl text-[#c9a227]"
                    >
                      {hieroglyphicMap[letter] || letter}
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
                <div className="flex items-center">
                  {Array.from("KEMETIX").map((letter, index) => (
                    <motion.div
                      key={`eng-${index}`}
                      initial={{ opacity: 0, scale: 1.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="text-4xl font-bold text-[#00a2ff]"
                    >
                      {letter}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Loading indicator */}
        <div className="mt-8 h-1 w-60 overflow-hidden rounded-full bg-[#162635]">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-gradient-to-r from-[#00a2ff] to-[#c9a227]"
          />
        </div>

        {/* Loading text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-sm text-gray-400"
        >
          {showHieroglyphics ? "Translating Ancient Wisdom..." : "Initializing Modern Technology..."}
        </motion.p>
      </div>
    </div>
  )
}
