"use client"

import { motion } from "framer-motion"
import AnimatedTextReveal from "@/components/animated-text-reveal"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

interface SectionTitleProps {
  title: string
  subtitle: string
  description?: string
  badge?: string
  badgeColor?: string
  className?: string
  delay?: number
}

export default function SectionTitle({
  title,
  subtitle,
  description,
  badge,
  badgeColor = "text-[#00a2ff] bg-[#00a2ff]/10",
  className = "",
  delay = 0,
}: SectionTitleProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (inView) {
      setHasAnimated(true)
    }
  }, [inView])

  return (
    <div ref={ref} className={`flex flex-col items-center justify-center space-y-4 text-center ${className}`}>
      <div className="space-y-2">
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay }}
            className={`inline-block rounded-lg px-3 py-1 text-sm ${badgeColor}`}
          >
            {badge}
          </motion.div>
        )}

        <div className="h-16 sm:h-20">
          {hasAnimated && (
            <AnimatedTextReveal
              text={title}
              className="w-full"
              textClassName="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
              duration={1.5}
              delay={delay + 0.2}
            />
          )}
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.4 }}
          className="text-xl font-semibold text-white"
        >
          {subtitle}
        </motion.h3>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: delay + 0.6 }}
            className="max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    </div>
  )
}
