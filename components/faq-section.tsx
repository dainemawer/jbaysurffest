"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "When and where is the festival taking place?",
    answer: "The Jeffreys Bay Surf Festival will be held from July 11-20, 2025, at Supertubes Beach in Jeffreys Bay, South Africa."
  },
  {
    question: "How can I purchase tickets?",
    answer: "Tickets can be purchased through our website. We offer various ticket options including day passes, weekend passes, and full festival passes. Early bird tickets will be available soon."
  },
  {
    question: "What events are included in the festival?",
    answer: "The festival includes the WSL Championship Tour, Park Off Music Festival, Comedy Night, Fan Park activities, MTB Classic, Jiujitsu Tournament, Funduro, and the Fishing Competition."
  },
  {
    question: "Is there accommodation available nearby?",
    answer: "Yes, there are numerous accommodation options in Jeffreys Bay ranging from hotels to guesthouses and self-catering apartments. We recommend booking early as the town gets busy during the festival."
  },
  {
    question: "Are there activities for children?",
    answer: "Yes, the Fan Park offers family-friendly activities, and many events are suitable for all ages. The MTB Classic includes a kiddies loop, and the Funduro event has family-friendly options."
  },
  {
    question: "What should I bring to the festival?",
    answer: "Bring sunscreen, a hat, comfortable clothing, and a beach towel. For specific events like the MTB Classic or Funduro, check the event details for required equipment."
  }
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-heading text-gray-900 mb-6">Frequently Asked Questions</h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-12">
            Find answers to common questions about the festival, tickets, accommodation, and more.
          </p>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-lg md:text-xl font-medium text-gray-900">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 bg-white border-t border-gray-200">
                        <p className="text-gray-600 text-lg md:text-xl text-left">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
