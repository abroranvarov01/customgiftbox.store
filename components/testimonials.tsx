import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Absolutely beautiful packaging and thoughtful details — felt like luxury!",
    author: "Emily R.",
    location: "USA",
  },
  {
    quote: "The personalization options made my gift truly special. My sister cried happy tears!",
    author: "Michael T.",
    location: "Canada",
  },
  {
    quote: "Eco-friendly AND gorgeous? This is exactly what I was looking for.",
    author: "Sarah L.",
    location: "UK",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-[#2E2E2E] mb-16">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 rounded-2xl border-2 border-[#E8DDD0] hover:shadow-xl transition-all duration-300 relative bg-white"
            >
              <Quote className="w-12 h-12 text-[#D4A373] opacity-20 absolute top-6 right-6" />
              <div className="relative">
                <p className="text-lg text-[#2E2E2E] mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="border-t border-[#E8DDD0] pt-4">
                  <p className="font-semibold text-[#2E2E2E]">{testimonial.author}</p>
                  <p className="text-sm text-[#6B5D52]">{testimonial.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
