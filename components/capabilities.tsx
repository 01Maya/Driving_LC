"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { DrivingCard } from "@/components/driving-card"
import { Button } from "@/components/ui/button"

export function Capabilities() {
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
    <section id="why us" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6 },
                },
              }}
              className="text-3xl font-bold mb-12"
            >
              Why Us?
            </motion.h2>
            <ul className="space-y-4">
              <ListItem number="01" text="Certified and experienced driving instructors" />
              <ListItem number="02" text="Affordable packages with flexible schedules" />
              <ListItem number="03" text="High pass rate for driving license exams" />
              <ListItem number="04" text="Modern vehicles equipped with safety features" />
              <ListItem number="05" text="Free mock driving test sessions" />
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, delay: 0.4 },
              },
            }}
            className="relative"
          >
            <DrivingCard className="w-full shadow-xl" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.6 },
            },
          }}
          className="text-center mt-12"
        >
          <Button className="bg-[#1849C6] hover:bg-blue-700 text-white transition-colors duration-200" size="lg">
          JOIN OUR DRIVING SCHOOL
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

interface ListItemProps {
  number: string
  text: string
}

function ListItem({ number, text }: ListItemProps) {
  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.6 },
        },
      }}
      className="flex items-center space-x-5 group"
    >
      <span className="text-sm font-medium text-blue-600 group-hover:scale-110 transition-transform duration-200">
        {number}
      </span>
      <span className="text-gray-900 group-hover:text-blue-600 transition-colors duration-200">{text}</span>
    </motion.li>
  )
}

