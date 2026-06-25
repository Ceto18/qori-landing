import { LegalContactBox } from "@/components/legal/LegalContactBox";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { LegalSection } from "@/components/legal/LegalSection";

export default function RefundPolicyPage() {
  return (
    <LegalPageLayout
      title="Política de reembolsos"
      description="Condiciones para solicitar devoluciones o reembolsos del servicio."
    >
      <LegalSection title="1. Naturaleza del servicio">
        <p>
          Qori ID es un servicio digital. Una vez activado o configurado el
          perfil digital, se considera iniciado el uso del servicio contratado.
        </p>
      </LegalSection>

      <LegalSection title="2. Solicitud de reembolso">
        <p>
          El usuario puede solicitar una evaluación de reembolso dentro de las
          primeras 24 horas posteriores al pago, siempre que el servicio no haya
          sido activado o utilizado.
        </p>
      </LegalSection>

      <LegalSection title="3. Casos aplicables">
        <p>
          Podrán evaluarse reembolsos por cobros duplicados, errores de pago o
          imposibilidad técnica comprobada para acceder al servicio.
        </p>
      </LegalSection>

      <LegalSection title="4. Casos no aplicables">
        <p>
          No aplica reembolso cuando el usuario ya utilizó el servicio, registró
          información, activó su tarjeta digital o recibió la prestación digital
          contratada.
        </p>
      </LegalSection>

      <LegalSection title="5. Plazo de atención">
        <p>
          Las solicitudes serán revisadas en un plazo razonable y respondidas al
          correo registrado por el usuario.
        </p>
      </LegalSection>

      <LegalContactBox />
    </LegalPageLayout>
  );
}