import NextLink from "next/link";
import { CheckCircle2 } from "lucide-react";

import { ROUTES } from "@/constants/routes";

export default function PaymentSuccessPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
      <div className="max-w-xl w-full glass-dark rounded-2xl border border-primary/20 p-8 text-center">
        <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-6" />

        <h1 className="text-4xl font-bold mb-4">Pago exitoso</h1>

        <p className="text-muted-foreground mb-8">
          Gracias por tu compra. Tu solicitud fue registrada correctamente. En
          breve podrás activar tu tarjeta digital Qori ID.
        </p>

        <NextLink
          href={ROUTES.home}
          className="inline-flex px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
        >
          Volver al inicio
        </NextLink>
      </div>
    </main>
  );
}