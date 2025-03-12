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
              <p className="text-xl text-white/80">
                Step into the magical world of Vincef Banquet, where every table embodies the vibrant spirit of the four legendary Hogwarts houses! Which house will you represent?
              </p>
              <p className="text-xl text-white/80">
                Complete the Sorting Survey below to discover your house and dress code color! Your house result will be sent back within 48 hours.
              </p>
              <p className="text-xl text-white/80">
                If the survey isn’t completed by April 5, you’ll be sorted into a random house. Prefer VINCEF to select your house? DM us for a magical surprise sorting!
              </p>
              <div className="pt-4">
                <Link
                  href="https://forms.gle/rx11y4TyDXzSzkoQ6"
                  target="_blank"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  House Sorting Survey
                </Link>
              </div>
            </div>
            <div className="relative aspect-video h-full w-full overflow-hidden rounded-lg md:aspect-square md:order-last">
              <Image src="/dress-code/dress-code-big-logo.png?height=600&width=600" alt="Dress Code" fill className="object-cover" />
            </div>
          </div>

          {/* Four images grid with descriptions */}
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {dressCodeExamples.map((example, index) => (
                <div key={index} className="flex flex-col overflow-hidden rounded-lg">
                  <div className="relative h-[500px] w-full">
                    <Image
                      src={example.image || "/placeholder.svg"}
                      alt={example.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="mb-2 text-xl font-semibold text-white">{example.title}</h3>
                    <p className="text-white/80">{example.description}</p>
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

