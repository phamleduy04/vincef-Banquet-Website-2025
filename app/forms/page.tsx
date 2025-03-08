import Image from "next/image"
import Link from "next/link"
import PageWrapper from "@/components/page-wrapper"

export default function FormsPage() {
  const forms = [
    {
      title: "VINCEF CHOICE AWARDS",
      description: "TBD",
      image: "/placeholder.svg?height=300&width=300",
      url: "https://forms.google.com/",
    },
    {
      title: "CONFESSION BOX",
      description: "TBD",
      image: "/placeholder.svg?height=300&width=300",
      url: "https://forms.google.com/",
    },
    {
      title: "GRADUATION FAREWELL",
      description: "TBD",
      image: "/placeholder.svg?height=300&width=300",
      url: "https://forms.google.com/",
    },
    {
      title: "OFFICER RECRUIT",
      description: "TBD",
      image: "/placeholder.svg?height=300&width=300",
      url: "https://forms.google.com/",
    },
  ]

  return (
    <PageWrapper>
      <div className="container mx-auto px-4 pt-20">
        <h1 className="mb-8 text-center text-3xl font-bold tracking-tight text-white md:text-4xl">Forms</h1>
        <div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-2 lg:gap-12">
          {forms.map((form, index) => (
            <div key={index} className="flex overflow-hidden rounded-lg bg-black/30 shadow-lg backdrop-blur-sm">
              <div className="relative h-auto w-2/5">
                <Image
                  src={form.image || "/placeholder.svg"}
                  alt={form.title}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex w-3/5 flex-col justify-between p-6">
                <div>
                  <h2 className="mb-3 text-2xl font-semibold text-white">{form.title}</h2>
                  <p className="text-base text-white/80">{form.description}</p>
                </div>
                <div className="mt-6">
                  <Link
                    href={form.url}
                    target="_blank"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Go to Form
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}

