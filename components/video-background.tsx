"use client"

import { useEffect, useRef } from "react"

interface VideoBackgroundProps {
  videoSrc: string
  posterSrc?: string
}

export function VideoBackground({ videoSrc, posterSrc }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.playbackRate = 0.75 // Slow down the video slightly
    }
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster={posterSrc}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />
    </div>
  )
}
