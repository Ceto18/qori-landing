import Link from "next/link";
import { CheckCircle2, Home, ReceiptText } from "lucide-react";

export default function CheckoutSuccessPage() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-background px-4 py-20 text-foreground">
            <div className="glass-dark w-full max-w-xl rounded-3xl border border-primary/20 p-8 text-center shadow-2xl shadow-primary/10">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                    <CheckCircle2 className="h-11 w-11 text-primary" strokeWidth={1.8} />
                </div>

                <div className="mt-8">
                    <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                        <ReceiptText className="h-4 w-4" />
                        Compra confirmada
                    </div>

                    <h1 className="text-4xl font-bold sm:text-5xl">
                        Pago realizado correctamente
                    </h1>

                    <p className="mx-auto mt-4 max-w-md text-muted-foreground">
                        Gracias por adquirir tu plan. Hemos recibido tu solicitud y pronto
                        continuaremos con la activación de tu Qori ID.
                    </p>
                </div>

                <div className="mt-8 rounded-2xl border border-primary/10 bg-primary/5 p-5 text-left">
                    <h2 className="font-semibold">Siguiente paso</h2>

                    <p className="mt-2 text-sm text-muted-foreground">
                        Revisa tu correo electrónico. Te enviaremos la información necesaria
                        para configurar tu perfil y empezar a usar tu tarjeta digital.
                    </p>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link
                        href="/"
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 font-semibold text-primary-foreground transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/50"
                    >
                        <Home className="h-5 w-5" />
                        Volver al inicio
                    </Link>

                    <Link
                        href="/#planes"
                        className="flex w-full items-center justify-center rounded-xl border border-primary px-6 py-4 font-semibold text-primary transition-all hover:bg-primary/10"
                    >
                        Ver planes
                    </Link>
                </div>
            </div>
        </main>
    );
}