import { Shield, Headphones, Server, Award } from "lucide-react"

const features = [
  {
    icon: Headphones,
    title: "Suporte 24/7",
    description: "Atendimento especializado a qualquer hora para ambientes de missão crítica.",
  },
  {
    icon: Server,
    title: "Infraestrutura Robusta",
    description: "Servidores, redes e sistemas configurados para máxima disponibilidade.",
  },
  {
    icon: Shield,
    title: "Segurança da Informação",
    description: "Firewall, antivírus e proteção de endpoints para sua empresa.",
  },
  {
    icon: Award,
    title: "Experiência Comprovada",
    description: "Atuação em hospitais, indústrias, condominios e ambientes de gestão crítica.",
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Sobre a Empresa
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Sua infraestrutura de TI em{" "}
              <span className="text-primary">mãos experientes</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A PWRTEC é formada por 2 profissionais com mais de 13 anos de experiência 
              em infraestrutura de TI e segurança da informação. Somos formados e já atuamos 
              em grandes empresas, incluindo hospitais e ambientes de gestão crítica onde 
              a disponibilidade 24/7 é essencial.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Oferecemos soluções completas em servidores, redes, firewall, backup, CFTV, 
              cabeamento estruturado, datacenter e muito mais. Nossa expertise garante que 
              sua empresa tenha uma infraestrutura sólida, segura e sempre disponível.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass glass-hover rounded-xl p-6 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 glow-cyan">
                  <feature.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
