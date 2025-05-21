"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

// Array of Egyptian/Pharaoh symbols and elements
const pharaohElements = [
  "👑", // Crown
  "🏺", // Vase
  "🔱", // Trident (similar to ankh)
  "⚱️", // Funeral urn
  "🏛️", // Temple
  "🐫", // Camel
  "🐪", // Dromedary
  "🦅", // Eagle (Horus)
  "🐍", // Snake (Wadjet)
  "🦁", // Lion
  "🐊", // Crocodile (Sobek)
  "🌞", // Sun (Ra)
  "🌙", // Moon (Khonsu)
  "⭐", // Star
  "🌾", // Sheaf of rice
  "🏜️", // Desert
]

// Extended hieroglyphics array with more symbols
export const extendedHieroglyphics = [
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
  "𓀰",
  "𓀱",
  "𓀲",
  "𓀳",
  "𓀴",
  "𓀵",
  "𓀶",
  "𓀷",
  "𓀸",
  "𓀹",
  "𓀺",
  "𓀻",
  "𓀼",
  "𓀽",
  "𓀾",
  "𓀿",
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
  "𓁠",
  "𓁡",
  "𓁢",
  "𓁣",
  "𓁤",
  "𓁥",
  "𓁦",
  "𓁧",
  "𓁨",
  "𓁩",
  "𓁪",
  "𓁫",
  "𓁬",
  "𓁭",
  "𓁮",
  "𓁯",
  "𓁰",
  "𓁱",
  "𓁲",
  "𓁳",
  "𓁴",
  "𓁵",
  "𓁶",
  "𓁷",
  "𓁸",
  "𓁹",
  "𓁺",
  "𓁻",
  "𓁼",
  "𓁽",
  "𓁾",
  "𓁿",
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

interface AnimatedPharaohElementsProps {
  count?: number
  color?: string
  size?: string
  className?: string
  type?: "symbols" | "hieroglyphics" | "mixed"
  animated?: boolean
  floatingEffect?: boolean
}

export default function AnimatedPharaohElements({
  count = 10,
  color = "text-[#c9a227]",
  size = "text-2xl",
  className = "",
  type = "mixed",
  animated = true,
  floatingEffect = false,
}: AnimatedPharaohElementsProps) {
  const [elements, setElements] = useState<Array<{ symbol: string; id: number; delay: number }>>([])

  useEffect(() => {
    let symbolsArray: string[] = []

    if (type === "symbols") {
      symbolsArray = pharaohElements
    } else if (type === "hieroglyphics") {
      symbolsArray = extendedHieroglyphics
    } else {
      // Mix both arrays with more weight on hieroglyphics
      symbolsArray = [...extendedHieroglyphics, ...pharaohElements.slice(0, 8)]
    }

    const newElements = Array.from({ length: count }, (_, i) => ({
      symbol: symbolsArray[Math.floor(Math.random() * symbolsArray.length)],
      id: i,
      delay: Math.random() * 2,
    }))

    setElements(newElements)
  }, [count, type])

  return (
    <div className={`flex flex-wrap justify-center gap-2 ${className}`}>
      {elements.map((item) => (
        <motion.div
          key={item.id}
          initial={animated ? { opacity: 0, y: 20 } : { opacity: 1 }}
          animate={
            animated
              ? {
                  opacity: 1,
                  y: 0,
                  ...(floatingEffect && { y: [0, -10, 0] }),
                }
              : {}
          }
          transition={{
            duration: 0.5,
            delay: item.delay,
            ...(animated && {
              repeat: floatingEffect ? Number.POSITIVE_INFINITY : 0,
              repeatType: "reverse",
              repeatDelay: Math.random() * 5 + 3,
            }),
          }}
          className={`${color} ${size} opacity-70`}
        >
          {item.symbol}
        </motion.div>
      ))}
    </div>
  )
}
