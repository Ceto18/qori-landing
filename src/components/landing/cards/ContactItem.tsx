import type { ElementType } from "react";

type Props = {
  icon: ElementType;
  label: string;
  value: string;
};

export function ContactItem({ icon: Icon, label, value }: Props) {
  return (
    <div className="glass-dark-hover p-4 rounded-lg border border-primary/20 flex items-center gap-3 cursor-pointer group">
      <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />

      <div className="flex-1 min-w-0">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-medium truncate">{value}</p>
      </div>

      <div className="w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}