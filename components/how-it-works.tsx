import { Package, Palette, MessageSquare, Truck } from "lucide-react"

const steps = [
  {
    number: "1",
    icon: Package,
    title: "Choose Your Box",
    description: "Select from our curated collections or start from scratch",
  },
  {
    number: "2",
    icon: Palette,
    title: "Customize Your Style",
    description: "Pick ribbon colors, textures, and wrapping materials",
  },
  {
    number: "3",
    icon: MessageSquare,
    title: "Add a Message",
    description: "Include a heartfelt note in your choice of handwritten fonts",
  },
  {
    number: "4",
    icon: Truck,
    title: "We Wrap & Deliver",
    description: "Expertly packaged and shipped with care to your recipient",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-[#FFF9F5]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-[#2E2E2E] mb-16">How It Works</h2>

        <div className="relative">
          {/* Connecting ribbon line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#D4A373] via-[#E76F51] to-[#D4A373] opacity-20 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="text-center group animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-[#D4A373] flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <step.icon className="w-10 h-10 text-[#D4A373]" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#E76F51] text-white flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                </div>

                <h3 className="font-serif text-xl font-semibold text-[#2E2E2E] mb-3">{step.title}</h3>
                <p className="text-[#6B5D52] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
