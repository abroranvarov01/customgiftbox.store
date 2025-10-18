import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function PersonalizationSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-2xl overflow-hidden group">
            <img
              src="/elegant-ribbons-wax-seals-and-personalized-cards-o.jpg"
              alt="Personalization options"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#8C4A2F]/40 to-transparent" />
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2E2E2E] text-balance">
              Your Story, Inside Every Box.
            </h2>
            <p className="text-lg text-[#6B5D52] leading-relaxed">
              Make it truly yours with our personalization options. Choose from a variety of ribbon colors, premium
              textures, and add a heartfelt message that will be beautifully presented with your gift.
            </p>
            <ul className="space-y-3">
              {[
                "Choose from 12+ ribbon colors and materials",
                "Add custom wax seals with your initials",
                "Include handwritten-style notes",
                "Select premium wrapping textures",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-3 mt-1 text-[#D4A373]">✓</span>
                  <span className="text-[#6B5D52]">{item}</span>
                </li>
              ))}
            </ul>
            <Button className="bg-[#D4A373] hover:bg-[#C49363] text-white px-8 py-6 text-lg rounded-xl mt-6">
              Start Customizing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
