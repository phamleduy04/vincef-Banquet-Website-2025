import Image from "next/image"
import Link from "next/link"

export default function FormsPage() {
  const forms = [
    {
      title: "GRADUATION FAREWELL",
      description: "Let us know if you graduated in Summer 2024, Fall 2024, or are about to graduate in Spring 2025!",
      image: "/forms/graduation-farewell.png?height=300&width=300",
      url: "https://forms.gle/XGcU8ws9nwr385d47",
    },
    {
      title: "CONFESSION BOX",
      description: "Whether it's a heartfelt message to a dear friend, a note of appreciation, or a secret you've been meaning to share, let your words be a keepsake of this unforgettable night. 💌",
      image: "/forms/confession-box.png?height=300&width=300",
      url: "https://forms.gle/YVLU2iqgGBPL5s3Z9",
    },
    {
      title: "To be announced",
      description: "Stay tuned in to VINCEF's social media to get newest updates on Moonlit Feast!",
      image: "/coming-soon-square.png?height=300&width=300",
      url: "/",
    },
    {
      title: "To be announced",
      description: "Stay tuned in to VINCEF's social media to get newest updates on Moonlit Feast!",
      image: "/coming-soon-square.png?height=300&width=300",
      url: "/",
    },
  ]

  return (
    <div
      className="min-h-screen w-full"
      style={{
        backgroundImage: "url('/forms/forms-background.png?height=1080&width=1920&text=FormsBackground')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="min-h-screen w-full">
        <div className="container mx-auto px-4 pt-20">
          <h1 className="mb-8 text-center text-3xl font-bold tracking-tight text-white md:text-4xl">Forms</h1>
          <div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-2 lg:gap-12">
            {forms.map((form, index) => (
              <div key={index} className="flex flex-col md:flex-row mx-auto w-full max-w-sm md:max-w-none md:flex overflow-hidden rounded-lg shadow-lg">
                <div className="relative w-full md:w-2/5">
                  <Image
                    src={form.image || "/placeholder.svg"}
                    alt={form.title}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="w-full md:w-3/5 flex flex-col justify-between p-6 backdrop-brightness-50">
                  <div>
                    <h2 className="mb-3 text-2xl font-semibold text-white">{form.title}</h2>
                    <p className="text-base text-white/80">{form.description}</p>
                  </div>
                  <div className="mt-2">
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
      </div>
    </div>
  )
}

