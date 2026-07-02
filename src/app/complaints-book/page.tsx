import { ComplaintsBookForm } from "@/components/legal/ComplaintsBookForm";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { LegalSection } from "@/components/legal/LegalSection";
import { BUSINESS_INFO } from "@/constants/business";

export default function ComplaintsBookPage() {
  return (
    <LegalPageLayout
      title="Libro de reclamaciones"
      description="Canal oficial para registrar reclamos o quejas relacionados con productos o servicios de Qori ID."
    >
      <LegalSection title="Formato de hoja de reclamación">
        <p>
          Este formulario permite registrar reclamos o quejas relacionados con
          productos o servicios adquiridos en Qori ID.
        </p>

        <p>
          Al enviar el formulario, se registrará la información para la atención
          correspondiente de tu solicitud.
        </p>
      </LegalSection>

      <LegalSection title="1. Datos del proveedor">
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm">
          <p>
            <strong>Nombre comercial:</strong> {BUSINESS_INFO.brandName}
          </p>
          <p>
            <strong>Razón social:</strong> {BUSINESS_INFO.legalName}
          </p>
          <p>
            <strong>RUC:</strong> {BUSINESS_INFO.ruc}
          </p>
          <p>
            <strong>Domicilio:</strong> {BUSINESS_INFO.address}
          </p>
          <p>
            <strong>Correo electrónico:</strong> {BUSINESS_INFO.email}
          </p>
          <p>
            <strong>Teléfono / WhatsApp:</strong> {BUSINESS_INFO.whatsapp}
          </p>
          <p>
            <strong>Página web:</strong> {BUSINESS_INFO.website}
          </p>
        </div>
      </LegalSection>

      <ComplaintsBookForm />
    </LegalPageLayout>
  );
}