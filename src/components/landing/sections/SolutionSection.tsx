import Image from "next/image";
import { BarChart3, Shield, Sparkles, Target } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Identidad digital única",
    desc: "Un perfil elegante que representa quién eres y qué haces.",
  },
  {
    icon: Shield,
    title: "Control de información",
    desc: "Gestiona los datos que deseas mostrar en tu tarjeta digital.",
  },
  {
    icon: Sparkles,
    title: "Diseño premium",
    desc: "Plantillas profesionales que transmiten confianza.",
  },
  {
    icon: BarChart3,
    title: "Presencia digital",
    desc: "Centraliza tus enlaces y canales de contacto en un solo perfil.",
  },
];

export function SolutionSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            La solución: Qori ID
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tu perfil profesional premium siempre disponible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div key={feature.title} className="flex gap-4 items-start">
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center">
            <div className="glass-dark rounded-2xl overflow-hidden glow-gold-lg p-8 w-full max-w-sm border border-primary/20">
              <div className="h-24 bg-gradient-to-br from-primary/30 to-primary/10 rounded-lg mb-6 flex items-center justify-center">
                <Image
                  src="/qori-logo.png"
                  alt="Qori ID"
                  width={60}
                  height={60}
                  className="w-16 h-16"
                />
              </div>

              <h3 className="text-2xl font-bold text-center mb-2">
                Qori ID Premium
              </h3>

              <p className="text-center text-muted-foreground mb-6">
                Todos tus datos profesionales en un solo lugar.
              </p>

              <div className="space-y-3 text-sm">
                {[
                  "Perfil personalizable",
                  "QR único",
                  "Links directos",
                  "Actualizaciones en vivo",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}