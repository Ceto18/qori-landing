import { LegalContactBox } from "@/components/legal/LegalContactBox";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { LegalSection } from "@/components/legal/LegalSection";

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Política de privacidad"
      description="Información sobre el tratamiento y protección de datos personales."
    >
      <LegalSection title="1. Datos recopilados">
        <p>
          Podemos recopilar datos como nombre, correo electrónico, teléfono,
          cargo profesional, empresa, enlaces y datos necesarios para crear la
          tarjeta digital.
        </p>
      </LegalSection>

      <LegalSection title="2. Finalidad">
        <p>
          La información se utiliza para brindar el servicio contratado,
          gestionar la cuenta, procesar solicitudes, ofrecer soporte y mejorar la
          experiencia del usuario.
        </p>
      </LegalSection>

      <LegalSection title="3. Protección de datos">
        <p>
          Qori ID adopta medidas razonables para proteger la información del
          usuario frente a accesos no autorizados, pérdida, alteración o uso
          indebido.
        </p>
      </LegalSection>

      <LegalSection title="4. Compartición de información">
        <p>
          No vendemos datos personales. La información puede compartirse solo con
          proveedores necesarios para operar el servicio, como pasarelas de pago
          o servicios tecnológicos.
        </p>
      </LegalSection>

      <LegalSection title="5. Derechos del usuario">
        <p>
          El usuario puede solicitar la actualización, corrección o eliminación
          de sus datos escribiendo al correo de contacto del comercio.
        </p>
      </LegalSection>

      <LegalContactBox />
    </LegalPageLayout>
  );
}