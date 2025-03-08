import Image from "next/image"
import PageWrapper from "@/components/page-wrapper"

export default function TimelinePage() {
  const timelineEvents = [
    {
      title: "Check-in",
      time: "5:00 PM",
      description:
        "Check in check ủng",
    },
    {
      title: "TBD",
      time: "TBD",
      description:
        "TBD",
    },
    {
      title: "TBD",
      time: "TBD",
      description:
        "TBD",
    },
    {
      title: "TBD",
      time: "TBD",
      description:
        "TBD",
    },
  ]

  return (
    <PageWrapper>
      <div className="container mx-auto px-4 pt-20">
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-2 md:py-24">
          <div className="relative aspect-[3/4] h-full w-full overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm md:sticky md:top-24 md:h-[calc(100vh-6rem)]">
            <Image src="/placeholder.svg?height=900&width=600" alt="Timeline" fill className="object-cover" />
          </div>
          <div className="space-y-8 rounded-lg bg-black/20 p-6 backdrop-blur-sm">
            <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Event Timeline</h1>
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative border-l border-white/30 pl-6">
                  <div className="absolute -left-1.5 h-3 w-3 rounded-full bg-primary"></div>
                  <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                  <p className="text-sm text-white/70">{event.time}</p>
                  <p className="mt-2 text-white/80">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

