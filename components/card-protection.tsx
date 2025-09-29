"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { DrivingCard, DrivingCardCard } from "@/components/driving-card"
import { Button } from "@/components/ui/button"

export function CardProtection() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <section id="safety" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6 },
            },
          }}
          className="text-3xl font-bold text-center mb-16"
        >
          Driving Safety
        </motion.h2>

        <div className="relative max-w-[1000px] mx-auto h-[600px]" ref={ref}>
          {/* Dotted circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]">
            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              animate={controls}
              variants={{
                hidden: { scale: 0, rotate: 0 },
                visible: {
                  scale: 1,
                  rotate: 360,
                  transition: { duration: 1.5, ease: "easeOut" },
                },
              }}
              className="w-full h-full border-2 border-dashed border-blue-200 rounded-full"
            />
          </div>

          {/* Features */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-center">
            <div className="relative w-full max-w-[800px] h-full max-h-[600px]">
              {[
                {
                  title: "Road Rules",
                  icon: "🚦",
                  description:
                    "Learn all essential traffic rules and safe driving practices to keep you confident on the road.",
                  position: "top-[15%] left-[5%]",
                },
                {
                  title: "Defensive Driving",
                  icon: "🛣️",
                  description: "Our training prepares you to handle unexpected road situations with ease and safety.",
                  position: "bottom-[15%] left-[5%]",
                },
                {
                  title: "Vehicle Handling",
                  icon: "🚗",
                  description:
                    "Get hands-on training to control your vehicle in real-world scenarios.",
                  position: "top-[15%] right-[5%]",
                },
                   {
                  title: "Flexible Scheduling",
                icon: "⏰",
                description:
                  "Book driving lessons at your convenience with flexible time slots that fit your busy schedule.",
                  position: "bottom-[15%] right-[5%]",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: index < 2 ? -20 : 20 }}
                  animate={controls}
                  variants={{
                    hidden: { opacity: 0, x: index < 2 ? -20 : 20 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.6, delay: index * 0.2 },
                    },
                  }}
                  className={`absolute ${feature.position} max-w-[200px] bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl" role="img" aria-label={feature.title}>
                      {feature.icon}
                    </span>
                    <h3 className="font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-sm text-gray-700">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.8 },
            },
          }}
          className="text-center mt-12"
        >
          <Button className="bg-[#1849C6] hover:bg-blue-700 text-white px-8">START YOUR TRAINING</Button>
        </motion.div>
      </div>
    </section>
  )
}

