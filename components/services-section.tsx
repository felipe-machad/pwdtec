"use client"

import { useState } from "react"
import { Server, Network, Shield, Camera, Database, HardDrive, Monitor, Wrench, ArrowRight, X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_NUMBER = "5551994225507"

const services = [
  {
    icon: Server,
    title: "Servidores e Datacenter",
    description: "Montagem, configuração e manutenção de servidores e datacenters.",
    details: "Especialistas em montagem de datacenter, configuração de servidores de arquivos, servidores de aplicação, virtualização e alta disponibilidade. Trabalhamos com Windows Server, Linux e soluções híbridas para garantir performance e segurança.",
  },
  {
    icon: Network,
    title: "Redes e Cabeamento",
    description: "Infraestrutura de redes LAN, cabeamento estruturado e conectividade.",
    details: "Projeto e execução de redes corporativas: cabeamento estruturado Cat5e/Cat6, patch panels, switches gerenciáveis, roteadores e access points. Certificação de pontos e documentação completa da infraestrutura.",
  },
  {
    icon: Shield,
    title: "Firewall e Segurança",
    description: "Proteção de perímetro, firewall, VPN e segurança da informação.",
    details: "Implementação de firewalls corporativos, configuração de VPN para acesso remoto seguro, políticas de segurança, segmentação de rede e proteção contra ameaças. Trabalhamos com pfSense, Fortinet, SonicWall e outras soluções.",
  },
  {
    icon: Camera,
    title: "CFTV e Monitoramento",
    description: "Sistemas de câmeras, DVR, NVR e monitoramento remoto.",
    details: "Instalação completa de sistemas de CFTV com câmeras IP e analógicas, configuração de DVR/NVR, acesso remoto via smartphone e integração com sistemas de alarme. Projetos para empresas, indústrias e condomínios.",
  },
  {
    icon: Database,
    title: "Backup e Recuperação",
    description: "Soluções de backup local, em nuvem e disaster recovery.",
    details: "Implementação de políticas de backup automatizado, replicação de dados, backup em nuvem e planos de disaster recovery. Garantimos que seus dados estejam sempre protegidos e recuperáveis.",
  },
  {
    icon: HardDrive,
    title: "Endpoints e Antivírus",
    description: "Configuração de estações, antivírus corporativo e proteção de endpoints.",
    details: "Gestão de endpoints corporativos, implantação de antivírus gerenciado, políticas de segurança para estações de trabalho, atualizações e patches de segurança. Proteção completa contra malwares e ransomwares.",
  },
  {
    icon: Monitor,
    title: "Hospedagem e Publicação",
    description: "Hospedagem de sites, servidores web e publicação de aplicações.",
    details: "Configuração de servidores web, hospedagem de sites e aplicações, certificados SSL, DNS e domínios. Publicação de sistemas internos e externos com segurança e alta disponibilidade.",
  },
  {
    icon: Wrench,
    title: "Suporte Técnico",
    description: "Suporte especializado, manutenção preventiva e corretiva.",
    details: "Suporte técnico presencial e remoto para toda sua infraestrutura de TI. Manutenção preventiva, troubleshooting, atendimento a chamados e gestão de incidentes. Disponibilidade 24/7 para ambientes críticos.",
  },
]

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null)

  const handleWhatsAppContact = (serviceTitle: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre o serviço de ${serviceTitle}. Podem me ajudar?`)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank')
  }

  return (
    <>
      <section id="servicos" className="py-24 relative">
        <div className="absolute inset-0 bg-grid opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Nossos Serviços
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Soluções completas em{" "}
              <span className="text-primary">infraestrutura de TI</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Da montagem do datacenter ao suporte diário, cuidamos de toda sua infraestrutura tecnológica.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass glass-hover rounded-xl p-6 transition-all duration-300 hover:scale-105 group cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:glow-cyan transition-shadow duration-300">
                  <service.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {service.description}
                </p>
                <div className="flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Saiba mais
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="glass rounded-2xl p-6 md:p-8 max-w-lg w-full relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Fechar"
            >
              <X size={24} />
            </button>
            
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 glow-cyan">
              <selectedService.icon className="text-primary" size={32} />
            </div>
            
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {selectedService.title}
            </h3>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {selectedService.details}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan"
                onClick={() => handleWhatsAppContact(selectedService.title)}
              >
                <MessageCircle className="mr-2" size={18} />
                Solicitar Orçamento
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 border-primary/30 hover:border-primary hover:bg-primary/10 text-foreground"
                onClick={() => setSelectedService(null)}
              >
                Fechar
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
