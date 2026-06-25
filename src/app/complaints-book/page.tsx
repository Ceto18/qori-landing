import { LegalContactBox } from "@/components/legal/LegalContactBox";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { LegalSection } from "@/components/legal/LegalSection";

export default function ComplaintsBookPage() {
  return (
    <LegalPageLayout
      title="Libro de reclamaciones"
      description="Canal para registrar reclamos o quejas relacionados con el servicio."
    >
      <LegalSection title="Registro de reclamo o queja">
        <p>
          Para registrar un reclamo o queja, el usuario puede enviar un correo
          indicando nombres completos, documento de identidad, teléfono, correo,
          detalle del reclamo y pedido concreto.
        </p>
      </LegalSection>

      <LegalSection title="Información requerida">
        <p>
          El mensaje debe incluir el producto o servicio contratado, fecha de
          compra, monto pagado y una descripción clara de los hechos.
        </p>
      </LegalSection>

      <LegalSection title="Atención">
        <p>
          Qori ID revisará la solicitud y responderá al correo proporcionado por
          el usuario dentro de un plazo razonable.
        </p>
      </LegalSection>

      <LegalContactBox />
    </LegalPageLayout>
  );
}