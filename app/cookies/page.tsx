import Navbar from "@/app/ui/salon/navbar";
import Footer from "@/app/ui/salon/footer";

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-salon-black">
      <Navbar />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-salon-white mb-6">
              Política de <span className="text-salon-red">Cookies</span>
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
                con la información real sobre cookies antes del despliegue en
                producción. Actualmente NO hay banner de cookies implementado.
              </p>
            </div>

            {/* 1. Qué son las cookies */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-salon-white mb-4">
                1. ¿Qué son las Cookies?
              </h2>
              <p className="text-salon-gray-light mb-4">
                Las cookies son pequeños archivos de texto que se almacenan en
                su dispositivo (ordenador, tablet o móvil) cuando visita un
                sitio web. Las cookies permiten que el sitio web recuerde sus
                acciones y preferencias durante un período de tiempo, para
                mejorar su experiencia de navegación.
              </p>
              <div className="bg-salon-gray-dark/20 rounded-xl p-6">
                <p className="text-salon-white font-semibold mb-2">
                  Información almacenada en cookies:
                </p>
                <ul className="list-disc list-inside space-y-1 text-salon-gray-light ml-4">
                  <li>Preferencias de idioma</li>
                  <li>Consentimiento de cookies</li>
                  <li>Datos de sesión</li>
                  <li>Información estadística de navegación</li>
                </ul>
              </div>
            </section>

            {/* 2. Tipos de cookies */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-salon-white mb-4">
                2. Tipos de Cookies que Utilizamos
              </h2>

              {/* Cookies Propias */}
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-salon-red mb-3">
                  Cookies Propias
                </h3>
                <div className="bg-salon-gray-dark/20 rounded-xl p-6">
                  <p className="text-salon-white font-semibold mb-2">
                    Esenciales / Técnicas
                  </p>
                  <p className="text-salon-gray-light text-sm mb-4">
                    Son necesarias para el funcionamiento básico del sitio web.
                    No requieren consentimiento previo.
                  </p>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-salon-gray-dark">
                        <th className="text-left py-2 text-salon-white">
                          Cookie
                        </th>
                        <th className="text-left py-2 text-salon-white">
                          Finalidad
                        </th>
                        <th className="text-left py-2 text-salon-white">
                          Duración
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-salon-gray-light">
                      <tr className="border-b border-salon-gray-dark/50">
                        <td className="py-2">cookie_consent</td>
                        <td className="py-2">
                          Almacena preferencias de cookies
                        </td>
                        <td className="py-2">1 año</td>
                      </tr>
                      <tr>
                        <td className="py-2">session_id</td>
                        <td className="py-2">Mantiene sesión del usuario</td>
                        <td className="py-2">Sesión</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Cookies de Terceros */}
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-salon-red mb-3">
                  Cookies de Terceros
                </h3>
                <p className="text-salon-gray-light mb-4">
                  Este sitio web utiliza servicios de terceros que pueden
                  instalar cookies:
                </p>

                {/* Google Maps */}
                <div className="bg-salon-gray-dark/20 rounded-xl p-6 mb-4">
                  <div className="flex items-start gap-3 mb-3">
                    <svg
                      className="w-6 h-6 text-salon-red flex-shrink-0 mt-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <div>
                      <p className="text-salon-white font-semibold">
                        Google Maps
                      </p>
                      <p className="text-salon-gray-light text-sm mb-2">
                        Utilizado para mostrar la ubicación del salón
                      </p>
                    </div>
                  </div>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-salon-gray-dark">
                        <th className="text-left py-2 text-salon-white">
                          Cookie
                        </th>
                        <th className="text-left py-2 text-salon-white">
                          Finalidad
                        </th>
                        <th className="text-left py-2 text-salon-white">
                          Duración
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-salon-gray-light">
                      <tr className="border-b border-salon-gray-dark/50">
                        <td className="py-2">NID</td>
                        <td className="py-2">Preferencias y análisis</td>
                        <td className="py-2">6 meses</td>
                      </tr>
                      <tr>
                        <td className="py-2">CONSENT</td>
                        <td className="py-2">Estado de consentimiento</td>
                        <td className="py-2">20 años</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-salon-gray-light text-xs mt-3">
                    Más información:{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-salon-red hover:underline"
                    >
                      Google Privacy Policy
                    </a>
                  </p>
                </div>

                {/* Booksy */}
                <div className="bg-salon-gray-dark/20 rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <svg
                      className="w-6 h-6 text-salon-red flex-shrink-0 mt-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
                    </svg>
                    <div>
                      <p className="text-salon-white font-semibold">Booksy</p>
                      <p className="text-salon-gray-light text-sm mb-2">
                        Plataforma de reservas (enlace externo)
                      </p>
                      <p className="text-salon-gray-light text-xs">
                        Al hacer clic en "Reservar Cita", será redirigido a
                        Booksy, que tiene su propia política de cookies.
                      </p>
                      <p className="text-salon-gray-light text-xs mt-2">
                        Más información:{" "}
                        <a
                          href="https://booksy.com/es-es/privacy-policy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-salon-red hover:underline"
                        >
                          Booksy Privacy Policy
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Clasificación por Finalidad */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-salon-white mb-4">
                3. Clasificación por Finalidad
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-salon-gray-dark/20 rounded-xl p-6">
                  <h3 className="text-salon-red font-semibold mb-2 flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    Cookies Técnicas
                  </h3>
                  <p className="text-salon-gray-light text-sm">
                    Esenciales para el funcionamiento del sitio. No requieren
                    consentimiento.
                  </p>
                </div>

                <div className="bg-salon-gray-dark/20 rounded-xl p-6">
                  <h3 className="text-salon-red font-semibold mb-2 flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
                    </svg>
                    Cookies de Preferencias
                  </h3>
                  <p className="text-salon-gray-light text-sm">
                    Recuerdan sus preferencias (idioma, consentimiento, etc.).
                  </p>
                </div>

                <div className="bg-salon-gray-dark/20 rounded-xl p-6">
                  <h3 className="text-salon-red font-semibold mb-2 flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                    </svg>
                    Cookies Analíticas
                  </h3>
                  <p className="text-salon-gray-light text-sm">
                    Miden y analizan el comportamiento de navegación. Requieren
                    consentimiento.
                  </p>
                </div>

                <div className="bg-salon-gray-dark/20 rounded-xl p-6">
                  <h3 className="text-salon-red font-semibold mb-2 flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                    </svg>
                    Cookies Funcionales
                  </h3>
                  <p className="text-salon-gray-light text-sm">
                    Mejoran la funcionalidad del sitio (mapas, redes sociales,
                    etc.).
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Cómo gestionar cookies */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-salon-white mb-4">
                4. Cómo Gestionar y Rechazar Cookies
              </h2>
              <p className="text-salon-gray-light mb-4">
                Puede gestionar sus preferencias de cookies de las siguientes
                formas:
              </p>

              {/* Panel de Cookies */}
              <div className="bg-salon-red/10 border border-salon-red/30 rounded-xl p-6 mb-6">
                <h3 className="text-salon-white font-semibold mb-2">
                  Panel de Configuración de Cookies
                </h3>
                <p className="text-salon-gray-light mb-4 text-sm">
                  [PENDIENTE: Implementar banner de cookies con botón de
                  configuración]
                </p>
                <button
                  disabled
                  className="px-6 py-3 bg-salon-gray-dark text-salon-gray-light rounded-full cursor-not-allowed opacity-50"
                >
                  Configurar Cookies (Próximamente)
                </button>
              </div>

              {/* Navegador */}
              <div className="bg-salon-gray-dark/20 rounded-xl p-6">
                <h3 className="text-salon-white font-semibold mb-3">
                  Desde su Navegador
                </h3>
                <p className="text-salon-gray-light mb-4 text-sm">
                  Puede bloquear o eliminar cookies desde la configuración de su
                  navegador:
                </p>
                <ul className="space-y-2 text-salon-gray-light text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-salon-red">•</span>
                    <div>
                      <strong className="text-salon-white">Chrome:</strong>{" "}
                      Configuración → Privacidad y seguridad → Cookies
                      <br />
                      <a
                        href="https://support.google.com/chrome/answer/95647"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-salon-red hover:underline text-xs"
                      >
                        Más información
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-salon-red">•</span>
                    <div>
                      <strong className="text-salon-white">Firefox:</strong>{" "}
                      Preferencias → Privacidad y seguridad
                      <br />
                      <a
                        href="https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-salon-red hover:underline text-xs"
                      >
                        Más información
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-salon-red">•</span>
                    <div>
                      <strong className="text-salon-white">Safari:</strong>{" "}
                      Preferencias → Privacidad
                      <br />
                      <a
                        href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-salon-red hover:underline text-xs"
                      >
                        Más información
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-salon-red">•</span>
                    <div>
                      <strong className="text-salon-white">Edge:</strong>{" "}
                      Configuración → Privacidad, búsqueda y servicios
                      <br />
                      <a
                        href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-salon-red hover:underline text-xs"
                      >
                        Más información
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* 5. Consecuencias */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-salon-white mb-4">
                5. Consecuencias de Desactivar Cookies
              </h2>
              <div className="bg-salon-gray-dark/20 rounded-xl p-6">
                <p className="text-salon-gray-light mb-4">
                  Si decide bloquear o rechazar cookies:
                </p>
                <ul className="list-disc list-inside space-y-2 text-salon-gray-light ml-4">
                  <li>
                    Algunas funcionalidades del sitio web pueden no estar
                    disponibles
                  </li>
                  <li>
                    Google Maps no se mostrará correctamente (requiere cookies)
                  </li>
                  <li>Sus preferencias no se guardarán entre sesiones</li>
                  <li>La experiencia de navegación puede verse afectada</li>
                </ul>
                <p className="text-salon-gray-light mt-4 text-sm">
                  Las cookies técnicas esenciales no pueden desactivarse ya que
                  son necesarias para el funcionamiento básico del sitio.
                </p>
              </div>
            </section>

            {/* 6. Actualización */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-salon-white mb-4">
                6. Actualización de la Política de Cookies
              </h2>
              <p className="text-salon-gray-light">
                Esta Política de Cookies puede ser modificada en cualquier
                momento para adaptarse a cambios normativos o en los servicios
                ofrecidos. Le recomendamos revisar esta página periódicamente.
              </p>
            </section>

            {/* 7. Más información */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-salon-white mb-4">
                7. Más Información
              </h2>
              <p className="text-salon-gray-light mb-4">
                Para más información sobre el tratamiento de sus datos
                personales, consulte:
              </p>
              <div className="flex gap-4">
                <a
                  href="/privacy"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-salon-gray-dark/50 text-salon-white rounded-full hover:bg-salon-gray-dark transition-colors"
                >
                  Política de Privacidad
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
                <a
                  href="/legal"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-salon-gray-dark/50 text-salon-white rounded-full hover:bg-salon-gray-dark transition-colors"
                >
                  Aviso Legal
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </section>

            {/* Contact CTA */}
            <div className="bg-gradient-to-r from-salon-red/20 to-salon-red/10 border border-salon-red/30 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-salon-white mb-4">
                ¿Dudas sobre Cookies?
              </h3>
              <p className="text-salon-gray-light mb-6">
                Contacta con nosotros para resolver cualquier consulta
              </p>
              <a
                href="mailto:barberíasvq@gmail.com"
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
