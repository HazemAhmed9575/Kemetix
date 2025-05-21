"use client"

import { Code, Smartphone, Globe } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollAnimation } from "@/components/scroll-animations"
import { motion } from "framer-motion"
import SectionTitle from "@/components/section-title"

export default function ServicesSection() {
  const services = [
    {
      icon: <Globe className="h-10 w-10 text-[#00a2ff]" />,
      title: "Website Development",
      description:
        "Custom websites that combine stunning design with powerful functionality, built with the latest technologies.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-[#00a2ff]" />,
      title: "Mobile Applications",
      description:
        "Native and cross-platform mobile apps that deliver exceptional user experiences across all devices.",
    },
    {
      icon: <Code className="h-10 w-10 text-[#00a2ff]" />,
      title: "Custom Software",
      description: "Bespoke software solutions tailored to your specific business needs and challenges.",
    },
  ]

  return (
    <section id="services" className="w-full bg-[#0f1e2c] py-20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Digital Solutions"
          subtitle="for the Modern Age"
          description="We blend ancient wisdom with cutting-edge technology to create digital experiences that endure."
          badge="Our Services"
          badgeColor="text-[#00a2ff] bg-[#00a2ff]/10"
        />

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 mt-12">
          {services.map((service, index) => (
            <ScrollAnimation key={index} type="scale" delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -10, boxShadow: "0 10px 30px -10px rgba(0,162,255,0.2)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-[#162635] border-[#1e3448] text-white h-full overflow-hidden group">
                  <CardHeader>
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                      className="mb-2"
                    >
                      {service.icon}
                    </motion.div>
                    <CardTitle className="text-xl relative">
                      {service.title}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00a2ff] transition-all duration-300 group-hover:w-full"></span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
