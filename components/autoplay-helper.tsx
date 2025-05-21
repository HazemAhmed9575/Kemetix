"use client"
import { Button } from "@/components/ui/button"
import { Volume2 } from "lucide-react"
import { motion } from "framer-motion"

interface AutoplayHelperProps {
  onUserInteraction: () => void
  isVisible: boolean
}

export default function AutoplayHelper({ onUserInteraction, isVisible }: AutoplayHelperProps) {
  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
    >
      <div className="bg-[#0a1520] p-6 rounded-lg border border-[#1e3448] max-w-sm mx-4 text-center">
        <h3 className="text-xl font-bold text-white mb-3">Enable Music</h3>
        <p className="text-gray-300 mb-4">
          Tap the button below to enable the background music for the full Kemetix experience.
        </p>
        <Button
          onClick={onUserInteraction}
          className="bg-[#c9a227] hover:bg-[#b08d22] text-black flex items-center gap-2 mx-auto"
        >
          <Volume2 size={18} />
          <span>Enable Music</span>
        </Button>
      </div>
    </motion.div>
  )
}
