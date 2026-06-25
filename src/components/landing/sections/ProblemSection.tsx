import { CreditCard, TriangleAlert, UserX } from "lucide-react";

const items = [
  {
    icon: CreditCard,
    title: "Las tarjetas se pierden",
    desc: "Las tarjetas físicas pueden extraviarse o terminar olvidadas.",
  },
  {
    icon: UserX,
    title: "Los contactos se olvidan",
    desc: "Muchas conexiones no recuerdan tus datos después de una reunión.",
  },
  {
    icon: TriangleAlert,
    title: "No impactas",
    desc: "Una presentación poco profesional reduce la confianza de tus contactos.",
  },
];

export function ProblemSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            El problema real
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Los métodos tradicionales no funcionan en la era digital.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="glass-dark glass-dark-hover p-8 rounded-lg"
              >
                <div className="w-14 h-14 mb-5 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-primary" strokeWidth={1.8} />
                </div>

                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}