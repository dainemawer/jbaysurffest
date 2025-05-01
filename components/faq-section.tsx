"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FaqItem {
  question: string
  answer: string
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs: FaqItem[] = [
    {
      question: "When and where is the Jeffreys Bay Surf Festival?",
      answer:
        "The Jeffreys Bay Surf Festival will take place from May 15-22, 2025, at Supertubes Beach in Jeffreys Bay, Eastern Cape, South Africa.",
    },
    {
      question: "How can I purchase tickets?",
      answer:
        "Tickets can be purchased online through our official website or at selected retail outlets across South Africa. We offer different ticket options including day passes, weekend passes, and full festival passes.",
    },
    {
      question: "Is there accommodation available nearby?",
      answer:
        "Yes, Jeffreys Bay offers a wide range of accommodation options from luxury hotels to budget-friendly backpackers. We recommend booking early as accommodation fills up quickly during the festival period.",
    },
    {
      question: "Can I participate in the sporting events?",
      answer:
        "Yes! Many of our events like the MTB competition, Jiujitsu tournament, and fishing competition are open to public participation. Registration details for each event can be found on their respective pages on our website.",
    },
    {
      question: "What should I bring to the festival?",
      answer:
        "We recommend bringing sunscreen, a hat, comfortable clothing, and a reusable water bottle. For specific events, additional equipment may be required - please check the individual event pages for details.",
    },
    {
      question: "Is the festival family-friendly?",
      answer:
        "We have activities for all ages at our Fan Park, and children under 12 receive discounted entry. Please note that some evening events may have age restrictions.",
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about the Jeffreys Bay Surf Festival
          </p>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-5">
              <button
                onClick={() => toggleFaq(index)}
                className="flex w-full justify-between items-center text-left focus:outline-none"
              >
                <h3 className="text-xl font-heading text-gray-900">{faq.question}</h3>
                <span className="ml-6 flex-shrink-0 text-mint-600">
                  {openIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-3 pr-12">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
