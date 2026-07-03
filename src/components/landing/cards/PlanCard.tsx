import Link from "next/link";
import { CheckCircle2, ShoppingCart } from "lucide-react";

import type { PublicPlan } from "@/types/plan";

type Props = {
  plan: PublicPlan;
};

export function PlanCard({ plan }: Props) {
  const formattedPrice = `S/ ${Number(plan.price).toFixed(2)}`;

  const sortedFeatures = [...plan.features].sort(
    (a, b) => a.sort_order - b.sort_order
  );

  return (
    <article className="group glass-dark flex h-full flex-col rounded-2xl border border-primary/20 p-8 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-primary hover:shadow-2xl hover:shadow-primary/20">
      <div className="flex-1">
        <div className="mb-5 inline-flex rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
          Plan seleccionado
        </div>

        <h3 className="mb-2 text-2xl font-bold transition-colors duration-300 group-hover:text-primary">
          {plan.name}
        </h3>

        <p className="mb-6 text-muted-foreground">
          {plan.description ??
            "Plan para activar tu tarjeta digital profesional Qori ID."}
        </p>

        <div className="mb-6">
          <span className="text-4xl font-bold text-primary">
            {formattedPrice}
          </span>

          <span className="text-sm text-muted-foreground"> / mes</span>
        </div>

        <div className="mb-6 rounded-xl border border-primary/10 bg-primary/5 p-4 text-sm text-muted-foreground transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/10">
          <p>Hasta {plan.limits.max_organizations} organizaciones</p>
          <p>Hasta {plan.limits.max_cards} tarjetas</p>
        </div>

        {sortedFeatures.length > 0 && (
          <ul className="mb-8 space-y-3">
            {sortedFeatures.map((feature) => (
              <li
                key={`${plan.slug}-${feature.sort_order}`}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />

                <span className="text-sm text-muted-foreground">
                  {feature.description}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Link
        href={`/checkout?plan=${plan.slug}`}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 font-semibold text-primary-foreground transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-lg group-hover:shadow-primary/50"
      >
        Comprar {plan.name}
        <ShoppingCart className="h-4 w-4" />
      </Link>
    </article>
  );
}