"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#galeria", label: "Galeria" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
]

const WHATSAPP_NUMBER = "5551994225507"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/logo.jpg"
            alt="PWRTEC Segurança"
            width={50}
            height={50}
            className="rounded-lg w-10 h-10 sm:w-[50px] sm:h-[50px]"
          />
          <div className="hidden sm:block">
            <span className="text-xl font-bold text-foreground">PWRTEC</span>
            <span className="text-xs block text-primary">Infraestrutura de TI</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Button 
            variant="outline" 
            className="border-primary/30 hover:border-primary hover:bg-primary/10 text-foreground"
            asChild
          >
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2" size={18} />
              Falar no WhatsApp
            </a>
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan" asChild>
            <Link href="#contato">
              Solicitar Orçamento
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass mt-2 mx-4 rounded-xl p-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <Button 
                variant="outline" 
                className="w-full border-primary/30 text-foreground"
                asChild
              >
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2" size={18} />
                  Falar no WhatsApp
                </a>
              </Button>
              <Button className="w-full bg-primary text-primary-foreground" asChild>
                <Link href="#contato" onClick={() => setIsMobileMenuOpen(false)}>
                  Solicitar Orçamento
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
