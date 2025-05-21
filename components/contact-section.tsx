"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquare, Send } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animations"
import { motion } from "framer-motion"
import AnimatedPharaohElements from "@/components/animated-pharaoh-elements"
import AnimatedAnkh from "@/components/animated-ankh"
import SectionTitle from "@/components/section-title"

export default function ContactSection() {
  return (
    <section id="contact" className="w-full bg-[#0a1520] py-20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Transform Your Digital Presence"
          subtitle="Get in Touch Today"
          description="Contact us to discuss how Kemetix can help bring your vision to life with our expert development services."
          badge="Get In Touch"
          badgeColor="text-[#c9a227] bg-[#c9a227]/10"
          className="mb-12"
        />

        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <ScrollAnimation type="slide" direction="right">
            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-[#162635] transition-colors duration-300"
              >
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }} className="text-[#00a2ff]">
                  <MessageSquare className="h-10 w-10" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-white">Email Us</h3>
                  <p className="text-gray-400">info@kemetix.com</p>
                </div>
              </motion.div>
              <div className="relative mt-8">
                <AnimatedPharaohElements
                  count={6}
                  type="hieroglyphics"
                  className="flex justify-start"
                  size="text-3xl"
                />
                <AnimatedAnkh className="absolute -right-10 top-0" size={50} color="#00a2ff" pulseColor="#c9a227" />
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation type="slide" direction="left">
            <motion.div
              whileHover={{ boxShadow: "0 10px 30px -10px rgba(0,162,255,0.2)" }}
              className="space-y-4 bg-[#162635] p-6 rounded-xl border border-[#1e3448]"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-sm font-medium text-gray-300">
                    First name
                  </label>
                  <Input
                    id="first-name"
                    placeholder="Enter your first name"
                    className="bg-[#0f1e2c] border-[#1e3448] text-white focus:border-[#00a2ff] transition-colors duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-sm font-medium text-gray-300">
                    Last name
                  </label>
                  <Input
                    id="last-name"
                    placeholder="Enter your last name"
                    className="bg-[#0f1e2c] border-[#1e3448] text-white focus:border-[#00a2ff] transition-colors duration-300"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">
                  Email
                </label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  className="bg-[#0f1e2c] border-[#1e3448] text-white focus:border-[#00a2ff] transition-colors duration-300"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Enter your message"
                  className="min-h-[120px] bg-[#0f1e2c] border-[#1e3448] text-white focus:border-[#00a2ff] transition-colors duration-300"
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-[#00a2ff] to-[#0088d1] hover:from-[#0088d1] hover:to-[#00a2ff] text-white group">
                <span className="flex items-center">
                  Send Message
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
                    className="ml-2"
                  >
                    <Send className="h-4 w-4" />
                  </motion.div>
                </span>
              </Button>
            </motion.div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
