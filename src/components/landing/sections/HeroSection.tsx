import { ArrowRight, CheckCircle2 } from "lucide-react";

import { VCardPreview } from "../cards/VCardPreview";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-primary">
                Tu identidad
              </span>
              <br />
              <span className="text-white">vale oro</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-xl">
              Crea, compra y activa tu tarjeta digital profesional Qori ID.
              Comparte tus datos, redes, WhatsApp, ubicación y enlaces desde un
              perfil elegante y seguro.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#planes"
              className="px-8 py-4 bg-primary text-primary-foreground text-lg font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              Ver planes
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#checkout"
              className="px-8 py-4 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all font-semibold text-center"
            >
              Comprar ahora
            </a>
          </div>

          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            {[
              "Compra segura con tarjeta de débito o crédito.",
              "Emisión digital del servicio después del pago.",
              "Soporte por correo y WhatsApp.",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <VCardPreview />
        </div>
      </div>
    </section>
  );
}