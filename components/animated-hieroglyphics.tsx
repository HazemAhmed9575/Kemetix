"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const hieroglyphics = [
  "𓀀",
  "𓀁",
  "𓀂",
  "𓀃",
  "𓀄",
  "𓀅",
  "𓀆",
  "𓀇",
  "𓀈",
  "𓀉",
  "𓀊",
  "𓀋",
  "𓀌",
  "𓀍",
  "𓀎",
  "𓀏",
  "𓀐",
  "𓀑",
  "𓀒",
  "𓀓",
  "𓀔",
  "𓀕",
  "𓀖",
  "𓀗",
  "𓀘",
  "𓀙",
  "𓀚",
  "𓀛",
  "𓀜",
  "𓀝",
  "𓀞",
  "𓀟",
  "𓀠",
  "𓀡",
  "𓀢",
  "𓀣",
  "𓀤",
  "𓀥",
  "𓀦",
  "𓀧",
  "𓀨",
  "𓀩",
  "𓀪",
  "𓀫",
  "𓀬",
  "𓀭",
  "𓀮",
  "𓀯",
  "𓁀",
  "𓁁",
  "𓁂",
  "𓁃",
  "𓁄",
  "𓁅",
  "𓁆",
  "𓁇",
  "𓁈",
  "𓁉",
  "𓁊",
  "𓁋",
  "𓁌",
  "𓁍",
  "𓁎",
  "𓁏",
  "𓁐",
  "𓁑",
  "𓁒",
  "𓁓",
  "𓁔",
  "𓁕",
  "𓁖",
  "𓁗",
  "𓁘",
  "𓁙",
  "𓁚",
  "𓁛",
  "𓁜",
  "𓁝",
  "𓁞",
  "𓁟",
  "𓂀",
  "𓂁",
  "𓂂",
  "𓂃",
  "𓂄",
  "𓂅",
  "𓂆",
  "𓂇",
  "𓂈",
  "𓂉",
  "𓂊",
  "𓂋",
  "𓂌",
  "𓂍",
  "𓂎",
  "𓂏",
]

interface AnimatedHieroglyphicsProps {
  count?: number
  color?: string
  size?: string
  className?: string
  floatingEffect?: boolean
}

export default function AnimatedHieroglyphics({
  count = 10,
  color = "text-[#c9a227]",
  size = "text-2xl",
  className = "",
  floatingEffect = false,
}: AnimatedHieroglyphicsProps) {
  const [symbols, setSymbols] = useState<Array<{ symbol: string; id: number }>>([])

  useEffect(() => {
    const newSymbols = Array.from({ length: count }, (_, i) => ({
      symbol: hieroglyphics[Math.floor(Math.random() * hieroglyphics.length)],
      id: i,
    }))
    setSymbols(newSymbols)
  }, [count])

  return (
    <div className={`flex flex-wrap justify-center gap-2 ${className}`}>
      {symbols.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            ...(floatingEffect && { y: [0, -10, 0] }),
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            repeatDelay: Math.random() * 5 + 5,
          }}
          className={`${color} ${size} opacity-70`}
        >
          {item.symbol}
        </motion.div>
      ))}
    </div>
  )
}
