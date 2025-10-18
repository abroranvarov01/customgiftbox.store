import { Card } from "@/components/ui/card"

const occasions = [
  {
    title: "Birthdays",
    emoji: "🎂",
    image: "/elegant-birthday-gift-box-with-pastel-colors-and-r.jpg",
  },
  {
    title: "Weddings",
    emoji: "💍",
    image: "/luxury-wedding-gift-box-with-white-and-gold-accent.jpg",
  },
  {
    title: "Holidays",
    emoji: "🎄",
    image: "/festive-holiday-gift-box-with-seasonal-decorations.jpg",
  },
  {
    title: "Corporate Gifts",
    emoji: "💼",
    image: "/professional-corporate-gift-box-with-minimalist-de.jpg",
  },
  {
    title: "Just Because",
    emoji: "💌",
    image: "/thoughtful-surprise-gift-box-with-heart-decoration.jpg",
  },
]

export function ShopByOccasion() {
  return (
    <section className="py-20 px-4 bg-[#FFF9F5]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-[#2E2E2E] mb-16">Shop by Occasion</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {occasions.map((occasion, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden rounded-2xl border-2 border-[#E8DDD0] cursor-pointer hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={occasion.image || "/placeholder.svg"}
                  alt={occasion.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Box opening animation on hover */}
                <div className="absolute inset-0 bg-[#D4A373]/0 group-hover:bg-[#D4A373]/10 transition-colors duration-300" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="text-4xl mb-2">{occasion.emoji}</div>
                <h3 className="font-serif text-2xl font-bold">{occasion.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
