"use client"

import { MessageCircle } from "lucide-react"

const WHATSAPP_NUMBER = "5551994225507"

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5C] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 animate-pulse-glow"
      style={{
        boxShadow: "0 0 20px rgba(37, 211, 102, 0.5)",
      }}
    >
      <MessageCircle className="text-white" size={28} />
    </a>
  )
}
