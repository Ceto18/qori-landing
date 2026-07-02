import type { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export function LegalSection({ title, children }: Props) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">{title}</h2>

      <div className="space-y-3 leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}