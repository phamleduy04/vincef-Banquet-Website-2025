"use client"

import { useEffect } from "react"

const backgrounds = [
  "/landing-page/landing-page-background.png?height=1080&width=1920&text=LandingBackground",
  "/intro/intro-background.png?height=1080&width=1920&text=IntroBackground",
  "/seating/seating-background.png?height=1080&width=1920&text=SeatBackground",
  "/forms/forms-background.png?height=1080&width=1920&text=FormsBackground",
  "/dress-code/dress-code-background.png?height=1080&width=1920&text=DressCodeBackground",
  "/timeline/timeline-background.png?height=1080&width=1920&text=TimelineBackground",
  "/donation/donation-background.png?height=1080&width=1920&text=DonationBackground",
  "/officers/officers-background.png?height=1080&width=1920&text=OfficersBackground",
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

