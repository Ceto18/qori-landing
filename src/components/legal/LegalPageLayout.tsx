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
    <main className="min-h-screen bg-background text-foreground px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <NextLink
          href={ROUTES.home}
          className="inline-flex mb-10 text-primary hover:underline"
        >
          ← Volver al inicio
        </NextLink>

        <header className="mb-10">
          <p className="text-sm text-primary font-semibold mb-3">
            {BUSINESS_INFO.brandName}
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{title}</h1>

          <p className="text-muted-foreground text-lg">{description}</p>
        </header>

        <div className="glass-dark rounded-2xl border border-primary/20 p-6 sm:p-8 space-y-8">
          {children}
        </div>
      </div>
    </main>
  );
}