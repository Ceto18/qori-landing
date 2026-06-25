import { CheckCircle2, ShoppingCart } from "lucide-react";

import type { Plan } from "@/types/landing";

type Props = {
  plan: Plan;
};

export function PlanCard({ plan }: Props) {
  return (
    <article
      className={`glass-dark rounded-2xl p-8 border transition-all ${
        plan.highlighted
          ? "border-primary glow-gold-lg scale-[1.02]"
          : "border-primary/20 hover:border-primary/60"
      }`}
    >
      {plan.highlighted && (
        <div className="inline-flex mb-5 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
          Más elegido
        </div>
      )}

      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>

      <p className="text-muted-foreground mb-6">{plan.description}</p>

      <div className="mb-6">
        <span className="text-4xl font-bold text-primary">{plan.price}</span>
        <span className="text-muted-foreground text-sm"> / mes</span>
      </div>

      <ul className="space-y-3 mb-8">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href="#checkout"
        className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
          plan.highlighted
            ? "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/50"
            : "border border-primary text-primary hover:bg-primary/10"
        }`}
      >
        Comprar {plan.name}
        <ShoppingCart className="w-4 h-4" />
      </a>
    </article>
  );
}