"use client";

import { CreditCard } from "lucide-react";

import type { PublicPlan } from "@/types/plan";

import type { CheckoutFormState } from "./CheckoutForm";

type Props = {
  selectedPlan: PublicPlan;
  form: CheckoutFormState;
  onPay: () => void;
};

export function CheckoutPlanCard({ selectedPlan, form, onPay }: Props) {
  const formattedPrice = `S/ ${Number(selectedPlan.price).toFixed(2)}`;

  return (
    <section className="glass-dark rounded-2xl border border-primary/20 p-8">
      <div className="mb-6 flex items-center gap-3">
        <CreditCard className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold">Pago con tarjeta</h2>
      </div>

      <div className="mb-6 space-y-4">
        <CheckoutField
          label="Nombre del comprador"
          value={form.buyerName || "Pendiente"}
        />

        <CheckoutField
          label="Correo electrónico"
          value={form.buyerEmail || "Pendiente"}
        />

        <CheckoutField label="Producto" value={selectedPlan.name} />

        <CheckoutField label="Monto" value={formattedPrice} />
      </div>

      <button
        type="button"
        onClick={onPay}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 font-semibold text-primary-foreground transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/50"
      >
        <CreditCard className="h-5 w-5" />
        Pagar con tarjeta
      </button>

      <p className="mt-4 text-center text-xs text-muted-foreground">
        El pago será procesado de forma segura. Al continuar aceptas los
        términos y condiciones, política de privacidad y política de reembolsos
        de Qori ID.
      </p>
    </section>
  );
}

type CheckoutFieldProps = {
  label: string;
  value: string;
};

function CheckoutField({ label, value }: CheckoutFieldProps) {
  return (
    <div className="rounded-xl border border-primary/10 bg-primary/5 p-4">
      <p className="text-xs uppercase tracking-wide text-muted-foreground">
        {label}
      </p>

      <p className="mt-1 font-semibold">{value}</p>
    </div>
  );
}