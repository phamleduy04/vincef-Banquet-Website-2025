import Image from "next/image"
import Link from "next/link"

export default function DressCodePage() {
  const dressCodeExamples = [
    {
      title: "Red & Yellow",
      description:
        "Courage and Determination",
      image: "/dress-code/gryffidor.png?height=768&width=356",
    },
    {
      title: "Green & Silver",
      description:
        "Ambition and Cunning",
      image: "/dress-code/slytherin.png?height=768&width=356",
    },
    {
      title: "Yellow & Black",
      description: "Loyalty and Kindness",
      image: "/dress-code/hufflepuff.png?height=768&width=356",
    },
    {
      title: "Blue & Silver",
      description:
        "Wisdom and Creativity",
      image: "/dress-code/ravenclaw.png?height=768&width=356",
    },
  ]

  return (
    <div
      className="w-full"
      style={{
        backgroundImage: "url('/dress-code/dress-code-background.png?height=1080&width=1920&text=DressCodeBackground')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full">
        <div className="container mx-auto px-4 pt-20">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div className="space-y-6 rounded-lg p-6 text-center md:order-first">
              {/* Small logo */}
              <div className="mx-auto h-[100px] w-[300px] relative">
                <Image
                  src="/dress-code/dress-code-small-logo.png?height=100&width=300&text=Logo"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">DRESS CODE</h1>
              <p className="text-lg text-white/80">
                Step into the magical world of Vincef Banquet, where every table embodies the vibrant spirit of the four legendary Hogwarts houses! Which house will you represent?
              </p>
              <p className="text-lg text-white/80">
                Complete the Sorting Survey below to discover your house and dress code color! Your house result will be sent back within 48 hours.
              </p>
              <p className="text-lg text-white/80">
                If the survey isn’t completed by April 5, you’ll be sorted into a random house. Prefer VINCEF to select your house? DM us for a magical surprise sorting!
              </p>
              <div className="pt-4">
                <Link
                  href="https://forms.gle/rx11y4TyDXzSzkoQ6"
                  target="_blank"
                  className="inline-flex h-20 items-center justify-center rounded-[36px] bg-white text-black bg-primary px-6 py-2 text-2xl font-bold shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  HOUSE SORTING SURVEY
                </Link>
              </div>
            </div>
            <div className="relative aspect-video mx-auto h-full w-full max-w-md overflow-hidden rounded-lg md:aspect-square md:order-last">
              <Image src="/dress-code/dress-code-big-logo.png?height=600&width=600" alt="Dress Code" fill className="object-cover" />
            </div>
          </div>

          {/* Four images grid with descriptions */}
          <div className="mt-8 md:mt-12">
            <div className="grid grid-cols-4 gap-2 md:gap-4 lg:gap-8">
              {dressCodeExamples.map((example, index) => (
                <div key={index} className="flex flex-col overflow-hidden rounded-lg">
                  <div className="relative w-full">
                    <div className="aspect-[9/19]">
                      <Image
                        src={example.image || "/placeholder.svg"}
                        alt={example.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="p-1 text-center sm:p-2 md:p-4">
                    <h3 className="text-xs font-semibold text-white sm:text-sm md:mb-2 md:text-xl">{example.title}</h3>
                    <p className="text-xs text-white/80 sm:text-sm md:block">{example.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

