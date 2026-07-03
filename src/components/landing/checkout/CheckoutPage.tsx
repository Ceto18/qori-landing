// src/components/landing/checkout/CheckoutPage.tsx

"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import { ROUTES } from "@/constants/routes";

import { planService } from "@/services/planService";
import type { PublicPlan } from "@/types/plan";

import {
  CheckoutForm,
  type CheckoutFormState,
} from "./components/CheckoutForm";
import { CheckoutPlanCard } from "./components/CheckoutPlanCard";
import { CheckoutSummary } from "./components/CheckoutSummary";

const initialCheckoutForm: CheckoutFormState = {
  buyerName: "",
  buyerEmail: "",
  businessName: "",
  ruc: "",
  phone: "",
};

export function CheckoutPage() {
  const searchParams = useSearchParams();
  const selectedPlanSlug = searchParams.get("plan");

  const [plans, setPlans] = useState<PublicPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [checkoutForm, setCheckoutForm] =
    useState<CheckoutFormState>(initialCheckoutForm);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        setLoading(true);

        const response = await planService.getActivePlans();

        setPlans(response.data);
      } catch (error) {
        console.error("Error al obtener planes activos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  const selectedPlan = useMemo(() => {
    if (!selectedPlanSlug) return null;

    return plans.find((plan) => plan.slug === selectedPlanSlug) ?? null;
  }, [plans, selectedPlanSlug]);

  const handleCheckoutFormChange = (
    field: keyof CheckoutFormState,
    value: string
  ) => {
    setCheckoutForm((currentForm) => ({
      ...currentForm,
      [field]: value,
    }));
  };

  const handlePay = () => {
    if (!selectedPlan) return;

    console.log("Iniciar pago con Culqi:", {
      plan: selectedPlan,
      customer: checkoutForm,
    });

    /**
     * Más adelante aquí irá tu integración real:
     *
     * 1. Validar datos del formulario.
     * 2. Crear orden en backend.
     * 3. Abrir Culqi Checkout o redireccionar a pasarela.
     * 4. Confirmar pago.
     */

    window.location.href = ROUTES.paymentSuccess;
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-background px-4 py-20 text-foreground sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="glass-dark rounded-2xl border border-primary/20 p-8">
            <p className="text-muted-foreground">Cargando checkout...</p>
          </div>
        </div>
      </main>
    );
  }

  if (!selectedPlan) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background px-4 text-foreground">
        <div className="glass-dark max-w-md rounded-2xl border border-primary/20 p-8 text-center">
          <h1 className="text-2xl font-bold">Plan no encontrado</h1>

          <p className="mt-3 text-muted-foreground">
            El plan seleccionado no existe o ya no está disponible.
          </p>

          <Link
            href="/#planes"
            className="mt-6 inline-flex rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/50"
          >
            Ver planes
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background px-4 py-20 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <Link
            href="/#planes"
            className="text-sm text-muted-foreground transition hover:text-primary"
          >
            ← Volver a planes
          </Link>

          <h1 className="mt-5 text-4xl font-bold sm:text-5xl">
            Finaliza tu compra
          </h1>

          <p className="mt-4 max-w-2xl text-xl text-muted-foreground">
            Completa tus datos y revisa el resumen antes de continuar con el
            pago.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[1fr_420px]">
          <section className="space-y-8">
            <CheckoutForm
              form={checkoutForm}
              onChange={handleCheckoutFormChange}
            />

            <CheckoutPlanCard
              selectedPlan={selectedPlan}
              form={checkoutForm}
              onPay={handlePay}
            />
          </section>

          <CheckoutSummary selectedPlan={selectedPlan} />
        </div>
      </div>
    </main>
  );
}