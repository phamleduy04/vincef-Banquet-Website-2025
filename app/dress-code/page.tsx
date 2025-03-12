import Image from "next/image"
import Link from "next/link"

export default function DressCodePage() {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        backgroundImage: "url('/dress-codes/dress-codes-background.png?height=1080&width=1920&text=FormsBackground')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="min-h-screen w-full bg-black/40">
        <div className="container mx-auto px-4 pt-20">
          <div className="flex flex-col gap-8 py-12 md:py-24">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
              <div className="space-y-4 rounded-lg bg-black/20 p-6 backdrop-blur-sm md:order-first">
                <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">DRESS CODE</h1>
                <p className="text-white/80">
                  TBD
                </p>
                <p className="text-white/80">
                  TBD
                </p>
                <p className="text-white/80">
                TBD
                </p>
                <div className="pt-4">
                  <Link
                    href="https://forms.gle/yTVv8tJM9PCexhBQA"
                    target="_blank"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    House Sorting Survey
                  </Link>
                </div>
              </div>
              <div className="relative aspect-video h-full w-full overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm md:aspect-square md:order-last">
                <Image src="/placeholder.svg?height=600&width=600" alt="Dress Code" fill className="object-cover" />
              </div>
            </div>
            <div className="mt-8 w-full">
              <div className="relative aspect-[21/9] w-full overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm">
                <Image
                  src="/placeholder.svg?height=600&width=1400"
                  alt="Dress Code Examples"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

