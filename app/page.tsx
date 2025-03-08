import Image from "next/image"

export default function Home() {
  return (
    <div
      className="relative min-h-screen w-full pt-16"
      style={{
        backgroundImage: "url('/landing-page/landing-page-background.png?height=1080&width=1920')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Landing page specific background */}
      <div className="min-h-screen w-full bg-black/40">

      {/* First image: 75% width, centered, below tabs */}
      <div className="mx-auto mt-[-20px] w-[65%] px-4">
        <div className="relative w-full">
          <Image
            src="/landing-page/landing-page-moonlit.png?height=600&width=1400"
            alt="First showcase image"
            width={1400}
            height={600}
            className="h-auto w-full rounded-lg"
            priority
          />
        </div>
      </div>

      {/* Second image: 25% width, centered, below first image */}
      <div className="relative mx-auto mt-[-50px] w-[33%] px-4 z-10">
        <div className="relative w-full">
          <Image
            src="/landing-page/landing-page-feast.png?height=400&width=400"
            alt="Second showcase image"
            width={400}
            height={400}
            className="h-auto w-full rounded-lg"
          />
        </div>
      </div>

      {/* Third and fourth images: 20% width each, 15% from borders, below second image */}
      <div className="relative mx-auto flex justify-between mt-[-80px] z-10 px-[15%]">
        {/* Third image: left side */}
        <div className="relative w-[30%]">
          <Image
            src="/landing-page/landing-page-time.png?height=300&width=300"
            alt="Third showcase image"
            width={300}
            height={300}
            className="h-auto w-full rounded-lg"
          />
        </div>

        {/* Fourth image: right side */}
        <div className="relative w-[30%]">
          <Image
            src="/landing-page/landing-page-date.png?height=300&width=300"
            alt="Fourth showcase image"
            width={300}
            height={300}
            className="h-auto w-full rounded-lg"
          />
        </div>
      </div>

      {/* Fifth image: 30% width, centered, below third and fourth images */}
      <div className="relative mx-auto mt-[-18px] w-[35%] px-4 z-10">
        <div className="relative w-full">
          <Image
            src="/landing-page/landing-page-location.png?height=400&width=600"
            alt="Fifth showcase image"
            width={600}
            height={400}
            className="h-auto w-full rounded-lg"
          />
        </div>
      </div>

      {/* Sixth image: 30% width, centered, below fifth image */}
      <div className="relative mx-auto mt-[-24px] w-[35%] px-4 pb-16">
        <div className="relative w-full">
          <Image
            src="/landing-page/landing-page-logo.png?height=400&width=600"
            alt="Sixth showcase image"
            width={600}
            height={400}
            className="h-auto w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  </div>
  )
}

