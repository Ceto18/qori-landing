import { ArrowRight, CreditCard, ReceiptText, Share2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Elige tu plan",
    desc: "Selecciona el plan que mejor se adapte a tus necesidades.",
    icon: ReceiptText,
  },
  {
    number: "02",
    title: "Realiza el pago",
    desc: "Paga de forma segura con tarjeta de débito o crédito.",
    icon: CreditCard,
  },
  {
    number: "03",
    title: "Activa tu Qori ID",
    desc: "Configura tu perfil y comparte tu tarjeta digital.",
    icon: Share2,
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="how"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20 relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Cómo funciona
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tres pasos simples para activar tu identidad digital.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.title} className="relative">
                <div className="glass-dark glass-dark-hover p-8 rounded-lg text-center h-full">
                  <div className="w-16 h-16 mb-5 mx-auto rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" strokeWidth={1.8} />
                  </div>

                  <div className="text-4xl font-bold text-primary mb-4">
                    {step.number}
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-primary/30" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}