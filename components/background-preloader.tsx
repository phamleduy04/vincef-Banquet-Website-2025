"use client"

import { useEffect } from "react"

const backgrounds = [
  "https://cdn.vincef.org/banquet-2025/landing-page/landing-page-background.png?height=1080&width=1920&text=LandingBackground",
  "https://cdn.vincef.org/banquet-2025/intro/intro-background.png?height=1080&width=1920&text=IntroBackground",
  "https://cdn.vincef.org/banquet-2025/seating/seating-background.png?height=1080&width=1920&text=SeatBackground",
  "https://cdn.vincef.org/banquet-2025/forms/forms-background.png?height=1080&width=1920&text=FormsBackground",
  "https://cdn.vincef.org/banquet-2025/dress-code/dress-code-background.png?height=1080&width=1920&text=DressCodeBackground",
  "https://cdn.vincef.org/banquet-2025/timeline/timeline-background.png?height=1080&width=1920&text=TimelineBackground",
  "https://cdn.vincef.org/banquet-2025/donation/donation-background.png?height=1080&width=1920&text=DonationBackground",
  "https://cdn.vincef.org/banquet-2025/officers/officers-background.png?height=1080&width=1920&text=OfficersBackground",
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

