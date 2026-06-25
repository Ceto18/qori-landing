import Image from "next/image";

export function LandingNavbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <a href="#inicio" className="flex items-center gap-2">
          <Image
            src="/qori-logo.png"
            alt="Qori ID"
            width={120}
            height={60}
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold text-primary">Qori ID</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#planes" className="text-sm hover:text-primary transition-colors">
            Planes
          </a>

          <a href="#checkout" className="text-sm hover:text-primary transition-colors">
            Comprar
          </a>

          <a href="#how" className="text-sm hover:text-primary transition-colors">
            Cómo funciona
          </a>

          <a href="#legal" className="text-sm hover:text-primary transition-colors">
            Legal
          </a>

          <a
            href="#planes"
            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
          >
            Crear cuenta
          </a>
        </div>
      </div>
    </nav>
  );
}