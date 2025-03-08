import type React from "react"

interface PageWrapperProps {
  children: React.ReactNode
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        backgroundImage: "url('/website-background.png?height=1080&width=1920&text=SharedBackground')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="min-h-screen w-full bg-black/40">{children}</div>
    </div>
  )
}

