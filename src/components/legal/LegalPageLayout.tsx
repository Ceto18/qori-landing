import NextLink from "next/link";
import type { ReactNode } from "react";

import { BUSINESS_INFO } from "@/constants/business";
import { ROUTES } from "@/constants/routes";

type Props = {
  title: string;
  description: string;
  children: ReactNode;
};

export function LegalPageLayout({ title, description, children }: Props) {
  return (
    <main className="min-h-screen bg-background px-4 py-16 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <NextLink
          href={ROUTES.home}
          className="mb-10 inline-flex text-primary hover:underline"
        >
          ← Volver al inicio
        </NextLink>

        <header className="mb-10">
          <p className="mb-3 text-sm font-semibold text-primary">
            {BUSINESS_INFO.brandName}
          </p>

          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
            {title}
          </h1>

          <p className="text-lg text-muted-foreground">
            {description}
          </p>
        </header>

        <section className="glass-dark space-y-8 rounded-2xl border border-primary/20 p-6 sm:p-8">
          {children}
        </section>

        <footer className="mt-8 text-sm text-muted-foreground">
          <p>
            {BUSINESS_INFO.brandName} — {BUSINESS_INFO.legalName}
          </p>

          <p>
            RUC: {BUSINESS_INFO.ruc}
          </p>
        </footer>
      </div>
    </main>
  );
}