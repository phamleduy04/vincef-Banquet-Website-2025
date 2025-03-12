import Image from "next/image"

export default function TimelinePage() {
  const timelineEvents = [
    {
      title: "Check-in",
      time: "5:00 PM",
      description:
        "We will start letting our guests inside at 5PM!",
    },
    {
      title: "TBD",
      time: "TBD",
      description:
        "Stay tuned in to VINCEF's social media for newest updates on Moonlit Feast's timeline!",
    },
    {
      title: "Check-out",
      time: "10:00PM",
      description:
        "All good things must come to an end. Moonlit Feast will end at 10PM 😭.",
    },
  ]

  return (
    <div
      className="w-full"
      style={{
        backgroundImage: "url('/timeline/timeline-background.png?height=1080&width=1920&text=TimelineBackground')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full">
        <div className="container mx-auto px-4 pt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="relative h-full w-full overflow-hidden rounded-lg md:sticky md:top-24 md:h-[calc(100vh-6rem)]">
              <Image
                src="/timeline/timeline-moon.png?height=900&width=600"
                alt="Timeline"
                className="h-full w-full object-contain"
                width={600}
                height={900}
                priority
              />
            </div>
            <div className="space-y-8 rounded-lg bg-black/20 p-6 backdrop-blur-sm">
              <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Event Timeline</h1>
              <div className="space-y-8 pb-8">
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
      </div>
    </div>
  )
}

