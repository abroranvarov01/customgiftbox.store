import { Gift } from "lucide-react"

export function Footer() {
  const footerLinks = {
    Shop: ["All Products", "Bestsellers", "New Arrivals", "Gift Cards"],
    About: ["Our Story", "Sustainability", "Reviews", "Blog"],
    Contact: ["Help Center", "Shipping Info", "Returns", "Track Order"],
    Legal: ["Terms of Service", "Privacy Policy", "Cookie Policy"],
  }

  return (
    <footer className="bg-[#F5EDE4] py-16 px-4 border-t border-[#E8DDD0]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and tagline */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Gift className="w-8 h-8 text-[#D4A373]" />
              <span className="font-serif text-2xl font-bold text-[#2E2E2E]">CustomGiftBox</span>
            </div>
            <p className="text-sm text-[#6B5D52] leading-relaxed">Designed to Delight</p>
          </div>

          {/* Footer links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-serif text-lg font-semibold text-[#2E2E2E] mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-[#6B5D52] hover:text-[#D4A373] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#E8DDD0] text-center">
          <p className="text-sm text-[#6B5D52]">© 2025 CustomGiftBox.store — Designed to Delight.</p>
        </div>
      </div>
    </footer>
  )
}
