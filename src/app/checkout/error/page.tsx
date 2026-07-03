import Link from "next/link";
import { AlertCircle, ArrowLeft, RefreshCcw } from "lucide-react";

export default function CheckoutErrorPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-20 text-foreground">
      <div className="glass-dark w-full max-w-xl rounded-3xl border border-destructive/30 p-8 text-center shadow-2xl shadow-destructive/10">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-destructive/30 bg-destructive/10">
          <AlertCircle
            className="h-11 w-11 text-destructive"
            strokeWidth={1.8}
          />
        </div>

        <div className="mt-8">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-2 text-sm font-semibold text-destructive">
            Pago no completado
          </div>

          <h1 className="text-4xl font-bold sm:text-5xl">
            No pudimos procesar tu pago
          </h1>

          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Ocurrió un problema durante el proceso de pago. Puedes intentarlo
            nuevamente o volver a seleccionar un plan.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-destructive/10 bg-destructive/5 p-5 text-left">
          <h2 className="font-semibold">Qué puedes hacer</h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Verifica los datos de tu tarjeta, confirma que tengas saldo
            disponible o intenta con otro método de pago.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/checkout"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 font-semibold text-primary-foreground transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/50"
          >
            <RefreshCcw className="h-5 w-5" />
            Intentar nuevamente
          </Link>

          <Link
            href="/#planes"
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-primary px-6 py-4 font-semibold text-primary transition-all hover:bg-primary/10"
          >
            <ArrowLeft className="h-5 w-5" />
            Volver a planes
          </Link>
        </div>
      </div>
    </main>
  );
}