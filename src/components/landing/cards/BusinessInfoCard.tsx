import type { ElementType } from "react";

type Props = {
  icon: ElementType;
  title: string;
  description: string;
  detail: string;
};

export function BusinessInfoCard({
  icon: Icon,
  title,
  description,
  detail,
}: Props) {
  return (
    <div className="glass-dark glass-dark-hover p-8 rounded-lg border border-primary/20">
      <div className="w-14 h-14 mb-5 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
        <Icon className="w-7 h-7 text-primary" strokeWidth={1.8} />
      </div>

      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-primary font-semibold mb-2">{description}</p>
      <p className="text-sm text-muted-foreground">{detail}</p>
    </div>
  );
}