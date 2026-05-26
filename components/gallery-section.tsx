"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const galleryItems = [
  {
    id: 1,
    title: "Rack de Servidores",
    category: "Datacenter",
    description: "Montagem completa de rack com servidores e storage",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Cabeamento Estruturado",
    category: "Redes",
    description: "Organização de patch panel e cabeamento Cat6",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Central de Monitoramento",
    category: "CFTV",
    description: "Sistema de monitoramento com múltiplas câmeras",
    image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Sala de Servidores",
    category: "Datacenter",
    description: "Infraestrutura completa de datacenter corporativo",
    image: "https://images.unsplash.com/photo-1606765962248-7ff407b51667?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Configuração de Firewall",
    category: "Segurança",
    description: "Implementação de firewall e políticas de segurança",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Rede Corporativa",
    category: "Redes",
    description: "Switches gerenciáveis e infraestrutura de rede",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
  },
]

export function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(galleryItems.length / 3))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(galleryItems.length / 3)) % Math.ceil(galleryItems.length / 3))
  }

  return (
    <section id="galeria" className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Nossos Trabalhos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              Galeria de{" "}
              <span className="text-primary">Projetos</span>
            </h2>
          </div>
          <div className="flex gap-2 mt-6 md:mt-0">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="border-primary/30 hover:border-primary hover:bg-primary/10 text-foreground"
            >
              <ChevronLeft size={20} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="border-primary/30 hover:border-primary hover:bg-primary/10 text-foreground"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden glass glass-hover transition-all duration-500 hover:scale-105"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-primary text-xs font-medium uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-lg font-semibold text-foreground mt-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
