"use client"

import type React from "react"

import Image from "next/image"

interface EventSectionProps {
  id: string
  title: string
  description: string
  imageSrc: string
  logoSrc?: string
  logoAlt?: string
  buttonText: string
  buttonLink: string
  imagePosition: "left" | "right"
  bgColor: string
  bannerStyle?: boolean
  useMintButton?: boolean
}

export function EventSection({
  id,
  title,
  description,
  imageSrc,
  logoSrc,
  logoAlt,
  buttonText,
  buttonLink,
  imagePosition,
  bgColor,
  bannerStyle = false,
  useMintButton = false,
}: EventSectionProps) {
  // Handle ticket button clicks
  const isTicketButton = buttonText.toLowerCase().includes("ticket") || buttonLink === "#tickets"

  const handleButtonClick = (e: React.MouseEvent) => {
    if (isTicketButton) {
      e.preventDefault()
      // Dispatch a custom event that the parent component can listen for
      const ticketEvent = new CustomEvent("openTicketsModal")
      document.dispatchEvent(ticketEvent)
    }
  }

  return (
    <section id={id} className={`py-16 md:py-24 ${bgColor} content-visibility-auto`}>
      <div className="container mx-auto px-4">
        <div
          className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${imagePosition === "right" ? "" : "md:grid-flow-dense"}`}
        >
          <div className={`space-y-6 ${bannerStyle ? "md:col-span-2 text-center max-w-3xl mx-auto mb-8" : ""}`}>
            {logoSrc && (
              <div className="mb-6">
                <Image
                  src={logoSrc || "/placeholder.svg"}
                  alt={logoAlt || title}
                  width={150}
                  height={50}
                  className="h-12 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            )}
            <h2 className="text-4xl md:text-5xl font-heading tracking-tight text-gray-900">{title}</h2>
            <p className="text-lg text-gray-600">{description}</p>
            <div>
              {isTicketButton ? (
                <button
                  onClick={handleButtonClick}
                  className={`inline-flex h-12 items-center justify-center rounded-md ${
                    useMintButton
                      ? "bg-mint-300 hover:bg-mint-400 text-white"
                      : "bg-[#f18a50] hover:bg-[#e07a40] text-white"
                  } px-8 py-3 text-base font-heading shadow transition-colors`}
                >
                  {buttonText}
                </button>
              ) : (
                <a
                  href={buttonLink}
                  className={`inline-flex h-12 items-center justify-center rounded-md ${
                    useMintButton
                      ? "bg-mint-300 hover:bg-mint-400 text-white"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  } px-8 py-3 text-base font-heading shadow transition-colors`}
                >
                  {buttonText}
                </a>
              )}
            </div>
          </div>

          <div className={`${bannerStyle ? "md:col-span-2" : ""}`}>
            <div className={`relative ${bannerStyle ? "h-64 md:h-96" : "h-64 md:h-96"} overflow-hidden rounded-xl`}>
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={title}
                fill
                sizes={bannerStyle ? "(max-width: 768px) 100vw, 1200px" : "(max-width: 768px) 100vw, 600px"}
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
