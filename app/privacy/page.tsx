import Navbar from "@/app/ui/salon/navbar";
import Footer from "@/app/ui/salon/footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-salon-black">
      <Navbar />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-salon-white mb-6">
              Política de <span className="text-salon-red">Privacidad</span>
            </h1>
            <p className="text-lg text-salon-gray-light">
              Última actualización: Enero 2026
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="h-px w-16 bg-salon-red" />
              <div className="h-2 w-2 bg-salon-red rounded-full" />
              <div className="h-px w-16 bg-salon-red" />
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <div className="bg-salon-gray-dark/30 rounded-2xl p-8 mb-8 border border-salon-red/20">
              <p className="text-salon-red font-semibold mb-2">
                ⚠️ AVISO: VERSIÓN DE PRUEBA
              </p>
              <p className="text-salon-gray-light text-sm">
                Este es un documento de plantilla genérico. Debe ser completado
                con la información real del negocio antes del despliegue en
                producción.
              </p>
            </div>

            {/* 1. Responsable del Tratamiento */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-salon-white mb-4">
                1. Responsable del Tratamiento
              </h2>
              <div className="bg-salon-gray-dark/20 rounded-xl p-6 text-salon-gray-light">
                <p className="mb-2">
                  <strong className="text-salon-white">
                    Denominación social:
                  </strong>{" "}
                  [NOMBRE COMPLETO DEL NEGOCIO]
                </p>
                <p className="mb-2">
                  <strong className="text-salon-white">NIF/CIF:</strong>{" "}
                  [PENDIENTE]
                </p>
                <p className="mb-2">
                  <strong className="text-salon-white">Domicilio:</strong>{" "}
                  Calle Fuente de la Salud, 101, 41600, Arahal, Sevilla
                </p>
                <p className="mb-2">
                  <strong className="text-salon-white">Email:</strong>{" "}
                  cariccio@gmail.com
                </p>
                <p>
                  <strong className="text-salon-white">Teléfono:</strong> +34
                  628 76 43 38
                </p>
              </div>
            </section>

            {/* 2. Finalidades del Tratamiento */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-salon-white mb-4">
                2. Finalidades del Tratamiento
              </h2>
              <p className="text-salon-gray-light mb-4">
                Los datos personales que recabamos a través de esta web serán
                tratados con las siguientes finalidades:
              </p>
              <ul className="list-disc list-inside space-y-2 text-salon-gray-light ml-4">
                <li>
                  Gestión de citas y reservas (a través de plataforma externa
                  Booksy)
                </li>
                <li>Atención a consultas y solicitudes de información</li>
                <li>Envío de comunicaciones comerciales (previa aceptación)</li>
                <li>Gestión de la relación comercial</li>
                <li>Cumplimiento de obligaciones legales</li>
              </ul>
            </section>

            {/* 3. Base Legal */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-salon-white mb-4">
                3. Base Legal del Tratamiento
              </h2>
              <p className="text-salon-gray-light mb-4">
                El tratamiento de sus datos se basa en:
              </p>
              <ul className="list-disc list-inside space-y-2 text-salon-gray-light ml-4">
                <li>
                  <strong className="text-salon-white">Consentimiento:</strong>{" "}
                  Cuando usted acepta expresamente el tratamiento de sus datos
                </li>
                <li>
                  <strong className="text-salon-white">
                    Ejecución de contrato:
                  </strong>{" "}
                  Para la prestación de servicios solicitados
                </li>
                <li>
                  <strong className="text-salon-white">
                    Interés legítimo:
                  </strong>{" "}
                  Para el envío de comunicaciones comerciales de servicios
                  similares
                </li>
                <li>
                  <strong className="text-salon-white">
                    Obligación legal:
                  </strong>{" "}
                  Para cumplir con la normativa fiscal y contable
                </li>
              </ul>
            </section>

            {/* 4. Destinatarios */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-salon-white mb-4">
                4. Destinatarios de los Datos
              </h2>
              <p className="text-salon-gray-light mb-4">
                Sus datos pueden ser compartidos con:
              </p>
              <ul className="list-disc list-inside space-y-2 text-salon-gray-light ml-4">
                <li>
                  <strong className="text-salon-white">Booksy:</strong>{" "}
                  Plataforma de gestión de citas y reservas
                </li>
                <li>
                  <strong className="text-salon-white">Google Maps:</strong>{" "}
                  Para mostrar la ubicación del salón (previo consentimiento de
                  cookies)
                </li>
                <li>
                  <strong className="text-salon-white">
                    Proveedores de hosting:
                  </strong>{" "}
                  Para el alojamiento de la web
                </li>
                <li>
                  Organismos públicos cuando exista obligación legal
                </li>
              </ul>
              <p className="text-salon-gray-light mt-4">
                No se realizan transferencias internacionales de datos fuera
                del Espacio Económico Europeo, salvo las necesarias para los
                servicios mencionados que cumplen con las garantías del RGPD.
              </p>
            </section>

            {/* 5. Conservación */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-salon-white mb-4">
                5. Plazo de Conservación
              </h2>
              <p className="text-salon-gray-light">
                Los datos personales se conservarán mientras:
              </p>
              <ul className="list-disc list-inside space-y-2 text-salon-gray-light ml-4 mt-4">
                <li>Se mantenga la relación comercial</li>
                <li>
                  No solicite su supresión y existan obligaciones legales de
                  conservación
                </li>
                <li>
                  Durante los plazos legales establecidos (normativa fiscal: 6
                  años)
                </li>
              </ul>
            </section>

            {/* 6. Derechos ARCO */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-salon-white mb-4">
                6. Sus Derechos
              </h2>
              <p className="text-salon-gray-light mb-4">
                Conforme al RGPD, puede ejercer los siguientes derechos:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-salon-gray-dark/20 rounded-xl p-4">
                  <h3 className="text-salon-red font-semibold mb-2">
                    Derecho de Acceso
                  </h3>
                  <p className="text-salon-gray-light text-sm">
                    Conocer qué datos tenemos sobre usted
                  </p>
                </div>
                <div className="bg-salon-gray-dark/20 rounded-xl p-4">
                  <h3 className="text-salon-red font-semibold mb-2">
                    Derecho de Rectificación
                  </h3>
                  <p className="text-salon-gray-light text-sm">
                    Corregir datos inexactos o incompletos
                  </p>
                </div>
                <div className="bg-salon-gray-dark/20 rounded-xl p-4">
                  <h3 className="text-salon-red font-semibold mb-2">
                    Derecho de Supresión
                  </h3>
                  <p className="text-salon-gray-light text-sm">
                    Solicitar la eliminación de sus datos
                  </p>
                </div>
                <div className="bg-salon-gray-dark/20 rounded-xl p-4">
                  <h3 className="text-salon-red font-semibold mb-2">
                    Derecho de Oposición
                  </h3>
                  <p className="text-salon-gray-light text-sm">
                    Oponerse al tratamiento de sus datos
                  </p>
                </div>
                <div className="bg-salon-gray-dark/20 rounded-xl p-4">
                  <h3 className="text-salon-red font-semibold mb-2">
                    Derecho de Limitación
                  </h3>
                  <p className="text-salon-gray-light text-sm">
                    Limitar el tratamiento de sus datos
                  </p>
                </div>
                <div className="bg-salon-gray-dark/20 rounded-xl p-4">
                  <h3 className="text-salon-red font-semibold mb-2">
                    Derecho de Portabilidad
                  </h3>
                  <p className="text-salon-gray-light text-sm">
                    Recibir sus datos en formato estructurado
                  </p>
                </div>
              </div>
              <div className="bg-salon-red/10 border border-salon-red/30 rounded-xl p-6 mt-6">
                <p className="text-salon-white font-semibold mb-2">
                  ¿Cómo ejercer sus derechos?
                </p>
                <p className="text-salon-gray-light mb-2">
                  Envíe un correo a{" "}
                  <a
                    href="mailto:cariccio@gmail.com"
                    className="text-salon-red hover:underline"
                  >
                    cariccio@gmail.com
                  </a>{" "}
                  indicando:
                </p>
                <ul className="list-disc list-inside text-salon-gray-light ml-4 space-y-1">
                  <li>Nombre completo</li>
                  <li>Derecho que desea ejercer</li>
                  <li>Copia de DNI/NIE para verificar identidad</li>
                </ul>
                <p className="text-salon-gray-light mt-4 text-sm">
                  También puede presentar reclamación ante la{" "}
                  <strong className="text-salon-white">
                    Agencia Española de Protección de Datos (AEPD)
                  </strong>{" "}
                  en www.aepd.es
                </p>
              </div>
            </section>

            {/* 7. Cookies */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-salon-white mb-4">
                7. Cookies y Tecnologías Similares
              </h2>
              <p className="text-salon-gray-light mb-4">
                Este sitio web utiliza cookies propias y de terceros. Para más
                información, consulte nuestra{" "}
                <a
                  href="/cookies"
                  className="text-salon-red hover:underline font-semibold"
                >
                  Política de Cookies
                </a>
                .
              </p>
            </section>

            {/* 8. Menores */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-salon-white mb-4">
                8. Protección de Menores
              </h2>
              <p className="text-salon-gray-light">
                Los servicios de esta web están dirigidos a mayores de 14 años.
                Si es menor de 14 años, necesita el consentimiento de sus
                padres o tutores para proporcionar datos personales. Los videos
                mostrados en la galería están desenfocados para proteger la
                identidad de los menores que aparecen en ellos.
              </p>
            </section>

            {/* 9. Seguridad */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-salon-white mb-4">
                9. Medidas de Seguridad
              </h2>
              <p className="text-salon-gray-light">
                Hemos adoptado medidas técnicas y organizativas apropiadas para
                proteger sus datos personales contra acceso no autorizado,
                pérdida, destrucción o alteración. Utilizamos conexiones
                seguras (HTTPS) y cumplimos con los estándares de la industria.
              </p>
            </section>

            {/* 10. Modificaciones */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-salon-white mb-4">
                10. Modificaciones
              </h2>
              <p className="text-salon-gray-light">
                Nos reservamos el derecho a modificar esta Política de
                Privacidad. Le notificaremos cualquier cambio significativo a
                través de la web o por email. Le recomendamos revisar
                periódicamente este documento.
              </p>
            </section>

            {/* Contact */}
            <div className="bg-gradient-to-r from-salon-red/20 to-salon-red/10 border border-salon-red/30 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-salon-white mb-4">
                ¿Tienes dudas sobre tu privacidad?
              </h3>
              <p className="text-salon-gray-light mb-6">
                Contacta con nosotros para cualquier consulta sobre el
                tratamiento de tus datos
              </p>
              <a
                href="mailto:cariccio@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-salon-red text-salon-white font-semibold rounded-full hover:bg-salon-red-dark transition-all duration-300 transform hover:scale-105"
              >
                Contactar
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
