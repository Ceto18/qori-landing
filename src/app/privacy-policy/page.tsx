import { LegalContactBox } from "@/components/legal/LegalContactBox";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { LegalSection } from "@/components/legal/LegalSection";
import { BUSINESS_INFO } from "@/constants/business";

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Política de privacidad"
      description="Información sobre cómo Qori ID recopila, usa, almacena, protege y trata los datos personales de sus clientes, usuarios y visitantes."
    >
      <LegalSection title="Última actualización">
        <p>30/06/2026</p>
      </LegalSection>

      <LegalSection title="Introducción">
        <p>
          En Qori ID respetamos la privacidad de nuestros clientes, usuarios y
          visitantes. Esta Política de Privacidad explica cómo recopilamos,
          usamos, almacenamos, protegemos y tratamos los datos personales que
          nos proporcionas al utilizar nuestra página web, realizar una compra,
          solicitar información o contratar nuestros productos y servicios.
        </p>
      </LegalSection>

      <LegalSection title="1. Responsable del tratamiento de datos">
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
        </div>
      </LegalSection>

      <LegalSection title="2. Datos personales que recopilamos">
        <p>
          Qori ID podrá recopilar los siguientes datos personales, según el
          producto o servicio solicitado:
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Nombres y apellidos.</li>
          <li>Documento de identidad, cuando corresponda.</li>
          <li>Teléfono o WhatsApp.</li>
          <li>Correo electrónico.</li>
          <li>Dirección, cuando se requiera envío físico.</li>
          <li>Cargo, profesión, empresa o nombre comercial.</li>
          <li>Fotografía, logotipo, imagen de marca o diseño proporcionado.</li>
          <li>Redes sociales y enlaces digitales.</li>
          <li>
            Información necesaria para crear tarjetas digitales, QR, NFC o
            perfiles personalizados.
          </li>
          <li>Constancias de pago o información relacionada con la compra.</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Finalidad del tratamiento de datos">
        <p>
          Los datos personales serán utilizados para las siguientes finalidades:
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Gestionar compras, pedidos y pagos.</li>
          <li>
            Crear, configurar y activar tarjetas digitales, códigos QR, enlaces,
            perfiles o tarjetas NFC.
          </li>
          <li>Personalizar productos solicitados por el cliente.</li>
          <li>Coordinar entregas digitales o físicas.</li>
          <li>Brindar soporte técnico y atención al cliente.</li>
          <li>Gestionar consultas, solicitudes, reclamos o quejas.</li>
          <li>Enviar información relacionada con el servicio contratado.</li>
          <li>
            Cumplir obligaciones legales, contables, tributarias o
            administrativas.
          </li>
          <li>Mejorar la experiencia del usuario y nuestros servicios.</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Consentimiento del usuario">
        <p>
          Al proporcionar sus datos mediante la página web, formularios,
          WhatsApp, redes sociales, correo electrónico o cualquier canal oficial
          de Qori ID, el usuario autoriza el tratamiento de sus datos personales
          para las finalidades descritas en esta Política de Privacidad.
        </p>

        <p>
          El usuario declara que los datos entregados son verdaderos,
          actualizados y que cuenta con autorización para compartirlos cuando
          correspondan a terceros, empresas, marcas o representantes.
        </p>
      </LegalSection>

      <LegalSection title="5. Datos de pago">
        <p>
          Cuando el cliente realiza pagos mediante Culqi u otra pasarela de
          pagos, los datos de tarjeta son procesados por dicha plataforma de
          pago. Qori ID no almacena los números completos de tarjetas, códigos
          CVV ni información bancaria sensible del cliente.
        </p>

        <p>
          Qori ID podrá conservar datos relacionados con la transacción, como
          monto, fecha, estado de pago, medio utilizado, comprobante o constancia
          de operación, para fines administrativos, contables y de atención al
          cliente.
        </p>
      </LegalSection>

      <LegalSection title="6. Conservación de datos">
        <p>
          Los datos personales serán conservados durante el tiempo necesario
          para cumplir con las finalidades para las cuales fueron recopilados,
          mantener activo el producto contratado, brindar soporte, atender
          reclamos o cumplir obligaciones legales.
        </p>

        <p>
          Cuando los datos ya no sean necesarios, Qori ID podrá eliminarlos,
          anonimizarlos o conservarlos únicamente cuando exista una obligación
          legal o contractual que lo justifique.
        </p>
      </LegalSection>

      <LegalSection title="7. Transferencia o encargo de tratamiento a terceros">
        <p>
          Qori ID no vende ni comercializa los datos personales de sus clientes.
        </p>

        <p>
          Sin embargo, podrá compartir información con terceros únicamente
          cuando sea necesario para operar el servicio, por ejemplo:
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Proveedores de hosting o almacenamiento.</li>
          <li>Herramientas de gestión web o formularios.</li>
          <li>Pasarelas de pago como Culqi.</li>
          <li>Servicios de mensajería o courier.</li>
          <li>Proveedores tecnológicos.</li>
          <li>Autoridades competentes, cuando exista obligación legal.</li>
        </ul>

        <p>
          En estos casos, Qori ID procurará que los terceros traten la
          información únicamente para la finalidad necesaria y bajo medidas
          razonables de seguridad.
        </p>
      </LegalSection>

      <LegalSection title="8. Seguridad de la información">
        <p>
          Qori ID adopta medidas técnicas, organizativas y razonables para
          proteger los datos personales contra pérdida, alteración, acceso no
          autorizado, uso indebido o divulgación no autorizada.
        </p>

        <p>
          No obstante, el usuario reconoce que ningún sistema informático o
          transmisión por internet es absolutamente seguro. Por ello, también
          debe cuidar sus dispositivos, contraseñas, enlaces y datos de acceso.
        </p>
      </LegalSection>

      <LegalSection title="9. Derechos del titular de datos personales">
        <p>
          El usuario puede ejercer sus derechos de acceso, rectificación,
          cancelación, oposición y demás derechos reconocidos por la normativa
          aplicable sobre protección de datos personales.
        </p>

        <p>Para ejercer estos derechos, puede enviar una solicitud a:</p>

        <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
          <p>
            <strong>Correo:</strong> {BUSINESS_INFO.supportEmail}
          </p>
          <p>
            <strong>Asunto:</strong> Solicitud de protección de datos personales
            – Qori ID
          </p>
        </div>

        <p>La solicitud deberá incluir:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Nombres y apellidos.</li>
          <li>Documento de identidad.</li>
          <li>Medio de contacto.</li>
          <li>Derecho que desea ejercer.</li>
          <li>Descripción clara de la solicitud.</li>
          <li>Documentos que sustenten la solicitud, si corresponde.</li>
        </ul>

        <p>Qori ID atenderá la solicitud dentro del plazo legal vigente.</p>
      </LegalSection>

      <LegalSection title="10. Uso de cookies">
        <p>
          La página web de Qori ID puede utilizar cookies o tecnologías similares
          para mejorar la experiencia de navegación, recordar preferencias,
          analizar visitas, medir el rendimiento del sitio y optimizar nuestros
          servicios.
        </p>

        <p>
          El usuario puede configurar su navegador para bloquear o eliminar
          cookies. Sin embargo, algunas funciones de la página web podrían verse
          afectadas.
        </p>
      </LegalSection>

      <LegalSection title="11. Comunicaciones comerciales">
        <p>
          Qori ID podrá enviar comunicaciones relacionadas con productos,
          servicios, promociones o novedades únicamente cuando el usuario haya
          brindado su consentimiento o exista una relación comercial previa
          permitida por la normativa aplicable.
        </p>

        <p>
          El usuario podrá solicitar dejar de recibir comunicaciones comerciales
          escribiendo a {BUSINESS_INFO.supportEmail}.
        </p>
      </LegalSection>

      <LegalSection title="12. Cambios en esta Política de Privacidad">
        <p>
          Qori ID podrá modificar esta Política de Privacidad cuando sea
          necesario. La versión actualizada será publicada en nuestra página web
          y entrará en vigor desde su publicación.
        </p>
      </LegalSection>

      <LegalContactBox />
    </LegalPageLayout>
  );
}