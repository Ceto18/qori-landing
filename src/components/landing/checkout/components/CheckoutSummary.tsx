"use client";

import { ShoppingCart } from "lucide-react";

import type { PublicPlan } from "@/types/plan";

type Props = {
  selectedPlan: PublicPlan;
};

export function CheckoutSummary({ selectedPlan }: Props) {
  const price = Number(selectedPlan.price);
  const formattedPrice = `S/ ${price.toFixed(2)}`;

  const sortedFeatures = [...selectedPlan.features].sort(
    (a, b) => a.sort_order - b.sort_order
  );

  return (
    <aside className="glass-dark rounded-2xl border border-primary/20 p-8">
      <div className="mb-6 flex items-center gap-3">
        <ShoppingCart className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold">Resumen de compra</h2>
      </div>

      <div className="space-y-5">
        <div className="flex justify-between gap-4 border-b border-primary/10 pb-5">
          <div>
            <h3 className="font-semibold">{selectedPlan.name}</h3>

            <p className="mt-1 text-sm text-muted-foreground">
              {selectedPlan.description ??
                "Servicio digital de tarjeta profesional Qori ID."}
            </p>
          </div>

          <strong className="whitespace-nowrap text-primary">
            {formattedPrice}
          </strong>
        </div>

        <div className="rounded-xl bg-primary/5 p-4 text-sm text-muted-foreground">
          <p>
            Organizaciones: {selectedPlan.limits.max_organizations}
          </p>

          <p>Tarjetas: {selectedPlan.limits.max_cards}</p>
        </div>

        {sortedFeatures.length > 0 && (
          <div>
            <p className="mb-3 text-sm font-semibold">Incluye:</p>

            <ul className="space-y-2 text-sm text-muted-foreground">
              {sortedFeatures.map((feature, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>{feature.description}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Subtotal</span>
          <span>{formattedPrice}</span>
        </div>

        <div className="flex justify-between text-sm text-muted-foreground">
          <span>IGV incluido</span>
          <span>S/ 0.00</span>
        </div>

        <div className="flex justify-between border-t border-primary/10 pt-5 text-xl font-bold">
          <span>Total a pagar</span>
          <span className="text-primary">{formattedPrice}</span>
        </div>
      </div>
    </aside>
  );
}