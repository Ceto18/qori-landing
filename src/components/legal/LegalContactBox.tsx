import { BUSINESS_INFO } from "@/constants/business";

export function LegalContactBox() {
  return (
    <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
      <h3 className="font-bold mb-3">Datos de contacto</h3>

      <div className="space-y-2 text-sm text-muted-foreground">
        <p>
          <strong className="text-foreground">Comercio:</strong>{" "}
          {BUSINESS_INFO.legalName}
        </p>

        <p>
          <strong className="text-foreground">RUC:</strong>{" "}
          {BUSINESS_INFO.ruc}
        </p>

        <p>
          <strong className="text-foreground">Correo:</strong>{" "}
          {BUSINESS_INFO.email}
        </p>

        <p>
          <strong className="text-foreground">Teléfono:</strong>{" "}
          {BUSINESS_INFO.phone}
        </p>

        <p>
          <strong className="text-foreground">Dirección:</strong>{" "}
          {BUSINESS_INFO.address}
        </p>
      </div>
    </div>
  );
}