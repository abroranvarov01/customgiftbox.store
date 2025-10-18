"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Instagram, Facebook, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section className="py-20 px-4 bg-[#FFF9F5] relative">
      {/* Envelope illustration background */}
      <div className="absolute top-10 right-10 opacity-5">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
          <path d="M50 100 L150 150 L250 100 L250 200 L50 200 Z" fill="#D4A373" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2E2E2E] mb-4">Get in Touch</h2>
          <p className="text-lg text-[#6B5D52]">We'd love to hear from you</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Card className="p-8 rounded-2xl border-2 border-[#E8DDD0] bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#2E2E2E] mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="border-[#E8DDD0] focus:border-[#D4A373] rounded-xl"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#2E2E2E] mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="border-[#E8DDD0] focus:border-[#D4A373] rounded-xl"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#2E2E2E] mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="border-[#E8DDD0] focus:border-[#D4A373] rounded-xl resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#D4A373] hover:bg-[#C49363] text-white py-6 rounded-xl text-lg"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </Card>

          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-[#2E2E2E] mb-4">Connect With Us</h3>
              <p className="text-[#6B5D52] leading-relaxed mb-6">
                Follow us on social media for daily inspiration, behind-the-scenes content, and exclusive offers.
              </p>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-[#D4A373] text-[#D4A373] hover:bg-[#D4A373] hover:text-white rounded-xl bg-transparent"
                >
                  <Instagram className="mr-2 h-5 w-5" />
                  Instagram
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-[#D4A373] text-[#D4A373] hover:bg-[#D4A373] hover:text-white rounded-xl bg-transparent"
                >
                  <Facebook className="mr-2 h-5 w-5" />
                  Facebook
                </Button>
              </div>
            </div>

            <Card className="p-6 rounded-2xl border-2 border-[#E8DDD0] bg-white">
              <h4 className="font-serif text-xl font-semibold text-[#2E2E2E] mb-3">Customer Service</h4>
              <div className="space-y-2 text-[#6B5D52]">
                <p>📧 hello@customgiftbox.store</p>
                <p>📞 +1 228-826-7710</p>
                <p>📍 4922 O Conner Street</p>
                <p className="pl-5">Vancleave, Mississippi 39565</p>
                <p className="pl-5">United States</p>
                <p>🕐 Mon-Fri: 9AM - 6PM EST</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
