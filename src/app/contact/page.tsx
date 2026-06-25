import { LegalContactBox } from "@/components/legal/LegalContactBox";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { LegalSection } from "@/components/legal/LegalSection";
import { BUSINESS_INFO } from "@/constants/business";

export default function ContactPage() {
  return (
    <LegalPageLayout
      title="Contacto"
      description="Canales oficiales para consultas comerciales y soporte."
    >
      <LegalSection title="Atención al cliente">
        <p>
          Puedes comunicarte con Qori ID para consultas sobre planes, pagos,
          activación del servicio, soporte técnico o solicitudes relacionadas con
          tu cuenta.
        </p>
      </LegalSection>

      <LegalSection title="Horario de atención">
        <p>{BUSINESS_INFO.supportSchedule}</p>
      </LegalSection>

      <LegalContactBox />
    </LegalPageLayout>
  );
}