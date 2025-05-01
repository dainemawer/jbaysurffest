"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  targetDate: Date
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="grid grid-cols-4 gap-2 md:gap-4 text-center">
      <div className="flex flex-col">
        <div className="bg-white text-blue-600 rounded-lg p-2 md:p-4 text-2xl md:text-4xl font-heading">
          {timeLeft.days}
        </div>
        <span className="text-blue-100 text-xs md:text-sm mt-1">Days</span>
      </div>
      <div className="flex flex-col">
        <div className="bg-white text-blue-600 rounded-lg p-2 md:p-4 text-2xl md:text-4xl font-heading">
          {timeLeft.hours}
        </div>
        <span className="text-blue-100 text-xs md:text-sm mt-1">Hours</span>
      </div>
      <div className="flex flex-col">
        <div className="bg-white text-blue-600 rounded-lg p-2 md:p-4 text-2xl md:text-4xl font-heading">
          {timeLeft.minutes}
        </div>
        <span className="text-blue-100 text-xs md:text-sm mt-1">Minutes</span>
      </div>
      <div className="flex flex-col">
        <div className="bg-white text-blue-600 rounded-lg p-2 md:p-4 text-2xl md:text-4xl font-heading">
          {timeLeft.seconds}
        </div>
        <span className="text-blue-100 text-xs md:text-sm mt-1">Seconds</span>
      </div>
    </div>
  )
}
