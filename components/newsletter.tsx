"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [showConfetti, setShowConfetti] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 3000)
    setEmail("")
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#D4A373] to-[#E76F51] relative overflow-hidden">
      {/* Confetti animation */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <Mail className="w-16 h-16 text-white mx-auto mb-6 animate-float" />

        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Join the Gift Lovers' Circle 💌</h2>

        <p className="text-xl text-white/90 mb-8 leading-relaxed">Get exclusive designs & seasonal discounts</p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-6 py-6 rounded-xl text-lg border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/60 focus:bg-white/20"
          />
          <Button
            type="submit"
            size="lg"
            className="bg-white text-[#D4A373] hover:bg-white/90 px-8 py-6 text-lg rounded-xl font-semibold"
          >
            Subscribe Now
          </Button>
        </form>
      </div>
    </section>
  )
}
