"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function SponsorsTicker() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  // Sample sponsor logos (using placeholders)
  const sponsors = [
    { name: "Corona Cero", logo: "/placeholder.svg?height=60&width=180" },
    { name: "Sponsor 2", logo: "/placeholder.svg?height=60&width=180" },
    { name: "Sponsor 3", logo: "/placeholder.svg?height=60&width=180" },
    { name: "Sponsor 4", logo: "/placeholder.svg?height=60&width=180" },
    { name: "Sponsor 5", logo: "/placeholder.svg?height=60&width=180" },
    { name: "Sponsor 6", logo: "/placeholder.svg?height=60&width=180" },
    { name: "Sponsor 7", logo: "/placeholder.svg?height=60&width=180" },
    { name: "Sponsor 8", logo: "/placeholder.svg?height=60&width=180" },
  ]

  // Duplicate sponsors for continuous scrolling
  const allSponsors = [...sponsors, ...sponsors]

  // Intersection Observer to start animation when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (scrollRef.current) {
      observer.observe(scrollRef.current)
    }

    return () => {
      if (scrollRef.current) {
        observer.unobserve(scrollRef.current)
      }
    }
  }, [])

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading text-center text-gray-900 mb-8">Our Sponsors</h2>
        <div className="relative overflow-hidden" ref={scrollRef}>
          <div
            className={`flex items-center space-x-12 py-6 ${isVisible ? "animate-marquee" : ""}`}
            style={{
              animationDuration: "30s",
              animationIterationCount: "infinite",
              animationTimingFunction: "linear",
            }}
          >
            {allSponsors.map((sponsor, index) => (
              <div key={index} className="flex-shrink-0">
                <Image
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={sponsor.name}
                  width={180}
                  height={60}
                  className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
