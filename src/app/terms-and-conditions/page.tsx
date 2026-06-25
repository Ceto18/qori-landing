import { LegalContactBox } from "@/components/legal/LegalContactBox";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { LegalSection } from "@/components/legal/LegalSection";

export default function TermsAndConditionsPage() {
  return (
    <LegalPageLayout
      title="Términos y condiciones"
      description="Condiciones aplicables al uso y compra del servicio digital Qori ID."
    >
      <LegalSection title="1. Servicio">
        <p>
          Qori ID ofrece un servicio digital para crear, personalizar y compartir
          tarjetas profesionales digitales mediante un perfil público.
        </p>
      </LegalSection>

      <LegalSection title="2. Compra del servicio">
        <p>
          El usuario puede adquirir uno de los planes disponibles en la web. El
          pago se realiza mediante tarjeta de débito o crédito a través de una
          pasarela de pagos autorizada.
        </p>
      </LegalSection>

      <LegalSection title="3. Activación">
        <p>
          Luego de confirmado el pago, el usuario podrá acceder a la activación
          o configuración de su tarjeta digital según el plan adquirido.
        </p>
      </LegalSection>

      <LegalSection title="4. Uso permitido">
        <p>
          El usuario se compromete a registrar información veraz y a no utilizar
          el servicio para actividades ilícitas, fraudulentas o que afecten a
          terceros.
        </p>
      </LegalSection>

      <LegalSection title="5. Cambios del servicio">
        <p>
          Qori ID puede realizar mejoras, ajustes o cambios en sus servicios
          digitales para mantener la calidad, seguridad y disponibilidad de la
          plataforma.
        </p>
      </LegalSection>

      <LegalContactBox />
    </LegalPageLayout>
  );
}