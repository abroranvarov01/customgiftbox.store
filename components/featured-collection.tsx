"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Eye } from "lucide-react"

const products = [
  {
    name: "Golden Harmony Box",
    description: "A luxurious collection featuring artisan candles, premium teas, and nourishing hand cream",
    image: "/luxury-golden-gift-box-with-candles-tea-and-hand-c.jpg",
    items: ["Soy Candle - Vanilla & Amber", "Organic Tea Collection", "Shea Butter Hand Cream", "Handwritten Card"],
    price: "$89",
  },
  {
    name: "Luxury Minimalist Box",
    description: "Clean elegance with carefully curated essentials for the modern aesthetic",
    image: "/minimalist-white-gift-box-with-candle-notebook-and.jpg",
    items: ["Minimalist Soy Candle", "Leather-bound Notebook", "Artisan Dark Chocolate", "Custom Wax Seal"],
    price: "$75",
  },
  {
    name: "Sweet Escape Box",
    description: "Pastel perfection designed to bring joy and sweetness to any birthday celebration",
    image: "/pastel-pink-gift-box-with-sweets-and-birthday-deco.jpg",
    items: ["Gourmet Macarons", "Floral Tea Blend", "Scented Bath Bombs", "Birthday Confetti"],
    price: "$65",
  },
]

export function FeaturedCollection() {
  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[0] | null>(null)

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2E2E2E] mb-4">Signature Gift Sets</h2>
          <p className="text-lg text-[#6B5D52] max-w-2xl mx-auto leading-relaxed">
            Thoughtfully curated collections that make gifting effortless
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group overflow-hidden rounded-2xl border-2 border-[#E8DDD0] hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-[#2E2E2E] mb-2">{product.name}</h3>
                <p className="text-[#6B5D52] mb-4 leading-relaxed">{product.description}</p>
                <div className="flex items-center justify-between">
                  
                  <Button
                    variant="outline"
                    className="border-[#D4A373] text-[#D4A373] hover:bg-[#D4A373] hover:text-white bg-transparent"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    Open Preview
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Product Preview Modal */}
        <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="font-serif text-3xl text-[#2E2E2E]">{selectedProduct?.name}</DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <img
                src={selectedProduct?.image || "/placeholder.svg"}
                alt={selectedProduct?.name}
                className="w-full h-80 object-cover rounded-xl"
              />
              <p className="text-[#6B5D52] leading-relaxed">{selectedProduct?.description}</p>
              <div>
                <h4 className="font-serif text-xl font-semibold text-[#2E2E2E] mb-3">What's Inside:</h4>
                <ul className="space-y-2">
                  {selectedProduct?.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-[#6B5D52]">
                      <span className="mr-2 text-[#D4A373]">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-[#E8DDD0]">
                <span className="font-serif text-3xl font-bold text-[#D4A373]">{selectedProduct?.price}</span>
                <Button className="bg-[#D4A373] hover:bg-[#C49363] text-white px-8">Add to Cart</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
