"use client"

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const favorites = [
  {
    name: "Serenity Spa Box",
    image: "/spa-gift-box-with-bath-products-and-candles.jpg",
    rating: 5,
    reviews: 234,
    price: "$79",
  },
  {
    name: "Coffee Lover's Dream",
    image: "/coffee-gift-box-with-beans-mug-and-treats.jpg",
    rating: 5,
    reviews: 189,
    price: "$69",
  },
  {
    name: "Garden Party Box",
    image: "/floral-gift-box-with-garden-themed-items.jpg",
    rating: 5,
    reviews: 156,
    price: "$72",
  },
  {
    name: "Cozy Evening Set",
    image: "/cozy-gift-box-with-blanket-candle-and-book.jpg",
    rating: 5,
    reviews: 201,
    price: "$85",
  },
]

export function CustomerFavorites() {
  return (
    <section className="py-20 px-4 bg-[#FFF9F5]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2E2E2E] mb-4">Customer Favorites</h2>
          <p className="text-lg text-[#6B5D52]">Chosen by 10,000+ happy gift-givers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {favorites.map((product, index) => (
            <Card
              key={index}
              className="group overflow-hidden rounded-2xl border-2 border-[#E8DDD0] hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 fill-[#E76F51] text-[#E76F51]" />
                  <span className="text-sm font-semibold text-[#2E2E2E]">{product.rating}</span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-serif text-xl font-semibold text-[#2E2E2E] mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#6B5D52]">{product.reviews} reviews</span>
                  
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
