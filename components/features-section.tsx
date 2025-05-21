"use client"

import Image from "next/image"
import { Zap } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animations"
import { motion } from "framer-motion"
import AnimatedPharaohElements from "@/components/animated-pharaoh-elements"
import PyramidLoader from "@/components/pyramid-loader"

export default function FeaturesSection() {
  const features = [
    {
      title: "Ancient Wisdom",
      description: "We draw inspiration from timeless principles that have guided civilizations for millennia.",
    },
    {
      title: "Modern Technology",
      description: "Our solutions leverage the latest technologies and frameworks for optimal performance.",
    },
    {
      title: "Timeless Design",
      description: "We create interfaces that are both contemporary and enduring, avoiding fleeting trends.",
    },
    {
      title: "Future-Proof",
      description: "Our development approach ensures your digital assets remain relevant as technology evolves.",
    },
  ]

  return (
    <section id="about" className="w-full bg-[#0a1520] py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <ScrollAnimation type="slide" direction="right">
            <div className="relative h-[500px] rounded-xl overflow-hidden border-2 border-[#c9a227]/30 group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0a1520]/80 to-transparent z-10"></div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="h-full w-full relative"
              >
                <Image
                  src="/images/ancient-modern.png"
                  alt="Ancient meets modern technology"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>
              <AnimatedPharaohElements
                count={15}
                type="mixed"
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
                floatingEffect={true}
              />
              <PyramidLoader className="absolute -bottom-10 -right-10" size={100} />
            </div>
          </ScrollAnimation>

          <div className="space-y-8">
            <ScrollAnimation type="fade">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#c9a227]/10 px-3 py-1 text-sm text-[#c9a227]">
                  Our Philosophy
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">
                  Where Ancient Wisdom Meets Modern Technology
                </h2>
                <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At Kemetix, we believe in the power of combining time-tested principles with cutting-edge innovation.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <ScrollAnimation key={index} type="slide" direction="up" delay={index * 0.1}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex flex-col gap-2 p-4 rounded-lg hover:bg-[#162635] transition-colors duration-300"
                  >
                    <div className="flex items-center gap-2">
                      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                        <Zap className="h-5 w-5 text-[#c9a227]" />
                      </motion.div>
                      <h3 className="font-semibold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </motion.div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
