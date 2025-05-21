"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import TechParticles from "@/components/tech-particles"
import AnimatedHieroglyphics from "@/components/animated-hieroglyphics"
import AnimatedAnkh from "@/components/animated-ankh"
import PharaohSilhouette from "@/components/pharaoh-silhouette"
import FloatingScarab from "@/components/floating-scarab"

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a1520] pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Tech particles background */}
      <TechParticles />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 4.5 }}
              className="inline-block rounded-lg bg-[#00a2ff]/10 px-3 py-1 text-sm text-[#00a2ff]"
            >
              Ancient Wisdom. Modern Technology.
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 4.7 }}
              className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl"
            >
              Bridging the Past and Future with{" "}
              <motion.span
                initial={{ backgroundPosition: "0% 0%" }}
                animate={{ backgroundPosition: "100% 0%" }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 5 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a2ff] via-[#0088d1] to-[#00a2ff]"
              >
                Digital Excellence
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 4.9 }}
              className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            >
              Kemetix transforms your vision into powerful websites and mobile applications that stand the test of time.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 5.1 }}
              className="flex flex-col gap-3 min-[400px]:flex-row"
            >
              <Button className="bg-[#00a2ff] hover:bg-[#0088d1] text-white group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Get Started
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#00a2ff] to-[#0088d1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
              <Button
                variant="outline"
                className="border-[#c9a227] text-[#c9a227] hover:bg-[#c9a227]/10 group relative overflow-hidden"
              >
                <span className="relative z-10">Our Portfolio</span>
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#c9a227] group-hover:w-full transition-all duration-300"></span>
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 4.8, type: "spring" }}
            className="flex justify-center"
          >
            <div className="relative h-[400px] w-[400px] group">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear", delay: 5 }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-[#00a2ff]/30"
              ></motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear", delay: 5 }}
                className="absolute inset-5 rounded-full border-2 border-dashed border-[#c9a227]/30"
              ></motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative h-full w-full"
              >
                <Image
                  src="/images/kemetix-logo.png"
                  alt="Kemetix Logo"
                  fill
                  className="object-contain drop-shadow-[0_0_15px_rgba(0,162,255,0.5)]"
                  priority
                />
              </motion.div>
              <AnimatedAnkh className="absolute -top-8 left-1/2 transform -translate-x-1/2" size={40} />
              <PharaohSilhouette
                className="absolute -right-16 top-1/2 transform -translate-y-1/2"
                width={60}
                height={100}
              />
              <FloatingScarab className="absolute -left-16 top-1/2 transform -translate-y-1/2" size={50} />
              <AnimatedHieroglyphics
                count={12}
                className="absolute -bottom-10 left-1/2 transform -translate-x-1/2"
                floatingEffect={true}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
