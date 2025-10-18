import { Palette, Leaf, Edit3, Truck } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Palette,
    title: "Unique Designs",
    description: "Every box tells a story",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Materials",
    description: "Sustainable elegance",
  },
  {
    icon: Edit3,
    title: "Customizable",
    description: "Add your message & ribbon color",
  },
  {
    icon: Truck,
    title: "Fast Worldwide Shipping",
    description: "Joy delivered",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-[#2E2E2E] mb-16">Why Choose Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 text-center border-2 border-[#E8DDD0] rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group bg-white"
            >
              <div className="mb-6 inline-block group-hover:rotate-12 transition-transform duration-300">
                <feature.icon className="w-12 h-12 text-[#D4A373] mx-auto" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#2E2E2E] mb-3">{feature.title}</h3>
              <p className="text-[#6B5D52] leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
