import { BUSINESS_INFO } from "@/constants/business";

export function LegalContactBox() {
  return (
    <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
      <h3 className="mb-3 font-bold">Datos de contacto – Qori ID</h3>

      <div className="space-y-2 text-sm text-muted-foreground">
        <p>
          <strong className="text-foreground">Nombre comercial:</strong>{" "}
          {BUSINESS_INFO.brandName}
        </p>

        <p>
          <strong className="text-foreground">Razón social:</strong>{" "}
          {BUSINESS_INFO.legalName}
        </p>

        <p>
          <strong className="text-foreground">RUC:</strong>{" "}
          {BUSINESS_INFO.ruc}
        </p>

        <p>
          <strong className="text-foreground">Correo electrónico:</strong>{" "}
          <a
            href={`mailto:${BUSINESS_INFO.email}`}
            className="text-primary underline-offset-4 hover:underline"
          >
            {BUSINESS_INFO.email}
          </a>
        </p>

        <p>
          <strong className="text-foreground">WhatsApp:</strong>{" "}
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline-offset-4 hover:underline"
          >
            {BUSINESS_INFO.whatsapp}
          </a>
        </p>

        <p>
          <strong className="text-foreground">Teléfono:</strong>{" "}
          <a
            href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, "")}`}
            className="text-primary underline-offset-4 hover:underline"
          >
            {BUSINESS_INFO.phone}
          </a>
        </p>

        <p>
          <strong className="text-foreground">Dirección:</strong>{" "}
          {BUSINESS_INFO.address}
        </p>

        <p>
          <strong className="text-foreground">Horario de atención:</strong>{" "}
          {BUSINESS_INFO.supportSchedule}
        </p>

        <p>
          <strong className="text-foreground">Página web:</strong>{" "}
          <a
            href={BUSINESS_INFO.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline-offset-4 hover:underline"
          >
            {BUSINESS_INFO.website}
          </a>
        </p>
      </div>
    </div>
  );
}