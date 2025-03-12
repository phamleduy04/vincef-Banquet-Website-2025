import Image from "next/image"

export default function OfficersPage() {
  const officers = [
    {
      name: "Nam Duong",
      position: "President",
      image: "/officers/pre.png?height=400&width=300",
    },
    {
      name: "Quang Ngo",
      position: "Vice President",
      image: "/officers/vice.png?height=400&width=300",
    },
    {
      name: "Ngoc Pham",
      position: "Secretary",
      image: "/officers/secret.png?height=400&width=300",
    },
    {
      name: "Mimi Lam",
      position: "Marketing Chair",
      image: "/officers/market.png?height=400&width=300",
    },
    {
      name: "Thai Tong",
      position: "Cultural Chair",
      image: "/officers/culture.png?height=400&width=300",
    },
    {
      name: "Duc Phan",
      position: "Photographer",
      image: "/officers/photo.png?height=400&width=300",
    },
    {
      name: "Ngoc Ta",
      position: "Treasurer",
      image: "/officers/treasure.png?height=400&width=300",
    },
    {
      name: "Cody Do",
      position: "Social Chair",
      image: "/officers/social.png?height=400&width=300",
    },
  ]

  return (
    <div
      className="min-h-screen w-full"
      style={{
        backgroundImage: "url('/officers/officers-background.png?height=1080&width=1920&text=OfficersBackground')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="min-h-screen w-full">
        <div className="container mx-auto px-4 pt-20">
          <h1 className="mb-8 text-center text-3xl font-bold tracking-tight text-white md:text-4xl">Our Officers</h1>
          <div className="grid grid-cols-1 gap-6 py-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-8">
            {officers.map((officer, index) => (
              <div key={index} className="flex flex-col overflow-hidden rounded-lg bg-black/30 shadow-lg backdrop-blur-sm">
                <div className="relative aspect-[3/4] w-full">
                  <Image src={officer.image || "/placeholder.svg"} alt={officer.name} fill className="object-cover" />
                </div>
                <div className="flex flex-col p-4">
                  <h2 className="text-xl font-semibold text-white">{officer.name}</h2>
                  <p className="text-sm font-medium text-white/70">{officer.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

