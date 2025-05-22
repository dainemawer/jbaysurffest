"use client"

import { useEffect, useState } from "react"

interface CountdownTimerProps {
  targetDate: Date
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()
      let timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      }

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      }

      return timeLeft
    }

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex gap-6">
      <div>
        <div className="text-5xl md:text-6xl font-bold text-white">{timeLeft.days}</div>
        <div className="text-base text-white/80 uppercase tracking-wider">Days</div>
      </div>
      <div>
        <div className="text-5xl md:text-6xl font-bold text-white">{timeLeft.hours}</div>
        <div className="text-base text-white/80 uppercase tracking-wider">Hours</div>
      </div>
      <div>
        <div className="text-5xl md:text-6xl font-bold text-white">{timeLeft.minutes}</div>
        <div className="text-base text-white/80 uppercase tracking-wider">Minutes</div>
      </div>
      <div>
        <div className="text-5xl md:text-6xl font-bold text-white">{timeLeft.seconds}</div>
        <div className="text-base text-white/80 uppercase tracking-wider">Seconds</div>
      </div>
    </div>
  )
}
