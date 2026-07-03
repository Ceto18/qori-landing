// src/components/landing/checkout/CheckoutPage.tsx

"use client";

import Link from "next/link";
import Script from "next/script";
import { message } from "antd";
import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { planService } from "@/services/planService";
import { checkoutService } from "@/services/checkoutService";

import type { PublicPlan } from "@/types/plan";

import {
  CheckoutForm,
  type CheckoutFormState,
} from "./components/CheckoutForm";
import { CheckoutPlanCard } from "./components/CheckoutPlanCard";
import { CheckoutSummary } from "./components/CheckoutSummary";
import { CheckoutLoading } from "./components/CheckoutLoading";

const initialCheckoutForm: CheckoutFormState = {
  buyerName: "",
  buyerEmail: "",
  businessName: "",
  ruc: "",
  phone: "",
};

export function CheckoutPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedPlanSlug = searchParams.get("plan");

  const [plans, setPlans] = useState<PublicPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [isCulqiReady, setIsCulqiReady] = useState(false);
  const [isPaying, setIsPaying] = useState(false);

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

        message.error({
          content: "No se pudieron cargar los planes. Intenta nuevamente.",
          duration: 4,
        });
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

  const validateCheckoutForm = () => {
    const buyerName = checkoutForm.buyerName.trim();
    const buyerEmail = checkoutForm.buyerEmail.trim();
    const businessName = checkoutForm.businessName.trim();
    const ruc = checkoutForm.ruc.trim();
    const phone = checkoutForm.phone.trim();

    if (!buyerName) {
      message.warning("Ingresa el nombre del comprador.");
      return false;
    }

    if (!buyerEmail) {
      message.warning("Ingresa el correo electrónico.");
      return false;
    }

    if (!buyerEmail.includes("@")) {
      message.warning("Ingresa un correo electrónico válido.");
      return false;
    }

    if (!phone) {
      message.warning("Ingresa el número de celular.");
      return false;
    }

    if (!businessName) {
      message.warning("Ingresa el nombre del negocio.");
      return false;
    }

    if (!ruc) {
      message.warning("Ingresa el RUC.");
      return false;
    }

    return true;
  };

  const handlePay = () => {
    if (!selectedPlan) return;

    if (!validateCheckoutForm()) return;

    const culqiPublicKey = process.env.NEXT_PUBLIC_CULQI_PUBLIC_KEY;

    if (!culqiPublicKey) {
      message.error("No se encontró la llave pública de Culqi.");
      return;
    }

    if (!window.Culqi || !isCulqiReady) {
      message.warning("El checkout de Culqi todavía está cargando.");
      return;
    }

    const amountInCents = Math.round(Number(selectedPlan.price) * 100);

    window.Culqi.publicKey = culqiPublicKey;

    window.Culqi.settings({
      title: "Qori ID",
      currency: "PEN",
      amount: amountInCents,
    });

    window.Culqi.options?.({
      lang: "es",
      installments: false,
      paymentMethods: {
        tarjeta: true,
        yape: false,
        bancaMovil: false,
        agente: false,
        billetera: false,
        cuotealo: false,
      },
    });

    window.culqi = async () => {
      const token = window.Culqi?.token;
      const culqiError = window.Culqi?.error;

      if (culqiError) {
        message.error({
          content:
            culqiError.user_message ??
            culqiError.message ??
            "No se pudo procesar el pago.",
          duration: 4,
        });

        router.push("/checkout/error");
        return;
      }

      if (!token?.id) {
        message.error("No se generó el token de pago.");
        return;
      }

      try {
        setIsPaying(true);

        const response = await checkoutService.pay({
          plan_slug: selectedPlan.slug,
          culqi_token: token.id,
          buyer_name: checkoutForm.buyerName.trim(),
          buyer_email: checkoutForm.buyerEmail.trim(),
          business_name: checkoutForm.businessName.trim(),
          ruc: checkoutForm.ruc.trim(),
          phone: checkoutForm.phone.trim(),
        });

        if (response.success) {
          message.success({
            content: "Pago registrado correctamente.",
            duration: 3,
          });

          router.push("/checkout/success");
          return;
        }

        message.error({
          content: response.message || "No se pudo registrar el pago.",
          duration: 4,
        });

        router.push("/checkout/error");
      } catch (error) {
        console.error("Error al registrar pago:", error);

        message.error({
          content: "Ocurrió un error al procesar el pago.",
          duration: 4,
        });

        router.push("/checkout/error");
      } finally {
        setIsPaying(false);
      }
    };

    window.Culqi.open();
  };

  if (loading) {
    return <CheckoutLoading />;
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
    <>
      <Script
        src="https://checkout.culqi.com/js/v4"
        strategy="afterInteractive"
        onLoad={() => setIsCulqiReady(true)}
        onError={() => {
          setIsCulqiReady(false);

          message.error({
            content: "No se pudo cargar Culqi Checkout.",
            duration: 4,
          });
        }}
      />

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
                isPaying={isPaying}
                isCulqiReady={isCulqiReady}
              />
            </section>

            <CheckoutSummary selectedPlan={selectedPlan} />
          </div>
        </div>
      </main>
    </>
  );
}