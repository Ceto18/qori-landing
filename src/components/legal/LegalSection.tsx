import type { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export function LegalSection({ title, children }: Props) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-3">{title}</h2>
      <div className="space-y-3 text-muted-foreground leading-relaxed">
        {children}
      </div>
    </section>
  );
}