"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { RotateCcw } from "lucide-react"

export default function OrientationLock({ children }: { children: React.ReactNode }) {
  const [isPortrait, setIsPortrait] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile
    const checkIfMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase()
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)
      setIsMobile(isMobileDevice && window.innerWidth < 1024)
    }

    // Check orientation
    const checkOrientation = () => {
      if (window.matchMedia("(orientation: portrait)").matches) {
        setIsPortrait(true)
      } else {
        setIsPortrait(false)
      }
    }

    // Initial checks
    checkIfMobile()
    checkOrientation()

    // Add event listeners
    window.addEventListener("resize", checkIfMobile)
    window.addEventListener("orientationchange", checkOrientation)
    window.addEventListener("resize", checkOrientation)

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkIfMobile)
      window.removeEventListener("orientationchange", checkOrientation)
      window.removeEventListener("resize", checkOrientation)
    }
  }, [])

  // Only show orientation message on mobile devices in portrait mode
  if (isMobile && isPortrait) {
    return (
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black p-6 text-center">
        <RotateCcw size={64} className="mb-6 animate-pulse text-primary" />
        <h2 className="mb-4 text-2xl font-bold text-white">Please Rotate Your Device</h2>
        <p className="text-lg text-white/80">
          This website is designed to be viewed in landscape mode. Please rotate your device for the best experience.
        </p>
      </div>
    )
  }

  // Return children if not mobile or already in landscape mode
  return <>{children}</>
}

