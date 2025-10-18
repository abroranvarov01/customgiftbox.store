import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const posts = [
  {
    title: "5 Meaningful Gift Ideas for Her",
    image: "/elegant-feminine-gift-box-with-flowers-and-luxury-.jpg",
    date: "March 15, 2025",
  },
  {
    title: "Why Sustainable Wrapping Matters",
    image: "/sustainable-eco-friendly-gift-wrapping-with-natura.jpg",
    date: "March 10, 2025",
  },
  {
    title: "The Art of Presentation: What Makes a Gift Feel Special",
    image: "/beautifully-wrapped-luxury-gift-box-with-elegant-p.jpg",
    date: "March 5, 2025",
  },
]

export function TheJournal() {
  return (
    <section className="py-20 px-4 bg-[#FFF9F5]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2E2E2E] mb-4">The Journal</h2>
          <p className="text-lg text-[#6B5D52]">Stories, tips, and inspiration for thoughtful gifting</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="group overflow-hidden rounded-2xl border-2 border-[#E8DDD0] hover:shadow-xl transition-all duration-300 cursor-pointer bg-white"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <p className="text-sm text-[#D4A373] mb-2 font-medium">{post.date}</p>
                <h3 className="font-serif text-xl font-semibold text-[#2E2E2E] mb-4 group-hover:text-[#D4A373] transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center text-[#D4A373] font-medium">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>

              {/* Decorative ribbon separator */}
              <div className="h-1 bg-gradient-to-r from-transparent via-[#D4A373] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
