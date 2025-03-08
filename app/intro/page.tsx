import Image from "next/image"
import PageWrapper from "@/components/page-wrapper"

export default function IntroPage() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-4 pt-20">
        <div className="grid grid-cols-1 items-center gap-8 py-12 md:grid-cols-2 md:py-24">
          <div className="relative aspect-video h-full w-full overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm md:aspect-square">
            <Image src="/banquet-picture.jpg?height=600&width=600" alt="Intro Image" fill className="object-cover" />
          </div>
          <div className="space-y-4 rounded-lg bg-black/20 p-6 backdrop-blur-sm">
            <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">What is VINCEF Banquet?</h1>
            <p className="text-white/80">
              TBD
            </p>
            <p className="text-white/80">
              TBD
            </p>
            <p className="text-white/80">
              TBD
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

