"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Gift } from "lucide-react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasAccepted = localStorage.getItem("cookiesAccepted")
    if (!hasAccepted) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50 animate-in slide-in-from-bottom-4">
      <div className="bg-white rounded-2xl shadow-2xl border-2 border-[#E8DDD0] p-6">
        <div className="flex items-start gap-4">
          <div className="text-3xl">🍪</div>
          <div className="flex-1">
            <p className="text-sm text-[#2E2E2E] mb-4 leading-relaxed">
              We use cookies to wrap your browsing experience with care.
            </p>
            <Button onClick={handleAccept} className="w-full bg-[#D4A373] hover:bg-[#C49363] text-white rounded-xl">
              <Gift className="mr-2 h-4 w-4" />
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
