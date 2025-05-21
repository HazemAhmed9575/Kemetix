"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ScrollAnimation } from "@/components/scroll-animations"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import AnimatedPharaohElements from "@/components/animated-pharaoh-elements"
import FloatingScarab from "@/components/floating-scarab"
import SectionTitle from "@/components/section-title"

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Kemetix transformed our outdated website into a modern digital experience that perfectly captures our brand essence.",
      author: "Sarah Johnson",
      company: "TechVision Inc.",
    },
    {
      quote:
        "The mobile app Kemetix developed for us has received outstanding feedback from our users and significantly increased our engagement metrics.",
      author: "Michael Chen",
      company: "Nexus Solutions",
    },
    {
      quote:
        "Working with Kemetix was a revelation. They truly understand how to blend timeless design principles with cutting-edge technology.",
      author: "Amara Okafor",
      company: "Heritage Digital",
    },
  ]

  return (
    <section id="testimonials" className="w-full bg-[#0f1e2c] py-20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="What Our Clients Say"
          subtitle="Success Stories"
          description="Don't just take our word for it. Here's what our clients have to say about working with Kemetix."
          badge="Testimonials"
          badgeColor="text-[#00a2ff] bg-[#00a2ff]/10"
        />

        <div className="relative">
          <AnimatedPharaohElements
            count={8}
            type="symbols"
            className="absolute -top-10 left-1/2 transform -translate-x-1/2"
            size="text-3xl"
            floatingEffect={true}
          />
          <FloatingScarab className="absolute -right-10 top-0" size={40} />
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation key={index} type="slide" direction="up" delay={index * 0.2}>
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="bg-[#162635] border-[#1e3448] text-white h-full relative overflow-hidden">
                  <motion.div
                    initial={{ opacity: 0.3 }}
                    whileHover={{ opacity: 0.6 }}
                    className="absolute -top-6 -right-6 text-[#00a2ff]"
                  >
                    <Quote size={80} />
                  </motion.div>
                  <CardContent className="pt-6 relative z-10">
                    <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start relative z-10">
                    <p className="font-semibold text-[#00a2ff]">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.company}</p>
                  </CardFooter>
                </Card>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
