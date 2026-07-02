import { LegalContactBox } from "@/components/legal/LegalContactBox";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { LegalSection } from "@/components/legal/LegalSection";
import { BUSINESS_INFO } from "@/constants/business";

export default function TermsAndConditionsPage() {
  return (
    <LegalPageLayout
      title="Términos y condiciones de compra"
      description="Condiciones aplicables al acceso, navegación, solicitud de información y compra de productos o servicios de Qori ID."
    >
      <LegalSection title="Última actualización">
        <p>30/06/2026</p>
      </LegalSection>

      <LegalSection title="Introducción">
        <p>
          Bienvenido(a) a Qori ID. Antes de realizar una compra en nuestra
          página web, te recomendamos leer cuidadosamente los presentes Términos
          y Condiciones. Al acceder, navegar, solicitar información o comprar
          cualquiera de nuestros productos o servicios, declaras haber leído,
          comprendido y aceptado estas condiciones.
        </p>
      </LegalSection>

      <LegalSection title="1. Datos del comercio">
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
            <strong>Domicilio fiscal o comercial:</strong>{" "}
            {BUSINESS_INFO.address}
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
          <p>
            <strong>Horario de atención:</strong>{" "}
            {BUSINESS_INFO.supportSchedule}
          </p>
        </div>
      </LegalSection>

      <LegalSection title="2. Sobre Qori ID">
        <p>
          Qori ID es un emprendimiento tecnológico dedicado a ofrecer soluciones
          de identificación y presentación digital, tales como tarjetas digitales
          inteligentes, tarjetas NFC, códigos QR, enlaces personalizados y
          perfiles digitales para personas, profesionales, emprendedores y
          empresas.
        </p>

        <p>
          Nuestro objetivo es facilitar el intercambio de información de contacto
          de manera moderna, rápida, práctica y sostenible, reduciendo el uso de
          tarjetas físicas tradicionales.
        </p>
      </LegalSection>

      <LegalSection title="3. Productos y servicios ofrecidos">
        <p>
          A través de nuestra página web, redes sociales o canales oficiales,
          Qori ID puede ofrecer los siguientes productos o servicios:
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Tarjetas digitales de presentación.</li>
          <li>Tarjetas NFC personalizadas.</li>
          <li>Códigos QR de contacto.</li>
          <li>Perfiles digitales profesionales.</li>
          <li>Enlaces personalizados.</li>
          <li>Diseño y configuración de información digital.</li>
          <li>
            Soluciones digitales para personas, marcas, emprendimientos y
            empresas.
          </li>
        </ul>

        <p>
          Las características, precios, tiempos de entrega, condiciones de
          personalización y alcances de cada producto serán informados antes de
          confirmar la compra.
        </p>
      </LegalSection>

      <LegalSection title="4. Aceptación de los términos">
        <p>
          El uso de esta página web y la realización de compras en Qori ID
          implican la aceptación de los presentes Términos y Condiciones.
        </p>

        <p>
          Qori ID se reserva el derecho de modificar, actualizar o complementar
          estos términos cuando sea necesario. Cualquier cambio será publicado en
          esta página web y entrará en vigor desde su publicación, salvo que se
          indique una fecha distinta.
        </p>
      </LegalSection>

      <LegalSection title="5. Información proporcionada por el cliente">
        <p>
          Para la elaboración, configuración o activación de los productos
          digitales, el cliente deberá brindar información verdadera, actualizada
          y autorizada, como:
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Nombres y apellidos.</li>
          <li>Nombre comercial o empresa.</li>
          <li>Cargo o profesión.</li>
          <li>Número telefónico.</li>
          <li>Correo electrónico.</li>
          <li>Redes sociales.</li>
          <li>Logotipo, fotografía o imagen de marca.</li>
          <li>Enlaces digitales.</li>
          <li>
            Datos que desee incluir en su tarjeta digital, perfil, QR o tarjeta
            NFC.
          </li>
        </ul>

        <p>
          El cliente declara que la información enviada le pertenece o cuenta con
          autorización para utilizarla. Qori ID no será responsable por errores,
          reclamos o inconvenientes ocasionados por datos incorrectos,
          incompletos, desactualizados o proporcionados sin autorización.
        </p>
      </LegalSection>

      <LegalSection title="6. Proceso de compra">
        <p>
          El proceso de compra podrá realizarse mediante la página web, WhatsApp,
          redes sociales u otros canales oficiales de Qori ID.
        </p>

        <p>El procedimiento general es el siguiente:</p>

        <ol className="list-decimal space-y-2 pl-6">
          <li>El cliente selecciona el producto o servicio de su interés.</li>
          <li>
            Qori ID informa las características, precio, condiciones y tiempo
            estimado de entrega.
          </li>
          <li>
            El cliente proporciona los datos necesarios para la personalización o
            activación.
          </li>
          <li>El cliente realiza el pago mediante los medios habilitados.</li>
          <li>Qori ID valida la operación y confirma el pedido.</li>
          <li>
            Se inicia el proceso de diseño, configuración, activación,
            producción o entrega, según corresponda.
          </li>
          <li>
            El producto o servicio se entrega por medios digitales o físicos,
            según la modalidad contratada.
          </li>
        </ol>

        <p>
          Qori ID podrá cancelar o suspender un pedido cuando exista información
          incompleta, pago no validado, uso indebido del servicio, sospecha de
          fraude, imposibilidad técnica o incumplimiento de estas condiciones.
        </p>
      </LegalSection>

      <LegalSection title="7. Precios y moneda">
        <p>
          Los precios publicados se expresan en soles peruanos (S/), salvo que
          se indique expresamente otra moneda.
        </p>

        <p>
          Los precios pueden variar según promociones, campañas, nivel de
          personalización, tipo de producto, cantidad solicitada o servicios
          adicionales contratados.
        </p>

        <p>
          Qori ID procurará mantener actualizada la información publicada en la
          página web; sin embargo, se reserva el derecho de corregir errores
          tipográficos, precios incorrectos o información desactualizada antes de
          confirmar una compra.
        </p>
      </LegalSection>

      <LegalSection title="8. Medios de pago">
        <p>Qori ID podrá aceptar pagos mediante:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Tarjetas de débito.</li>
          <li>Tarjetas de crédito.</li>
          <li>Pasarela de pagos Culqi.</li>
          <li>Transferencias bancarias.</li>
          <li>Billeteras digitales.</li>
          <li>Otros medios informados por Qori ID.</li>
        </ul>

        <p>
          Cuando el pago se realice mediante Culqi u otra pasarela de pagos, la
          operación será procesada a través de dicha plataforma. Qori ID no
          almacena los datos completos de tarjetas bancarias del cliente.
        </p>

        <p>
          La compra se considerará confirmada únicamente cuando el pago haya sido
          validado correctamente.
        </p>
      </LegalSection>

      <LegalSection title="9. Seguridad en los pagos">
        <p>
          Qori ID utiliza medios de pago habilitados para facilitar transacciones
          seguras. El cliente es responsable de ingresar correctamente sus datos
          de pago y verificar que la operación haya sido realizada desde un
          entorno seguro.
        </p>

        <p>
          En caso de operaciones rechazadas, pagos duplicados, pagos observados o
          problemas con la entidad bancaria, Qori ID podrá solicitar constancias
          de pago o documentación adicional para validar la operación.
        </p>
      </LegalSection>

      <LegalSection title="10. Entrega de productos digitales">
        <p>
          Los productos digitales podrán ser entregados mediante correo
          electrónico, WhatsApp, enlace digital, código QR, panel de acceso u
          otro medio informado al cliente.
        </p>

        <p>
          El tiempo estimado de entrega será comunicado al momento de la compra y
          podrá variar según la cantidad de pedidos, nivel de personalización,
          validación de información o respuesta del cliente.
        </p>
      </LegalSection>

      <LegalSection title="11. Entrega de productos físicos">
        <p>
          En caso de tarjetas NFC u otros productos físicos, el tiempo de entrega
          dependerá del diseño, producción, disponibilidad, personalización y
          modalidad de envío.
        </p>

        <p>
          Los costos de envío, cobertura, tiempos aproximados y condiciones
          logísticas serán informados antes de confirmar la compra.
        </p>

        <p>
          Qori ID no será responsable por retrasos ocasionados por datos de envío
          incorrectos, ausencia del destinatario, problemas de courier, casos
          fortuitos o causas ajenas al comercio.
        </p>
      </LegalSection>

      <LegalSection title="12. Revisión y aprobación del cliente">
        <p>
          Cuando el producto requiera diseño, configuración o personalización,
          Qori ID podrá enviar una vista previa o solicitar confirmación de datos
          antes de la entrega final.
        </p>

        <p>
          El cliente es responsable de revisar cuidadosamente nombres, cargos,
          teléfonos, correos, enlaces, redes sociales, logotipos y cualquier
          información incluida en su producto.
        </p>

        <p>
          Una vez aprobado el diseño, configurado el perfil, activado el enlace,
          generado el QR o producida la tarjeta personalizada, cualquier
          modificación adicional podrá estar sujeta a evaluación o costo
          adicional.
        </p>
      </LegalSection>

      <LegalSection title="13. Uso correcto del producto">
        <p>
          El cliente se compromete a utilizar los productos y servicios de Qori
          ID únicamente para fines lícitos, profesionales, comerciales o
          personales permitidos por la ley.
        </p>

        <p>Está prohibido utilizar los productos de Qori ID para:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Suplantar identidad.</li>
          <li>Difundir información falsa o engañosa.</li>
          <li>Publicar datos de terceros sin autorización.</li>
          <li>Realizar fraudes o actividades ilícitas.</li>
          <li>
            Compartir contenido ofensivo, discriminatorio, ilegal o contrario al
            orden público.
          </li>
          <li>
            Afectar derechos de propiedad intelectual, imagen, privacidad o
            reputación de terceros.
          </li>
        </ul>

        <p>
          Qori ID podrá suspender o limitar el servicio si detecta un uso
          indebido o contrario a estos términos.
        </p>
      </LegalSection>

      <LegalSection title="14. Propiedad intelectual">
        <p>
          Los nombres, diseños, textos, formatos, estructura, elementos gráficos,
          contenidos, logotipos, marca, materiales digitales y recursos
          desarrollados por Qori ID se encuentran protegidos por la normativa de
          propiedad intelectual aplicable.
        </p>

        <p>
          El cliente recibe el derecho de uso del producto contratado, pero no
          adquiere propiedad sobre la tecnología, plataforma, estructura,
          metodología, código, diseños base o recursos internos de Qori ID.
        </p>

        <p>
          El cliente declara contar con autorización para utilizar los logotipos,
          imágenes, fotografías, marcas o contenidos que proporcione para la
          personalización del producto.
        </p>
      </LegalSection>

      <LegalSection title="15. Soporte y actualizaciones">
        <p>
          Qori ID podrá brindar soporte para activación, configuración inicial,
          corrección de errores atribuibles al comercio o actualización de
          información, según el producto o plan contratado.
        </p>

        <p>
          Las actualizaciones posteriores, rediseños, cambios estructurales,
          modificación de datos o servicios adicionales podrán estar sujetos a
          costos adicionales, los cuales serán informados previamente al cliente.
        </p>
      </LegalSection>

      <LegalSection title="16. Limitación de responsabilidad">
        <p>
          Qori ID se compromete a brindar sus productos y servicios de manera
          diligente y profesional. Sin embargo, no será responsable por:
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Fallas de internet, equipos o dispositivos del cliente.</li>
          <li>Errores en enlaces externos o redes sociales de terceros.</li>
          <li>
            Cambios, bloqueos o caídas de plataformas como Instagram, Facebook,
            LinkedIn, TikTok, WhatsApp u otras.
          </li>
          <li>Uso incorrecto del producto por parte del cliente.</li>
          <li>
            Información incorrecta, incompleta o desactualizada proporcionada por
            el cliente.
          </li>
          <li>
            Problemas generados por servicios externos, bancos, pasarelas de
            pago, empresas de envío o proveedores tecnológicos.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="17. Protección de datos personales">
        <p>
          Qori ID tratará los datos personales del cliente conforme a su Política
          de Privacidad y a la normativa peruana aplicable sobre protección de
          datos personales.
        </p>

        <p>
          Al proporcionar sus datos, el cliente autoriza su tratamiento para
          gestionar la compra, personalizar el producto, brindar soporte, emitir
          comunicaciones relacionadas con el servicio y cumplir obligaciones
          legales.
        </p>
      </LegalSection>

      <LegalSection title="18. Reclamos, quejas y atención al cliente">
        <p>
          El cliente puede comunicarse con Qori ID para consultas, soporte,
          reclamos o quejas mediante los siguientes canales:
        </p>

        <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm">
          <p>
            <strong>Correo:</strong> {BUSINESS_INFO.supportEmail}
          </p>
          <p>
            <strong>WhatsApp:</strong> {BUSINESS_INFO.whatsapp}
          </p>
          <p>
            <strong>Horario de atención:</strong>{" "}
            {BUSINESS_INFO.supportSchedule}
          </p>
        </div>

        <p>
          Asimismo, Qori ID pone a disposición de sus clientes su Libro de
          Reclamaciones Virtual, conforme a la normativa peruana de protección al
          consumidor.
        </p>
      </LegalSection>

      <LegalSection title="19. Legislación aplicable">
        <p>
          Los presentes Términos y Condiciones se rigen por las leyes de la
          República del Perú.
        </p>

        <p>
          Cualquier controversia relacionada con la compra, uso de productos o
          servicios de Qori ID podrá ser atendida mediante trato directo, Libro
          de Reclamaciones, Indecopi, conciliación o las instancias competentes
          conforme a ley.
        </p>
      </LegalSection>

      <LegalContactBox />
    </LegalPageLayout>
  );
}