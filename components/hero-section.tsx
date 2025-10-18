import { Button } from "@/components/ui/button"
import { Gift, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/elegant-hands-holding-open-luxury-gift-box-with-sa.jpg" alt="Elegant gift box" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#FFF9F5]" />
      </div>

      {/* Floating Ribbon Overlay */}
      <div className="absolute top-20 right-10 opacity-20 animate-ribbon-wave">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <path d="M50 100 Q 100 50, 150 100 T 250 100" stroke="#D4A373" strokeWidth="3" fill="none" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6 inline-block animate-float">
          <Gift className="w-16 h-16 text-[#D4A373] mx-auto" />
        </div>

        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 text-balance">
          Crafted with Heart. Wrapped with Style.
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
          Unique gift boxes for every celebration.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-[#D4A373] hover:bg-[#C49363] text-white text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Gift className="mr-2 h-5 w-5" />
            Shop Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/95 hover:bg-white text-[#2E2E2E] border-2 border-white text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Create Your Own Box
          </Button>
        </div>
      </div>
    </section>
  )
}
