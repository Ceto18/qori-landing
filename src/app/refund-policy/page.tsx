import { LegalContactBox } from "@/components/legal/LegalContactBox";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { LegalSection } from "@/components/legal/LegalSection";
import { BUSINESS_INFO } from "@/constants/business";

export default function RefundPolicyPage() {
  return (
    <LegalPageLayout
      title="Política de cambios, devoluciones y reembolsos"
      description="Condiciones aplicables a cambios, devoluciones y reembolsos de productos y servicios adquiridos en Qori ID."
    >
      <LegalSection title="Última actualización">
        <p>30/06/2026</p>
      </LegalSection>

      <LegalSection title="Introducción">
        <p>
          Esta política establece las condiciones aplicables a cambios,
          devoluciones y reembolsos de productos y servicios adquiridos en Qori
          ID.
        </p>

        <p>
          Debido a que nuestros productos pueden ser digitales, personalizados y
          configurados con información proporcionada por el cliente, las
          solicitudes serán evaluadas según el estado del pedido y la naturaleza
          del producto contratado.
        </p>
      </LegalSection>

      <LegalSection title="1. Alcance de la política">
        <p>Esta política aplica a compras realizadas a través de:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Página web de Qori ID.</li>
          <li>WhatsApp oficial.</li>
          <li>Redes sociales oficiales.</li>
          <li>Otros canales de venta autorizados por Qori ID.</li>
        </ul>
      </LegalSection>

      <LegalSection title="2. Plazo para solicitar cambios o devoluciones">
        <p>
          El cliente podrá solicitar la evaluación de un cambio, devolución o
          reembolso dentro de los 7 días calendario posteriores a la compra o
          entrega del producto, según corresponda.
        </p>

        <p>La solicitud deberá realizarse mediante:</p>

        <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
          <p>
            <strong>Correo:</strong> {BUSINESS_INFO.supportEmail}
          </p>
          <p>
            <strong>WhatsApp:</strong> {BUSINESS_INFO.whatsapp}
          </p>
          <p>
            <strong>Asunto:</strong> Solicitud de cambio, devolución o reembolso
            – Qori ID
          </p>
        </div>
      </LegalSection>

      <LegalSection title="3. Casos en los que procede un cambio o corrección">
        <p>Qori ID podrá realizar cambios, correcciones o ajustes cuando:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            Exista un error atribuible a Qori ID en la configuración del
            producto.
          </li>
          <li>El producto entregado no corresponda con lo contratado.</li>
          <li>
            El enlace, QR o tarjeta digital presente una falla técnica
            atribuible a Qori ID.
          </li>
          <li>
            La tarjeta NFC tenga un defecto de funcionamiento comprobado,
            siempre que no haya sido dañada por mal uso del cliente.
          </li>
          <li>
            Se haya omitido información enviada correctamente por el cliente
            antes de iniciar el proceso de personalización.
          </li>
        </ul>

        <p>
          En estos casos, Qori ID podrá corregir, reemplazar, reconfigurar o
          solucionar el inconveniente sin costo adicional para el cliente.
        </p>
      </LegalSection>

      <LegalSection title="4. Casos en los que procede un reembolso">
        <p>El reembolso podrá proceder únicamente cuando:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            El pago haya sido realizado por error y el pedido aún no haya sido
            iniciado.
          </li>
          <li>Qori ID no pueda brindar el producto o servicio contratado.</li>
          <li>
            Exista una falla atribuible a Qori ID que impida el uso del producto
            y no pueda ser corregida.
          </li>
          <li>Se haya realizado un cobro duplicado comprobado.</li>
          <li>
            El producto o servicio entregado sea sustancialmente diferente a lo
            ofrecido y no pueda ser corregido.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Casos en los que no procede reembolso">
        <p>No procederá el reembolso cuando:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            El producto digital ya haya sido diseñado, configurado, activado o
            entregado.
          </li>
          <li>
            El producto físico personalizado ya haya sido producido, impreso,
            grabado o enviado.
          </li>
          <li>
            El cliente haya proporcionado datos incorrectos, incompletos o
            desactualizados.
          </li>
          <li>
            El cliente cambie de opinión después de iniciado el proceso de
            personalización.
          </li>
          <li>
            El cliente haya aprobado previamente el diseño, información o
            configuración.
          </li>
          <li>
            El inconveniente sea causado por mal uso, manipulación, caída, daño
            físico o alteración del producto.
          </li>
          <li>
            El problema dependa de plataformas externas, redes sociales,
            internet, dispositivos del cliente, bancos, pasarelas de pago o
            servicios de terceros.
          </li>
          <li>
            El cliente solicite cambios que no formaban parte del producto
            contratado inicialmente.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Productos personalizados">
        <p>
          Las tarjetas digitales, códigos QR, enlaces, perfiles digitales,
          diseños y tarjetas NFC personalizadas son productos elaborados o
          configurados con información específica del cliente.
        </p>

        <p>
          Por esta razón, una vez iniciado el proceso de diseño, configuración,
          activación, producción o entrega, no se aceptan cancelaciones ni
          reembolsos, salvo que exista una falla comprobada atribuible a Qori ID.
        </p>
      </LegalSection>

      <LegalSection title="7. Procedimiento para solicitar un cambio, devolución o reembolso">
        <p>Para solicitar la evaluación, el cliente deberá enviar:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Nombres y apellidos.</li>
          <li>Número de pedido o comprobante de pago.</li>
          <li>Fecha de compra.</li>
          <li>Producto o servicio contratado.</li>
          <li>Motivo de la solicitud.</li>
          <li>Evidencia del problema, como capturas, fotografías o videos.</li>
          <li>Medio de pago utilizado.</li>
          <li>Datos de contacto.</li>
        </ul>

        <p>
          Qori ID evaluará la solicitud y responderá dentro de un plazo de{" "}
          <strong>10 días hábiles como máximo.</strong>
        </p>
      </LegalSection>

      <LegalSection title="8. Formas de reembolso">
        <p>Si el reembolso es aprobado, podrá realizarse mediante:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            Devolución al mismo medio de pago, si la pasarela o entidad
            financiera lo permite.
          </li>
          <li>Transferencia bancaria.</li>
          <li>Billetera digital.</li>
          <li>
            Saldo a favor para otro producto o servicio, previa aceptación del
            cliente.
          </li>
        </ul>

        <p>
          Los tiempos de devolución pueden variar según la entidad bancaria,
          pasarela de pago o medio utilizado.
        </p>
      </LegalSection>

      <LegalSection title="9. Costos de envío">
        <p>
          En caso de productos físicos, los costos de envío para cambios o
          devoluciones serán asumidos por el cliente, salvo que el cambio sea
          consecuencia de un error atribuible a Qori ID o de un defecto
          comprobado del producto.
        </p>
      </LegalSection>

      <LegalSection title="10. Garantía limitada">
        <p>
          Qori ID garantiza que sus productos digitales serán entregados conforme
          a las características ofrecidas y que los productos físicos
          personalizados serán entregados en condiciones adecuadas, salvo daños
          ocasionados por mal uso, manipulación, caídas, humedad, exposición al
          calor, alteraciones o factores externos.
        </p>

        <p>
          Esta política no limita los derechos que la normativa de protección al
          consumidor reconoce al cliente.
        </p>
      </LegalSection>

      <LegalContactBox />
    </LegalPageLayout>
  );
}