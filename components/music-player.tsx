"use client"

import { useState, useRef, useEffect } from "react"
import { Volume2, VolumeX, Music } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface MusicPlayerProps {
  audioSrc: string
  className?: string
}

export default function MusicPlayer({ audioSrc, className = "" }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio(audioSrc)

    // Set a lower volume (0.3 = 30% of maximum volume)
    audioRef.current.volume = 0.3

    // Set up event listeners
    audioRef.current.addEventListener("canplaythrough", () => {
      setIsLoaded(true)
    })

    audioRef.current.addEventListener("ended", () => {
      // Loop the audio when it ends
      if (audioRef.current) {
        audioRef.current.currentTime = 0
        audioRef.current.play()
      }
    })

    // Attempt to autoplay when component mounts
    if (audioRef.current) {
      const playPromise = audioRef.current.play()

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Autoplay started successfully
            setIsPlaying(true)
          })
          .catch((error) => {
            // Autoplay was prevented (common on mobile)
            console.log("Autoplay prevented:", error)
            setIsPlaying(false)
          })
      }
    }

    // Clean up
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.removeEventListener("canplaythrough", () => {})
        audioRef.current.removeEventListener("ended", () => {})
      }
    }
  }, [audioSrc])

  const togglePlay = () => {
    if (!audioRef.current || !isLoaded) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      // Some browsers require user interaction before playing audio
      const playPromise = audioRef.current.play()

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Audio started playing successfully
          })
          .catch((error) => {
            // Auto-play was prevented
            console.error("Playback prevented:", error)
            setIsPlaying(false)
          })
      }
    }

    setIsPlaying(!isPlaying)
  }

  return (
    <div className={`${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 bg-[#162635] p-3 rounded-lg border border-[#1e3448] shadow-lg"
      >
        <Button
          onClick={togglePlay}
          disabled={!isLoaded}
          className={`relative overflow-hidden ${
            isPlaying ? "bg-[#c9a227] hover:bg-[#b08d22] text-black" : "bg-[#00a2ff] hover:bg-[#0088d1] text-white"
          }`}
        >
          <span className="relative z-10 flex items-center gap-2">
            {isPlaying ? <VolumeX size={18} /> : <Volume2 size={18} />}
            {isPlaying ? "Mute Music" : "Play Music"}
          </span>

          {/* Animated background */}
          {isPlaying && (
            <motion.div
              className="absolute inset-0 bg-[#c9a227]"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 0.9, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          )}
        </Button>

        <div className="flex items-center gap-2">
          <Music size={18} className="text-[#c9a227]" />
          <span className="text-sm text-gray-300">Pyramid Background Music</span>
        </div>

        {/* Audio visualizer (decorative) */}
        {isPlaying && (
          <div className="flex items-end h-6 gap-[2px] ml-2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 bg-[#00a2ff]"
                initial={{ height: 4 }}
                animate={{ height: [4, 12 + i * 3, 8, 16 - i * 2, 4] }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  )
}
