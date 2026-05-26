import { Clock, Users, Award, Building2, ShieldCheck, HeadphonesIcon } from "lucide-react"

const differentials = [
  {
    icon: Clock,
    title: "Disponibilidade 24/7",
    description: "Suporte a qualquer hora para ambientes que não podem parar.",
  },
  {
    icon: Users,
    title: "Profissionais Experientes",
    description: "Mais de 13 anos de experiência em infraestrutura de TI.",
  },
  {
    icon: Award,
    title: "Formação Especializada",
    description: "Equipe formada e certificada nas principais tecnologias.",
  },
  {
    icon: Building2,
    title: "Ambientes Críticos",
    description: "Experiência em hospitais e empresas de gestão crítica.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança em Primeiro Lugar",
    description: "Foco em proteção de dados e segurança da informação.",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte Dedicado",
    description: "Atendimento personalizado e acompanhamento contínuo.",
  },
]

export function DifferentialsSection() {
  return (
    <section id="diferenciais" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Nossos Diferenciais
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Por que escolher a{" "}
            <span className="text-primary">PWRTEC</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            Experiência, comprometimento e excelência técnica em cada projeto.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-xl glass glass-hover transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 glow-cyan">
                <item.icon className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
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
