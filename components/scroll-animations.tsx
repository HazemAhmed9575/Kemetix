"use client"

import type React from "react"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface ScrollAnimationProps {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  type?: "fade" | "slide" | "scale" | "rotate"
  duration?: number
  className?: string
}

export function ScrollAnimation({
  children,
  delay = 0,
  direction = "up",
  type = "fade",
  duration = 0.5,
  className = "",
}: ScrollAnimationProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  // Define animation variants
  const getVariants = () => {
    const baseVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration, delay } },
    }

    if (type === "fade") {
      return baseVariants
    }

    if (type === "scale") {
      return {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration, delay } },
      }
    }

    if (type === "rotate") {
      return {
        hidden: { opacity: 0, rotate: -5 },
        visible: { opacity: 1, rotate: 0, transition: { duration, delay } },
      }
    }

    // Slide animations
    const distance = 50
    const directionMap = {
      up: { y: distance },
      down: { y: -distance },
      left: { x: distance },
      right: { x: -distance },
    }

    return {
      hidden: { opacity: 0, ...directionMap[direction] },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration, delay },
      },
    }
  }

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={getVariants()} className={className}>
      {children}
    </motion.div>
  )
}
