"use client";

export type CheckoutFormState = {
  buyerName: string;
  buyerEmail: string;
  businessName: string;
  ruc: string;
  phone: string;
};

type Props = {
  form: CheckoutFormState;
  onChange: (field: keyof CheckoutFormState, value: string) => void;
};

export function CheckoutForm({ form, onChange }: Props) {
  return (
    <section className="glass-dark rounded-2xl border border-primary/20 p-8">
      <h2 className="text-2xl font-bold">Datos del comprador</h2>

      <p className="mt-2 text-sm text-muted-foreground">
        Completa tus datos para registrar la compra y coordinar la activación
        del servicio.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="mb-2 block text-sm font-medium">
            Nombre del comprador
          </label>

          <input
            type="text"
            value={form.buyerName}
            onChange={(event) => onChange("buyerName", event.target.value)}
            placeholder="Ejemplo: Juan Pérez"
            className="h-12 w-full rounded-xl border border-primary/20 bg-background px-4 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Correo electrónico
          </label>

          <input
            type="email"
            value={form.buyerEmail}
            onChange={(event) => onChange("buyerEmail", event.target.value)}
            placeholder="cliente@correo.com"
            className="h-12 w-full rounded-xl border border-primary/20 bg-background px-4 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Celular</label>

          <input
            type="text"
            value={form.phone}
            onChange={(event) => onChange("phone", event.target.value)}
            placeholder="999 999 999"
            className="h-12 w-full rounded-xl border border-primary/20 bg-background px-4 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Nombre del negocio
          </label>

          <input
            type="text"
            value={form.businessName}
            onChange={(event) => onChange("businessName", event.target.value)}
            placeholder="Ejemplo: Mi Empresa SAC"
            className="h-12 w-full rounded-xl border border-primary/20 bg-background px-4 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">RUC</label>

          <input
            type="text"
            value={form.ruc}
            onChange={(event) => onChange("ruc", event.target.value)}
            placeholder="20600000000"
            className="h-12 w-full rounded-xl border border-primary/20 bg-background px-4 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary"
          />
        </div>
      </div>
    </section>
  );
}