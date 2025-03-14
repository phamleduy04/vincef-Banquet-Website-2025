import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, DiscIcon as Discord } from "lucide-react"

export default function Home() {
  return (
    <div
      className="w-full pt-16"
      style={{
        backgroundImage: "url('/landing-page/landing-page-background.png?height=1080&width=1920&text=LandingBackground')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Landing page specific background */}
      <div className="w-full">

      {/* First image: 75% width, centered, below tabs */}
      <div className="mx-auto mt-[-8px] w-[65%] px-4">
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
      <div className="relative mx-auto flex justify-between mt-[-10vh] z-10 px-[15%]">
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
      <div className="relative mx-auto mt-[-2vh] w-[35%] px-4 z-10">
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
      <div className="relative mx-auto mt-[-2vh] w-[35%] px-4">
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
      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 py-2">
        <Link
          href="https://www.facebook.com/groups/100188533467103"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-primary transition-colors"
        >
          <Facebook size={30} />
          <span className="sr-only">Facebook</span>
        </Link>
        <Link
          href="https://www.instagram.com/vincefutd/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-primary transition-colors"
        >
          <Instagram size={30} />
          <span className="sr-only">Instagram</span>
        </Link>
        <Link
          href="https://s.vincef.org/chat"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-primary transition-colors"
        >
          <Discord size={30} />
          <span className="sr-only">Discord</span>
        </Link>
      </div>
    </div>
  </div>
  )
}

