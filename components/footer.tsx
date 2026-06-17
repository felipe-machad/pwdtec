import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const WHATSAPP_PWRTEC = "5551994225507"
const WHATSAPP_FFUTURE = "5551993706131"

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/pwrtecseguranca", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

const quickLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#galeria", label: "Galeria" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
]

const services = [
  "Servidores e Datacenter",
  "Redes e Cabeamento",
  "Firewall e Segurança",
  "CFTV e Monitoramento",
  "Backup e Recuperação",
  "Suporte Técnico",
]

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer */}
        <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/images/logo.jpg"
                alt="PWRTEC Segurança"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <div>
                <span className="text-xl font-bold text-foreground">PWRTEC</span>
                <span className="text-xs block text-primary">Infraestrutura de TI</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Soluções completas em infraestrutura de TI, segurança da informação e suporte técnico para empresas. 
              Mais de 13 anos de experiência.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Serviços</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="#servicos"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-1" size={18} />
                <span className="text-muted-foreground text-sm">
                  Porto Alegre - RS<br />
                  CEP 90020-024
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <a 
                  href={`https://wa.me/${WHATSAPP_PWRTEC}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  +55 51 9422-5507
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <a 
                  href="mailto:contato@pwrtec.com.br"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  contato@pwrtec.com.br
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="text-primary shrink-0" size={18} />
                <a 
                  href="https://instagram.com/pwrtecseguranca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  @pwrtecseguranca
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {new Date().getFullYear()} PWRTEC Segurança. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground text-sm">
            Desenvolvido por{" "}
            <a 
              href={`https://wa.me/${WHATSAPP_FFUTURE}?text=${encodeURIComponent('Olá! Vi o site da PWRTEC e gostaria de saber mais sobre os serviços da FFuture.IA')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              FFuture.IA
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
