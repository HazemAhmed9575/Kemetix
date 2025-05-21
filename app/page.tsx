"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import FeaturesSection from "@/components/features-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"
import LoadingScreen from "@/components/loading-screen"
import MusicPlayer from "@/components/music-player"
import AutoplayHelper from "@/components/autoplay-helper"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [needsAutoplayHelper, setNeedsAutoplayHelper] = useState(false)
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null)

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = localStorage.getItem("kemetix-visited")

    if (hasVisited) {
      // If not first visit, skip loading animation
      setIsLoading(false)
    } else {
      // If first visit, show loading animation for 4.5 seconds
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 4500)

      return () => clearTimeout(timer)
    }
  }, [])

  // Check if we need to show the autoplay helper
  useEffect(() => {
    // Most mobile browsers require user interaction to play audio
    // We'll check if we're on a mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

    if (isMobile) {
      setNeedsAutoplayHelper(true)
    }
  }, [])

  // Function to handle user interaction for autoplay
  const handleUserInteraction = () => {
    // Create and resume AudioContext to enable audio on the page
    const context = new (window.AudioContext || (window as any).webkitAudioContext)()
    if (context.state === "suspended") {
      context.resume()
    }
    setAudioContext(context)
    setNeedsAutoplayHelper(false)
  }

  return (
    <main className="flex min-h-screen flex-col">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar />
          <div className="relative">
            <AnimatedBackground />
            <HeroSection />
            <ServicesSection />
            <FeaturesSection />
            <TestimonialsSection />
            <ContactSection />

            {/* Fixed Music Player */}
            <div className="fixed bottom-6 right-6 z-40">
              <MusicPlayer audioSrc="/pyramid-background-music.mp3" />
            </div>
          </div>
          <Footer />

          {/* Autoplay helper overlay for mobile devices */}
          <AutoplayHelper onUserInteraction={handleUserInteraction} isVisible={needsAutoplayHelper} />
        </>
      )}
    </main>
  )
}
