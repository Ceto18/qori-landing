import { ArrowRight } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="glass-dark glow-gold-lg p-12 rounded-2xl border border-primary/20">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-primary">
              Empieza hoy
            </span>
          </h2>

          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Compra tu plan, crea tu perfil Qori ID y empieza a compartir tu
            identidad digital profesional.
          </p>

          <a
            href="#checkout"
            className="group px-10 py-4 bg-primary text-primary-foreground text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] inline-flex items-center gap-3 mb-6"
          >
            Comprar ahora
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>

          <p className="text-muted-foreground text-sm">
            Servicio digital mensual · Pago con tarjeta · Cancela cuando quieras
          </p>
        </div>
      </div>
    </section>
  );
}