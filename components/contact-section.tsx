"use client"

import { useState } from "react"
import { Send, MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const WHATSAPP_NUMBER = "5551994225507"

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    content: "Porto Alegre - RS, CEP 90020-024",
  },
  {
    icon: Phone,
    title: "WhatsApp",
    content: "+55 51 9422-5507",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
  {
    icon: Mail,
    title: "E-mail",
    content: "contato@pwrtec.com.br",
    href: "mailto:contato@pwrtec.com.br",
  },
  {
    icon: Clock,
    title: "Horário Agendamento",
    content: "Seg a Sex: 8h às 18h | Sáb: 8h às 12h",
  },
]

const services = [
  "Instalação de Câmeras",
  "Monitoramento",
  "Backup e Recuperação",
  "Controle de Acesso",
  "Rack de Servidores",
  "Endpoints Ou Antivírus",
  "Configuração de Firewall",
  "Manutenção",
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const whatsappMessage = `Olá! Eu sou *${formData.name || 'Cliente'}*.
${formData.phone ? `Meu telefone é: ${formData.phone}` : ''}
${formData.service ? `Gostaria de saber sobre o serviço de: *${formData.service}*` : ''}
${formData.message ? `Minha necessidade é: ${formData.message}` : ''}`

    const encodedMessage = encodeURIComponent(whatsappMessage.trim())
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank')
  }

  return (
    <section id="contato" className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Entre em Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Solicite seu{" "}
            <span className="text-primary">orçamento</span>
          </h2>
          <p className="text-muted-foreground">
            Preencha o formulário ou entre em contato diretamente conosco.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="glass rounded-2xl p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-foreground text-sm">Nome</Label>
                  <Input
                    id="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-secondary border-border focus:border-primary text-foreground placeholder:text-muted-foreground h-10"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="phone" className="text-foreground text-sm">Telefone</Label>
                  <Input
                    id="phone"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-secondary border-border focus:border-primary text-foreground placeholder:text-muted-foreground h-10"
                  />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <Label htmlFor="service" className="text-foreground text-sm">Serviço Desejado</Label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full h-10 px-3 rounded-md bg-secondary border border-border text-foreground text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="" className="bg-secondary text-muted-foreground">Selecione um serviço</option>
                  {services.map((service) => (
                    <option key={service} value={service} className="bg-secondary text-foreground">
                      {service}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="space-y-1.5">
                <Label htmlFor="message" className="text-foreground text-sm">Mensagem</Label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder="Descreva sua necessidade..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 rounded-md bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan"
              >
                <MessageCircle className="mr-2" size={18} />
                Enviar via WhatsApp
                <Send className="ml-2" size={18} />
              </Button>
            </form>

            {/* Contact Info - Vertical Layout */}
            <div className="flex flex-col gap-4 mt-6 pt-6 border-t border-border">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <info.icon className="text-primary" size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">{info.title}</p>
                    {info.href ? (
                      <a 
                        href={info.href} 
                        target={info.href.startsWith('https') ? '_blank' : undefined}
                        rel={info.href.startsWith('https') ? 'noopener noreferrer' : undefined}
                        className="text-sm text-foreground hover:text-primary transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-sm text-foreground">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Google Maps */}
          <div className="glass rounded-2xl overflow-hidden h-full min-h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.0471924196418!2d-51.23045987444654!3d-30.035503924928094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951979047215a1ff%3A0xe0f1675306619ac8!2sAv.%20Borges%20de%20Medeiros%2C%20670-1262%20-%20Centro%20Hist%C3%B3rico%2C%20Porto%20Alegre%20-%20RS%2C%2090020-024!5e0!3m2!1spt-BR!2sbr!4v1781656428978!5m2!1spt-BR!2sbr"
             // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13823.307677847!2d-51.18194!3d-29.9147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197320c2b3e3d7%3A0x3e2f4e6b8a9c0d2e!2sCanoas%2C%20RS%2C%2094820-600!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "500px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização PWRTEC"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
