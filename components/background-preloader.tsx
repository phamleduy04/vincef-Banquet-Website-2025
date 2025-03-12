"use client"

import { useEffect } from "react"

const backgrounds = [
  "/placeholder.svg?height=1080&width=1920&text=LandingBackground",
  "/placeholder.svg?height=1080&width=1920&text=IntroBackground",
  "/placeholder.svg?height=1080&width=1920&text=SeatBackground",
  "/placeholder.svg?height=1080&width=1920&text=FormsBackground",
  "/placeholder.svg?height=1080&width=1920&text=DressCodeBackground",
  "/placeholder.svg?height=1080&width=1920&text=TimelineBackground",
  "/placeholder.svg?height=1080&width=1920&text=DonationBackground",
  "/placeholder.svg?height=1080&width=1920&text=OfficersBackground",
]

export default function BackgroundPreloader() {
  useEffect(() => {
    backgrounds.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [])

  return null
}

