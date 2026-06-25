import NextLink from "next/link";
import { TriangleAlert } from "lucide-react";

import { ROUTES } from "@/constants/routes";

export default function PaymentErrorPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
      <div className="max-w-xl w-full glass-dark rounded-2xl border border-primary/20 p-8 text-center">
        <TriangleAlert className="w-16 h-16 text-primary mx-auto mb-6" />

        <h1 className="text-4xl font-bold mb-4">No se pudo procesar el pago</h1>

        <p className="text-muted-foreground mb-8">
          Ocurrió un problema al intentar procesar la compra. Puedes volver a
          intentarlo o comunicarte con soporte.
        </p>

        <NextLink
          href={`${ROUTES.home}#checkout`}
          className="inline-flex px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
        >
          Intentar nuevamente
        </NextLink>
      </div>
    </main>
  );
}