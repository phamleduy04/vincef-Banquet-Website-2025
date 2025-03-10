import Image from "next/image"

export default function DonationPage() {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        backgroundImage: "url('/donation/donation-background.png?height=1080&width=1920&text=DonationBackground')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="min-h-screen w-full bg-black/40">
        <div className="container mx-auto px-4 pt-20">
          <div className="grid grid-cols-1 items-center gap-8 py-12 md:grid-cols-2 md:py-24">
            <div className="relative aspect-video h-full w-full overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm md:aspect-square">
              <Image src="/placeholder.svg?height=600&width=600" alt="Donation" fill className="object-cover" />
            </div>
            <div className="space-y-4 rounded-lg bg-black/20 p-6 backdrop-blur-sm">
              <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">DONATION TO ...</h1>
              <p className="text-white/80">
                TBD
              </p>
              <p className="text-white/80">
                TBD
              </p>
              <div className="pt-4">
                <button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

