import { Handshake, Repeat, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Causa primera impresión",
    desc: "Un perfil premium genera confianza desde el primer contacto.",
  },
  {
    icon: Repeat,
    title: "Actualiza tus datos fácilmente",
    desc: "Modifica tus datos sin volver a imprimir tarjetas físicas.",
  },
  {
    icon: Handshake,
    title: "Conecta mejor",
    desc: "Comparte tus canales de contacto desde una sola página profesional.",
  },
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            ¿Por qué elegir Qori ID?
          </h2>
        </div>

        <div className="space-y-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="glass-dark glass-dark-hover p-8 rounded-lg flex gap-6 items-start"
              >
                <div className="w-14 h-14 flex-shrink-0 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-primary" strokeWidth={1.8} />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}