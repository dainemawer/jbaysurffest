"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function SponsorsTicker() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  // Sample sponsor logos (using placeholders)
  const sponsors = [
    { name: "Corona Cero", logo: "/sponsors/corona.jpg" },
    { name: "Red Bull", logo: "/sponsors/redbull.jpg" },
    { name: "Grit", logo: "/sponsors/grit.jpg" },
    { name: "JBay Wind Farm", logo: "/sponsors/jbaywindfarm.jpg" },
    { name: "Kouga Municipality", logo: "/sponsors/kouga.jpg" },
    { name: "Oakley", logo: "/sponsors/oakley.jpg" },
    { name: "Prime Self", logo: "/sponsors/primeself.jpg" },
    { name: "Revive", logo: "/sponsors/revive.jpg" },
    { name: "Sealand", logo: "/sponsors/sealand.jpg" },
    { name: "The Pound", logo: "/sponsors/thepound.jpg" },
    { name: "Water", logo: "/sponsors/water.jpg" },
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
        <h2 className="text-3xl md:text-4xl font-heading text-center text-gray-900 mb-8">Proudly Supported by Our Valued Sponsors</h2>
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
                  className="h-12 md:h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
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
