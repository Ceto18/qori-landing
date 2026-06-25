"use client";

import { CreditCard, ShoppingCart } from "lucide-react";

import { ROUTES } from "@/constants/routes";

import { CheckoutField } from "../cards/CheckoutField";
import { plans } from "../data/plans";

export function CheckoutSection() {
  const selectedPlan = plans.find((plan) => plan.highlighted) ?? plans[0];

  const handlePayDemo = () => {
    console.log("Iniciar pago con Culqi:", selectedPlan);

    window.location.href = ROUTES.paymentSuccess;
  };

  return (
    <section id="checkout" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Resumen de compra
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Revisa tu pedido antes de realizar el pago.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="glass-dark rounded-2xl p-8 border border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <ShoppingCart className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Carrito de compra</h3>
            </div>

            <div className="space-y-5">
              <div className="flex justify-between gap-4 border-b border-primary/10 pb-5">
                <div>
                  <h4 className="font-semibold">{selectedPlan.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    Servicio digital de tarjeta profesional Qori ID.
                  </p>
                </div>

                <strong className="text-primary">{selectedPlan.price}</strong>
              </div>

              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Subtotal</span>
                <span>{selectedPlan.price}</span>
              </div>

              <div className="flex justify-between text-sm text-muted-foreground">
                <span>IGV incluido</span>
                <span>S/ 0.00</span>
              </div>

              <div className="flex justify-between text-xl font-bold border-t border-primary/10 pt-5">
                <span>Total a pagar</span>
                <span className="text-primary">{selectedPlan.price}</span>
              </div>
            </div>
          </div>

          <div className="glass-dark rounded-2xl p-8 border border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <CreditCard className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Pago con tarjeta</h3>
            </div>

            <div className="space-y-4 mb-6">
              <CheckoutField label="Nombre del comprador" value="Cliente Demo" />
              <CheckoutField label="Correo electrónico" value="cliente@demo.com" />
              <CheckoutField label="Producto" value={selectedPlan.name} />
              <CheckoutField label="Monto" value={selectedPlan.price} />
            </div>

            <button
              type="button"
              onClick={handlePayDemo}
              className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-[1.02]"
            >
              <CreditCard className="w-5 h-5" />
              Pagar con tarjeta
            </button>

            <p className="text-xs text-muted-foreground mt-4 text-center">
              El pago será procesado de forma segura. Al continuar aceptas los
              términos y condiciones, política de privacidad y política de
              reembolsos de Qori ID.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}