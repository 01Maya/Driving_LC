"use client"

import { motion } from "framer-motion"

export function Footer() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <footer className="bg-white border-t">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="w-full max-w-6xl mx-auto px-4 py-12"
      >
        {/* Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center items-start">
          <FooterColumn title="About" items={["About Us", "Our Instructors", "Testimonials"]} />
          <FooterColumn title="Courses" items={["Beginner Course", "Advance Driving", "License Prep"]} />
          <FooterColumn title="Resources" items={["FAQ", "Safety Tips", "Contact Us"]} />
          <FooterColumn title="Packages" items={["Individual Lessons", "Monthly Plans", "Intensive Courses"]} />
        </div>

        {/* Footer Bottom */}
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t text-sm text-gray-600 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p>&copy; 2024 All rights reserved</p>
          <div className="flex space-x-4">
            {["Terms", "Privacy", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}

interface FooterColumnProps {
  title: string
  items: string[]
}

function FooterColumn({ title, items }: FooterColumnProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.div variants={itemVariants}>
      <h3 className="font-semibold mb-5">{title}</h3>
      <ul className="space-y-3 text-sm text-gray-600">
        {items.map((item) => (
          <li
            key={item}
            className="hover:text-blue-600 transition-colors duration-200 cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
