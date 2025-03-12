import Image from "next/image"

export default function SeatPage() {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        backgroundImage: "url('/seating/seating-background.png?height=1080&width=1920&text=SeatBackground')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="min-h-screen w-full">
        <div className="container mx-auto px-4 pt-20">
          <div className="grid grid-cols-1 items-center gap-8 py-12 md:grid-cols-4 md:py-24">
            {/* Text section - 25% width */}
            <div className="space-y-4 rounded-lg md:order-first">
              <h1 className="text-4xl font-bold tracking-tight text-black md:text-4xl">SEATING MAP</h1>
            </div>

            {/* Image section - 75% width */}
            <div className="relative aspect-[16/9] h-full w-full overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm md:col-span-3 md:order-last">
              <Image src="/coming-soon-rectangle.png?height=600&width=1200" alt="Seating Chart" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}