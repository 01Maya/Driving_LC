"use client"

import { motion } from "framer-motion"
import { DrivingCard, DrivingCardCard } from "@/components/driving-card"
import { Typewriter } from "react-simple-typewriter"
import { Button } from "@/components/ui/button"
import { Car } from "lucide-react"

export function Hero() {
  const handleCTAClick = () => {
    const bookingSection = document.getElementById("booking")
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" })
    } else {
      alert("CTA clicked!")
    }
  }

  return (
    <section id="hero" className="relative min-h-screen bg-[#1849C6] pt-20 overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <Typewriter
                words={[
                  "Learn to Drive with Confidence",
                  "Pass Your Test the First Time",
                  "Become a Skilled & Safe Driver",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h1>

            <p className="text-lg text-white/80 mb-8 max-w-md mx-auto md:mx-0">
              Master safe driving skills with expert instructors. Our driving school helps you build confidence, pass your test, and become a responsible driver.
              <br />
              Book your first lesson today!
            </p>
              {/* CTA */}
            <Button
              size="lg"
              className="bg-white text-[#1849C6] hover:bg-gray-100 font-bold !text-xl"
              onClick={handleCTAClick}
            >
              Book a Lesson
            </Button>
            </motion.div>

          {/* Image / Card Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <DrivingCard className="w-96 rotate-6 shadow-xl hover:rotate-0 transition-transform duration-500" />
          </motion.div>
        </div>
      </div>

      {/* Animated Car Moving Across Screen Slower */}
      <motion.div
        className="absolute bottom-10 text-white"
        animate={{ x: ["-100vw", "100vw"] }} // extreme left to extreme right
        transition={{ repeat: Infinity, repeatType: "loop", duration: 6, ease: "linear" }} // slower movement
      >
        <Car className="w-16 h-16" />
      </motion.div>
    </section>
  )
}
