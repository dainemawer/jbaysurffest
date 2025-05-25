"use client"

import type React from "react"
import Image from "next/image"
import { AspectRatio } from "./ui/aspect-ratio"
import { motion } from "framer-motion"
import { useIntersectionObserver } from "./use-intersection-observer"

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
  posterImage?: string
  videoBackground?: string
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
  posterImage,
  videoBackground,
}: EventSectionProps) {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.5,
    rootMargin: "0px",
  })

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

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    },
  }

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      },
    },
  }

  const imageGridItem = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    },
  }

  return (
    <section id={id} className={`${videoBackground ? '' : 'py-16 md:py-24'} ${bgColor} content-visibility-auto`} ref={elementRef}>
      {videoBackground ? (
        <motion.div
          className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          variants={staggerChildren}
        >
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={videoBackground} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Content */}
          <div className="container max-w-7xl mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div className="space-y-6" variants={fadeInUp}>
                {logoSrc && (
                  <motion.div variants={fadeInUp}>
                    <Image
                      src={logoSrc}
                      alt={logoAlt || title}
                      width={120}
                      height={40}
                      className="h-10 w-auto object-contain mx-auto invert"
                      loading="lazy"
                    />
                  </motion.div>
                )}
                <motion.h2
                  className="text-6xl md:text-7xl font-heading tracking-tight text-white max-w-2xl mx-auto"
                  variants={fadeInUp}
                >
                  {title}
                </motion.h2>
                <motion.p
                  className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto"
                  variants={fadeInUp}
                >
                  {description}
                </motion.p>
                <motion.div variants={fadeInUp}>
                  <a
                    href={buttonLink}
                    className="inline-flex text-lg h-14 items-center justify-center rounded-full bg-white text-black hover:bg-white/90 transition-colors shadow-md hover:scale-105 active:scale-95 px-8"
                    aria-label={buttonText}
                  >
                    <div className="flex gap-2 items-center">
                      <span className="font-medium">{buttonText}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ) : (
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
            initial="hidden"
            animate={isIntersecting ? "visible" : "hidden"}
            variants={staggerChildren}
          >
            {/* Content Column */}
            <motion.div
              className={`md:col-span-8 flex flex-col h-full ${bgColor !== 'bg-white' ? 'order-1' : 'order-2'}`}
              variants={fadeInUp}
            >
              {/* Header Content */}
              <motion.div className="space-y-2 max-w-3xl" variants={fadeInUp}>
                {logoSrc && (
                  <motion.div variants={fadeInUp}>
                    <Image
                      src={logoSrc}
                      alt={logoAlt || title}
                      width={110}
                      height={33}
                      className="h-8 w-auto object-contain"
                      loading="lazy"
                    />
                  </motion.div>
                )}
                <motion.h2
                  className="text-5xl md:text-6xl font-heading tracking-tight text-gray-900 max-w-xl"
                  variants={fadeInUp}
                >
                  {title}
                </motion.h2>
                <motion.p
                  className="text-base md:text-md text-gray-600 max-w-3xl"
                  variants={fadeInUp}
                >
                  {description}
                </motion.p>
              </motion.div>

              {/* Image Grid */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-5 gap-3 max-w-3xl mt-4"
                variants={staggerChildren}
              >
                {images.map((src, index) => (
                  <motion.div
                    key={src}
                    variants={imageGridItem}
                    custom={index}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    <AspectRatio ratio={1}>
                      <div className="relative w-full h-full overflow-hidden rounded-xl">
                        <Image
                          src={src || "/placeholder.svg"}
                          alt={`${title} ${index + 1}`}
                          fill
                          sizes="(max-width: 768px) 50vw, 25vw"
                          className="object-cover"
                          loading="lazy"
                        />
                      </div>
                    </AspectRatio>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Poster Column */}
            <motion.div
              className={`md:col-span-4 ${bgColor !== 'bg-white' ? 'order-2' : 'order-1'} relative`}
              variants={fadeInUp}
            >
              <AspectRatio ratio={3/4}>
                <div className="relative w-full h-full overflow-visible rounded-xl">
                  <Image
                    src={posterImage || "/placeholder.svg"}
                    alt={`${title} poster`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover rounded-xl"
                    priority
                  />
                  {buttonText && buttonLink && (
                    <a
                      href={buttonLink}
                      className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-auto py-4 px-6 h-16 flex items-center justify-center rounded-full bg-black text-white hover:bg-black/90 transition-colors shadow-md hover:scale-105 active:scale-95"
                      aria-label={buttonText}
                    >
                      <div className="flex gap-2 items-center">
                        <span className="text-md font-medium mb-1">{buttonText}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </div>
                    </a>
                  )}
                </div>
              </AspectRatio>
            </motion.div>
          </motion.div>
        </div>
      )}
    </section>
  )
}
