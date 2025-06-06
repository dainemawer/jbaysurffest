"use client"

import Image from "next/image"

export function SponsorsTicker() {
  // Sample sponsor logos (using placeholders)
  const sponsors = [
    { name: "Corona Cero", logo: "/images/sponsors/corona.jpg" },
    { name: "Red Bull", logo: "/images/sponsors/redbull.jpg" },
    { name: "Grit", logo: "/images/sponsors/grit.jpg" },
    { name: "My Glass", logo: "/images/sponsors/my-glass.jpg" },
    { name: "JBay Wind Farm", logo: "/images/sponsors/jbaywindfarm.jpg" },
    { name: "Kouga Municipality", logo: "/images/sponsors/kouga.jpg" },
    { name: "Oakley", logo: "/images/sponsors/oakley.jpg" },
    { name: "Prime Self", logo: "/images/sponsors/primeself.jpg" },
    { name: "Revive", logo: "/images/sponsors/revive.jpg" },
    { name: "Sealand", logo: "/images/sponsors/sealand.jpg" },
    { name: "The Pound", logo: "/images/sponsors/thepound.jpg" },
    { name: "Water", logo: "/images/sponsors/water.jpg" },
    { name: "Betify", logo: "/images/sponsors/betify.jpg" },
    { name: "Iglu", logo: "/images/sponsors/iglu.jpg" },
    { name: "Ocean Freedom", logo: "/images/sponsors/ocean-freedom.jpg" },
    { name: "Patagonia", logo: "/images/sponsors/patagonia.jpg" },
    { name: "Stance", logo: "/images/sponsors/stance.jpg" },
    { name: "Surfline", logo: "/images/sponsors/surfline.jpg" },
    { name: "Yeti", logo: "/images/sponsors/yeti.jpg" },
    { name: "EZ Massager", logo: "/images/sponsors/ezmassager.jpg" },
    { name: "AlgoaFM", logo: "/images/sponsors/algoa.jpg" },
    { name: "Exec Ops", logo: "/images/sponsors/exec-ops.jpg" },
    { name: "Fitch & Leeds", logo: "/images/sponsors/fitch.jpg" },
    { name: "RVCA", logo: "/images/sponsors/rvca.jpg" },
    { name: "SSG", logo: "/images/sponsors/ssg.jpg" },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-heading text-center text-gray-900 mb-12">Proudly Supported by Our Valued Sponsors</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-12 max-w-6xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-white rounded-lg hover:scale-105"
            >
              <Image
                src={sponsor.logo || "/placeholder.svg"}
                alt={sponsor.name}
                width={150}
                height={150}
                className="w-auto object-contain h-40 grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
