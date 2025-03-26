import Image from "next/image"

export default function SeatPage() {
  return (
    <div
      className="w-full"
      style={{  
        backgroundImage: "url('https://cdn.vincef.org/banquet-2025/seating/seating-background.png?height=1080&width=1920&text=SeatBackground')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full">
        <div className="container mx-auto px-4 pt-20 pb-10">
          <div className="flex flex-col gap-8">
            {/* Text section - now at the top, full width */}
            <div className="space-y-4 rounded-lg p-6 text-center">
              <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">SEATING MAP</h1>
            </div>

            {/* Image section - now below text, full width */}
            <div className="mx-auto w-full max-w-5xl">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm">
                <Image
                  src="https://cdn.vincef.org/banquet-2025/coming-soon-rectangle.png?height=600&width=1200"
                  alt="Seating Chart"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}