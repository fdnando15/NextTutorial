import Navbar from "@/app/ui/salon/navbar";
import Footer from "@/app/ui/salon/footer";

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-salon-black">
      <Navbar />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-salon-white mb-6">
              Aviso <span className="text-salon-red">Legal</span>
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
                con la información legal real del negocio antes del despliegue
                en producción.
              </p>
            </div>

            {/* 1. Datos Identificativos */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-salon-white mb-4">
                1. Datos Identificativos del Titular
              </h2>
              <div className="bg-salon-gray-dark/20 rounded-xl p-6 text-salon-gray-light">
                <p className="mb-2">
                  En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de
                  julio, de Servicios de la Sociedad de la Información y
                  Comercio Electrónico (LSSI), se informa:
                </p>
                <div className="mt-4 space-y-2">
                  <p>
                    <strong className="text-salon-white">
                      Denominación social:
                    </strong>{" "}
                    [NOMBRE COMPLETO DEL TITULAR/EMPRESA]
                  </p>
                  <p>
                    <strong className="text-salon-white">NIF/CIF:</strong>{" "}
                    [PENDIENTE - Completar con NIF/CIF real]
                  </p>
                  <p>
                    <strong className="text-salon-white">
                      Domicilio social:
                    </strong>{" "}
                    Calle Fuente de la Salud, 101, 41600, Arahal, Sevilla,
                    España
                  </p>
                  <p>
                    <strong className="text-salon-white">
                      Email de contacto:
                    </strong>{" "}
                    <a
                      href="mailto:cariccio@gmail.com"
                      className="text-salon-red hover:underline"
                    >
                      cariccio@gmail.com
                    </a>
                  </p>
                  <p>
                    <strong className="text-salon-white">Teléfono:</strong> +34
                    628 76 43 38
                  </p>
                  <p>
                    <strong className="text-salon-white">
                      Datos registrales:
                    </strong>{" "}
                    [PENDIENTE - Si aplicable: Registro Mercantil, Tomo, Libro,
                    Folio, Sección, Hoja, Inscripción]
                  </p>
                  <p>
                    <strong className="text-salon-white">
                      Actividad económica:
                    </strong>{" "}
                    Servicios de peluquería y barbería
                  </p>
                </div>
              </div>
            </section>

            {/* 2. Objeto */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-salon-white mb-4">
                2. Objeto
              </h2>
              <p className="text-salon-gray-light mb-4">
                El presente aviso legal regula el uso y utilización del sitio
                web{" "}
                <strong className="text-salon-white">
                  [www.dominio.com]
                </strong>{" "}
                (en adelante, "el sitio web"), del que es titular{" "}
                <strong className="text-salon-white">
                  [NOMBRE DEL TITULAR]
                </strong>
                .
              </p>
              <p className="text-salon-gray-light">
                El acceso y navegación por el sitio web, o el uso de los
                servicios del mismo, implican la aceptación expresa y sin
                reservas de todas las cláusulas del presente Aviso Legal.
              </p>
            </section>

            {/* 3. Condiciones de Uso */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-salon-white mb-4">
                3. Condiciones de Uso
              </h2>
              <p className="text-salon-gray-light mb-4">
                El usuario se compromete a utilizar el sitio web, sus
                contenidos y servicios de conformidad con:
              </p>
              <ul className="list-disc list-inside space-y-2 text-salon-gray-light ml-4">
                <li>La legislación vigente</li>
                <li>El presente Aviso Legal</li>
                <li>
                  La moral, buenas costumbres y orden público generalmente
                  aceptados
                </li>
              </ul>
              <p className="text-salon-gray-light mt-4">
                El usuario se obliga a no utilizar el sitio web para:
              </p>
              <ul className="list-disc list-inside space-y-2 text-salon-gray-light ml-4 mt-2">
                <li>
                  Realizar actividades ilícitas, ilegales o contrarias a la
                  buena fe
                </li>
                <li>
                  Difundir contenidos o propaganda de carácter racista,
                  xenófobo, pornográfico, de apología del terrorismo o que
                  atenten contra los derechos humanos
                </li>
                <li>
                  Provocar daños en los sistemas físicos y lógicos del sitio
                  web, de sus proveedores o de terceros
                </li>
                <li>
                  Introducir o difundir virus informáticos o cualquier otro
                  sistema que pueda causar daños
                </li>
              </ul>
            </section>

            {/* 4. Propiedad Intelectual e Industrial */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-salon-white mb-4">
                4. Propiedad Intelectual e Industrial
              </h2>
              <p className="text-salon-gray-light mb-4">
                Todos los contenidos del sitio web, incluyendo sin carácter
                limitativo, textos, fotografías, gráficos, imágenes, iconos,
                tecnología, software, links y demás contenidos audiovisuales o
                sonoros, así como su diseño gráfico y códigos fuente, son
                propiedad de{" "}
                <strong className="text-salon-white">
                  [NOMBRE DEL TITULAR]
                </strong>{" "}
                o de terceros, sin que puedan entenderse cedidos al usuario
                ninguno de los derechos de explotación reconocidos por la
                normativa vigente en materia de propiedad intelectual.
              </p>
              <div className="bg-salon-red/10 border border-salon-red/30 rounded-xl p-6">
                <p className="text-salon-white font-semibold mb-2">
                  Uso de Contenidos
                </p>
                <p className="text-salon-gray-light">
                  Queda expresamente prohibida la reproducción total o parcial
                  de los contenidos del sitio web, su tratamiento informático,
                  distribución, difusión, modificación, transformación,
                  descompilación, y en general cualquier otra forma de
                  explotación, por cualquier procedimiento, de todo o parte del
                  contenido del sitio web sin el consentimiento expreso y por
                  escrito del titular.
                </p>
              </div>
            </section>

            {/* 5. Exclusión de Responsabilidad */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-salon-white mb-4">
                5. Exclusión de Responsabilidad
              </h2>
              <p className="text-salon-gray-light mb-4">
                El titular se reserva el derecho a modificar, suspender o
                cancelar los contenidos del sitio web en cualquier momento sin
                previo aviso.
              </p>
              <div className="space-y-4">
                <div className="bg-salon-gray-dark/20 rounded-xl p-4">
                  <h3 className="text-salon-white font-semibold mb-2">
                    Contenidos
                  </h3>
                  <p className="text-salon-gray-light text-sm">
                    El titular no se hace responsable de la veracidad,
                    integridad y actualización de las informaciones no
                    elaboradas por él, ni de las que procedan de fuentes
                    externas.
                  </p>
                </div>
                <div className="bg-salon-gray-dark/20 rounded-xl p-4">
                  <h3 className="text-salon-white font-semibold mb-2">
                    Disponibilidad
                  </h3>
                  <p className="text-salon-gray-light text-sm">
                    El titular no garantiza la disponibilidad y continuidad del
                    funcionamiento del sitio web. No obstante, se realizarán
                    los mayores esfuerzos para asegurar su correcto
                    funcionamiento.
                  </p>
                </div>
                <div className="bg-salon-gray-dark/20 rounded-xl p-4">
                  <h3 className="text-salon-white font-semibold mb-2">
                    Enlaces Externos
                  </h3>
                  <p className="text-salon-gray-light text-sm">
                    Este sitio web puede contener enlaces a sitios de terceros
                    (Booksy, Instagram, TikTok, Google Maps). El titular no se
                    responsabiliza del contenido de dichos sitios ni de sus
                    políticas de privacidad.
                  </p>
                </div>
                <div className="bg-salon-gray-dark/20 rounded-xl p-4">
                  <h3 className="text-salon-white font-semibold mb-2">
                    Virus y Seguridad
                  </h3>
                  <p className="text-salon-gray-light text-sm">
                    El titular no se hace responsable de los daños producidos
                    en equipos informáticos durante el acceso al sitio web,
                    aunque se adoptan todas las medidas técnicas necesarias para
                    evitar la presencia de virus y elementos dañinos.
                  </p>
                </div>
              </div>
            </section>

            {/* 6. Protección de Datos */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-salon-white mb-4">
                6. Protección de Datos Personales
              </h2>
              <p className="text-salon-gray-light mb-4">
                Para más información sobre el tratamiento de datos personales,
                consulte nuestra{" "}
                <a
                  href="/privacy"
                  className="text-salon-red hover:underline font-semibold"
                >
                  Política de Privacidad
                </a>
                , donde se informa detalladamente sobre los derechos y
                obligaciones conforme al Reglamento General de Protección de
                Datos (RGPD).
              </p>
            </section>

            {/* 7. Cookies */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-salon-white mb-4">
                7. Política de Cookies
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

            {/* 8. Legislación Aplicable */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-salon-white mb-4">
                8. Legislación Aplicable y Jurisdicción
              </h2>
              <p className="text-salon-gray-light mb-4">
                Las presentes Condiciones Generales se rigen por la legislación
                española vigente.
              </p>
              <p className="text-salon-gray-light">
                Para la resolución de cualquier controversia o conflicto que
                pudiera derivarse del acceso, navegación o uso del sitio web,
                el titular y el usuario acuerdan someterse expresamente a la
                jurisdicción y competencia de los Juzgados y Tribunales de{" "}
                <strong className="text-salon-white">
                  [CIUDAD - Sevilla]
                </strong>
                , con renuncia expresa a cualquier otro fuero que pudiera
                corresponderles.
              </p>
            </section>

            {/* 9. Modificaciones */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-salon-white mb-4">
                9. Modificaciones del Aviso Legal
              </h2>
              <p className="text-salon-gray-light">
                El titular se reserva el derecho a modificar el presente Aviso
                Legal en cualquier momento. Los usuarios deben revisar
                periódicamente este documento, ya que el uso del sitio web tras
                cualquier modificación implica la aceptación de los nuevos
                términos.
              </p>
            </section>

            {/* 10. Contacto */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-salon-white mb-4">
                10. Contacto
              </h2>
              <p className="text-salon-gray-light mb-4">
                Para cualquier consulta sobre el presente Aviso Legal, puede
                contactarnos en:
              </p>
              <div className="bg-salon-gray-dark/20 rounded-xl p-6">
                <p className="text-salon-gray-light mb-2">
                  <strong className="text-salon-white">Email:</strong>{" "}
                  <a
                    href="mailto:cariccio@gmail.com"
                    className="text-salon-red hover:underline"
                  >
                    cariccio@gmail.com
                  </a>
                </p>
                <p className="text-salon-gray-light mb-2">
                  <strong className="text-salon-white">Teléfono:</strong> +34
                  628 76 43 38
                </p>
                <p className="text-salon-gray-light">
                  <strong className="text-salon-white">Dirección:</strong>{" "}
                  Calle Fuente de la Salud, 101, 41600, Arahal, Sevilla
                </p>
              </div>
            </section>

            {/* Contact CTA */}
            <div className="bg-gradient-to-r from-salon-red/20 to-salon-red/10 border border-salon-red/30 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-salon-white mb-4">
                ¿Dudas sobre nuestro Aviso Legal?
              </h3>
              <p className="text-salon-gray-light mb-6">
                Estamos a tu disposición para resolver cualquier consulta legal
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
