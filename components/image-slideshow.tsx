"use client"

import type React from "react"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { AspectRatio } from "./ui/aspect-ratio"

interface ImageSlideshowProps {
  images: string[]
  alt: string
}

export function ImageSlideshow({ images, alt }: ImageSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  // Use intersection observer to only autoplay when in view
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  })

  // Dynamically determine aspect ratio from the first image (fallback to 16/9)
  const [aspectRatio, setAspectRatio] = useState(16 / 9)

  useEffect(() => {
    if (!images[0]) return
    const img = new window.Image()
    img.src = images[0]
    img.onload = () => {
      if (img.naturalWidth && img.naturalHeight) {
        setAspectRatio(img.naturalWidth / img.naturalHeight)
      }
    }
  }, [images])

  // Handle slide navigation
  const goToNextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, [images.length])

  const goToPrevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }, [images.length])

  // Auto-advance slides when not hovering and in view
  useEffect(() => {
    if (inView && !isHovering && images.length > 1) {
      autoPlayRef.current = setInterval(goToNextSlide, 5000)
    } else if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [inView, isHovering, goToNextSlide, images.length])

  // Touch event handlers for mobile swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isSignificantSwipe = Math.abs(distance) > 50

    if (isSignificantSwipe) {
      if (distance > 0) {
        // Swiped left, go to next slide
        goToNextSlide()
      } else {
        // Swiped right, go to previous slide
        goToPrevSlide()
      }
    }

    setTouchStart(null)
    setTouchEnd(null)
  }

  // Only render controls if there's more than one image
  const showControls = images.length > 1

  return (
    <AspectRatio ratio={aspectRatio}>
      <div
        ref={ref}
        className="relative w-full h-full overflow-hidden rounded-xl"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        aria-roledescription="carousel"
        aria-label={`${alt} image slideshow`}
      >
        {/* Images */}
        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            aria-hidden={index !== currentIndex}
          >
            <Image
              src={src || "/placeholder.svg"}
              alt={`${alt} ${index + 1} of ${images.length}`}
              fill
              sizes="100vw"
              className="object-cover"
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}

        {/* Navigation controls - only show if there's more than one image */}
        {showControls && (
          <>
            <button
              onClick={(e) => {
                e.preventDefault()
                goToPrevSlide()
              }}
              className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition-opacity hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault()
                goToNextSlide()
              }}
              className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition-opacity hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        {/* Indicators */}
        {showControls && (
          <div className="absolute bottom-3 left-0 right-0 z-20 flex justify-center space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"} transition-all`}
                aria-label={`Go to image ${index + 1}`}
                aria-current={index === currentIndex}
              />
            ))}
          </div>
        )}
      </div>
    </AspectRatio>
  )
}
