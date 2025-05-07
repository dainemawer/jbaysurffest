"use client"

import type React from "react"

import Image from "next/image"
import { ImageSlideshow } from "./image-slideshow"

interface EventSectionProps {
  id: string
  title: string
  description: string
  images: string[]
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
  images,
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

  // Determine if we should swap columns on desktop
  const shouldSwapColumns =
    bgColor === "bg-mint-50" && !bannerStyle;

  return (
    <section id={id} className={`py-16 md:py-24 ${bgColor} content-visibility-auto`}>
      <div className="container mx-auto px-4">
        <div
          className={`grid ${
            shouldSwapColumns
              ? "md:grid-cols-[1.5fr_1fr]"
              : "md:grid-cols-[1fr_1.5fr]"
          } gap-8 md:gap-12 items-center`}
        >
          {/* Text Column */}
          <div
            className={`space-y-4 md:space-y-6 ${bannerStyle ? "md:col-span-2 text-center max-w-3xl mx-auto mb-8" : ""}
              ${shouldSwapColumns ? "md:order-2" : "md:order-1"}
              order-1
            `}
          >
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
            <h2 className="text-5xl md:text-6xl font-heading tracking-tight text-gray-900">{title}</h2>
            <p className="text-base md:text-xl text-gray-600 mb-8">{description}</p>
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

          {/* Image Column */}
          <div
            className={`${bannerStyle ? "md:col-span-2" : ""}
              ${shouldSwapColumns ? "md:order-1" : "md:order-2"}
              order-2
            `}
          >
            <ImageSlideshow images={images} alt={title} />
          </div>
        </div>
      </div>
    </section>
  )
}
