import { LegalContactBox } from "@/components/legal/LegalContactBox";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { LegalSection } from "@/components/legal/LegalSection";
import { BUSINESS_INFO } from "@/constants/business";

export default function ContactPage() {
  return (
    <LegalPageLayout
      title="Contacto"
      description="Canales oficiales de atención de Qori ID para consultas, soporte, devoluciones y reclamos."
    >
      <LegalSection title="Datos de contacto – Qori ID">
        <p>
          Para consultas sobre compras, pagos, activación de tarjetas digitales,
          tarjetas NFC, códigos QR, actualización de datos, soporte, devoluciones
          o reclamos, puedes comunicarte con nosotros mediante los canales
          oficiales indicados en esta página.
        </p>
      </LegalSection>

      <LegalSection title="Atención al cliente">
        <p>
          Qori ID brinda atención para consultas comerciales, soporte técnico,
          solicitudes relacionadas con tu cuenta, cambios de información,
          devoluciones y reclamos.
        </p>
      </LegalSection>

      <LegalSection title="Horario de atención">
        <p>{BUSINESS_INFO.supportSchedule}</p>
        <p>
          Qori ID responderá las consultas dentro del horario de atención
          establecido.
        </p>
      </LegalSection>

      <LegalContactBox />
    </LegalPageLayout>
  );
}