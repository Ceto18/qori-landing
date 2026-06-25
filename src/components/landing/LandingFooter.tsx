import Image from "next/image";
import NextLink from "next/link";

import { BUSINESS_INFO } from "@/constants/business";

import { legalLinks } from "./data/legal-links";

export function LandingFooter() {
  return (
    <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/qori-logo.png"
                alt="Qori ID"
                width={80}
                height={40}
                className="h-8 w-auto"
              />
              <span className="text-lg font-bold text-primary">
                {BUSINESS_INFO.brandName}
              </span>
            </div>

            <p className="text-sm text-muted-foreground">
              Plataforma digital para crear, comprar y compartir tarjetas
              profesionales.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Compra</h4>

            <div className="space-y-2 text-sm">
              <a href="#planes" className="block text-muted-foreground hover:text-primary">
                Planes
              </a>

              <a href="#checkout" className="block text-muted-foreground hover:text-primary">
                Carrito de compra
              </a>

              <a href="#checkout" className="block text-muted-foreground hover:text-primary">
                Pagar con tarjeta
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>

            <div className="space-y-2 text-sm">
              {legalLinks.map((link) => (
                <NextLink
                  key={link.href}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary"
                >
                  {link.label}
                </NextLink>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
          <p>
            © 2026 {BUSINESS_INFO.brandName}. Todos los derechos reservados.
            {` ${BUSINESS_INFO.address}.`}
          </p>
        </div>
      </div>
    </footer>
  );
}