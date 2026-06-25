type Props = {
  label: string;
  value: string;
};

export function CheckoutField({ label, value }: Props) {
  return (
    <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
      <p className="text-xs text-muted-foreground mb-1">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
}