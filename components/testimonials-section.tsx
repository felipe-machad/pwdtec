"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Ricardo Mendes",
    role: "Gerente de TI",
    company: "Hospital Regional",
    content:
      "A PWRTEC reestruturou toda nossa infraestrutura de rede e servidores. A disponibilidade aumentou drasticamente e o suporte 24/7 é essencial para nosso ambiente hospitalar.",
    rating: 5,
  },
  {
    id: 2,
    name: "Fernanda Lima",
    role: "Diretora",
    company: "Indústria Metalúrgica",
    content:
      "Implementaram nosso datacenter do zero, com firewall, backup e monitoramento. Profissionais extremamente competentes e sempre disponíveis quando precisamos.",
    rating: 5,
  },
  {
    id: 3,
    name: "Carlos Eduardo",
    role: "CEO",
    company: "Escritório de Advocacia",
    content:
      "O sistema de CFTV e a segurança de rede que implementaram nos dá total tranquilidade. A equipe é muito profissional e o atendimento é excepcional.",
    rating: 5,
  },
  {
    id: 4,
    name: "Juliana Martins",
    role: "Coordenadora de TI",
    company: "Clínica Médica",
    content:
      "Migraram todos nossos sistemas para novos servidores sem downtime. O backup em nuvem e a política de segurança implementada são de altíssimo nível.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="depoimentos" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Depoimentos
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            O que nossos{" "}
            <span className="text-primary">clientes</span> dizem
          </h2>

          <p className="text-muted-foreground text-lg">
            A satisfação dos nossos clientes é o nosso maior prêmio.
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45 }}
                className="glass rounded-2xl p-8 md:p-12 animate-glow"
              >
                <Quote className="text-primary/30 w-16 h-16 mb-6" />

                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                  &quot;{testimonials[currentIndex].content}&quot;
                </p>

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center glow-cyan">
                      <span className="text-xl font-bold text-primary">
                        {testimonials[currentIndex].name.charAt(0)}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonials[currentIndex].name}
                      </h4>

                      <p className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].role} -{" "}
                        {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-1">
                    {Array.from({
                      length: testimonials[currentIndex].rating,
                    }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-primary text-primary"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="border-primary/30 hover:border-primary hover:bg-primary/10 text-foreground"
              >
                <ChevronLeft size={20} />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-primary w-6 glow-cyan"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="border-primary/30 hover:border-primary hover:bg-primary/10 text-foreground"
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}