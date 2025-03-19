import Image from "next/image"

export default function IntroPage() {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        backgroundImage: "url('https://cdn.vincef.org/banquet-2025/intro/intro-background.png?height=1080&width=1920&text=IntroBackground')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="min-h-screen w-full">
        <div className="container mx-auto px-4 pt-20">
          <div className="grid grid-cols-1 items-center gap-8 py-12 md:grid-cols-2 md:py-24">
            <div className="relative aspect-video h-full w-full overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm md:aspect-square">
              <Image src="https://cdn.vincef.org/banquet-2025/intro/banquet-picture.JPG?height=600&width=600" alt="Intro Image" fill className="object-cover" />
            </div>
            <div className="space-y-4 rounded-lg bg-black/20 p-6 backdrop-blur-sm">
              <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">WHAT IS VINCEF BANQUET?</h1>
              <p className="text-xl text-white/80">
                The VINCEF Banquet at UT Dallas is a special annual event that brings together students, alumni, and sponsors to celebrate Vietnamese culture, achievements, and community engagement. The event aims to foster connections among current and former members, recognize outstanding contributions, and strengthen ties with sponsors who support the organization’s initiatives.
              </p>
              <p className="text-xl text-white/80">
                This year's VINCEF Banquet is a Harry Potter-themed event: Moonlit Feast. Join us for a magical evening filled with wonder and enchantment!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

