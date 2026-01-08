import Navbar from "@/app/ui/salon/navbar";
import Footer from "@/app/ui/salon/footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-salon-black">
      <Navbar />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-salon-white mb-6">
              Términos y <span className="text-salon-red">Condiciones</span>
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
                con los términos reales del servicio antes del despliegue en
                producción.
              </p>
            </div>

            {/* Introducción */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-salon-white mb-4">
                Introducción
              </h2>
              <p className="text-salon-gray-light mb-4">
                Bienvenido a Cariccio Hair Salon. Estos Términos y Condiciones
                regulan el acceso y uso de nuestro sitio web y los servicios de
                peluquería y barbería que ofrecemos.
              </p>
              <p className="text-salon-gray-light">
                Al acceder o utilizar nuestro sitio web y servicios, usted
                acepta estar sujeto a estos términos. Si no está de acuerdo con
                alguna parte de estos términos, no debe utilizar nuestros
                servicios.
              </p>
            </section>

            {/* 1. Servicios */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-salon-white mb-4">
                1. Servicios Ofrecidos
              </h2>
              <p className="text-salon-gray-light mb-4">
                Cariccio Hair Salon ofrece los siguientes servicios:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-salon-gray-dark/20 rounded-xl p-4">
                  <h3 className="text-salon-red font-semibold mb-2">
                    Cortes de Pelo
                  </h3>
                  <p className="text-salon-gray-light text-sm">
                    Cortes personalizados según tu tipo de rostro y estilo
                  </p>
                </div>
                <div className="bg-salon-gray-dark/20 rounded-xl p-4">
                  <h3 className="text-salon-red font-semibold mb-2">
                    Barbería
                  </h3>
                  <p className="text-salon-gray-light text-sm">
                    Afeitado, arreglo de barba y tratamientos faciales
                  </p>
                </div>
                <div className="bg-salon-gray-dark/20 rounded-xl p-4">
                  <h3 className="text-salon-red font-semibold mb-2">
                    Peinados
                  </h3>
                  <p className="text-salon-gray-light text-sm">
                    Peinados para eventos especiales y ocasiones
                  </p>
                </div>
                <div className="bg-salon-gray-dark/20 rounded-xl p-4">
                  <h3 className="text-salon-red font-semibold mb-2">
                    Asesoramiento
                  </h3>
                  <p className="text-salon-gray-light text-sm">
                    Consultoría sobre el mejor corte según tu rostro
                  </p>
                </div>
              </div>
              <p className="text-salon-gray-light text-sm">
                Los servicios específicos, precios y disponibilidad pueden
                variar. Consulte con nosotros para obtener información
                actualizada.
              </p>
            </section>

            {/* 2. Reservas y Citas */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-salon-white mb-4">
                2. Reservas y Citas
              </h2>
              
              <div className="bg-salon-gray-dark/20 rounded-xl p-6 mb-6">
                <h3 className="text-salon-white font-semibold mb-3">
                  Sistema de Reservas
                </h3>
                <p className="text-salon-gray-light mb-4 text-sm">
                  Las citas se gestionan a través de la plataforma externa{" "}
                  <strong className="text-salon-white">Booksy</strong>. Al
                  realizar una reserva, acepta también los términos y
                  condiciones de Booksy.
                </p>
                <a
                  href="https://booksy.com/es-es/15534_cariccio-hair-salon_barberia_30001_las-monjas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-salon-red text-salon-white rounded-full hover:bg-salon-red-dark transition-colors text-sm font-semibold"
                >
                  Reservar en Booksy
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
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>

              <h3 className="text-salon-white font-semibold mb-3">
                Condiciones de las Citas
              </h3>
              <ul className="list-disc list-inside space-y-2 text-salon-gray-light ml-4">
                <li>
                  <strong className="text-salon-white">Confirmación:</strong>{" "}
                  Las citas deben ser confirmadas a través de Booksy
                </li>
                <li>
                  <strong className="text-salon-white">Puntualidad:</strong> Le
                  pedimos que llegue puntual a su cita. Un retraso de más de 15
                  minutos puede resultar en la cancelación
                </li>
                <li>
                  <strong className="text-salon-white">
                    Cancelaciones:
                  </strong>{" "}
                  Debe cancelar con al menos 24 horas de antelación
                </li>
                <li>
                  <strong className="text-salon-white">
                    No presentarse (No-show):
                  </strong>{" "}
                  Reservamos el derecho de solicitar un depósito para futuras
                  citas si no se presenta sin previo aviso
                </li>
              </ul>
            </section>

            {/* 3. Precios y Pagos */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-salon-white mb-4">
                3. Precios y Formas de Pago
              </h2>
              
              <div className="bg-salon-gray-dark/20 rounded-xl p-6 mb-4">
                <h3 className="text-salon-white font-semibold mb-3">Precios</h3>
                <ul className="list-disc list-inside space-y-2 text-salon-gray-light ml-4 text-sm">
                  <li>
                    Los precios están sujetos a cambios sin previo aviso
                  </li>
                  <li>
                    Los precios pueden variar según la complejidad del servicio
                  </li>
                  <li>Incluyen IVA según la legislación vigente</li>
                  <li>
                    Los precios específicos se confirmarán en el momento de la
                    reserva
                  </li>
                </ul>
              </div>

              <div className="bg-salon-gray-dark/20 rounded-xl p-6">
                <h3 className="text-salon-white font-semibold mb-3">
                  Formas de Pago Aceptadas
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-salon-gray-light text-sm">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-salon-red"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    Efectivo
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-salon-red"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    Tarjeta
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-salon-red"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    Bizum
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-salon-red"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    Transferencia
                  </div>
                </div>
                <p className="text-salon-gray-light text-xs mt-4">
                  * Confirme las formas de pago disponibles al momento de su
                  cita
                </p>
              </div>
            </section>

            {/* 4. Política de Cancelación */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-salon-white mb-4">
                4. Política de Cancelación y Reembolsos
              </h2>
              
              <div className="bg-salon-red/10 border border-salon-red/30 rounded-xl p-6 mb-4">
                <h3 className="text-salon-white font-semibold mb-3">
                  Cancelaciones por el Cliente
                </h3>
                <ul className="list-disc list-inside space-y-2 text-salon-gray-light ml-4 text-sm">
                  <li>
                    <strong className="text-salon-white">
                      Más de 24 horas:
                    </strong>{" "}
                    Cancelación gratuita sin penalización
                  </li>
                  <li>
                    <strong className="text-salon-white">
                      Menos de 24 horas:
                    </strong>{" "}
                    Puede aplicarse una penalización o requerirse depósito para
                    futuras citas
                  </li>
                  <li>
                    <strong className="text-salon-white">No-show:</strong> Se
                    puede solicitar un depósito del 50% para futuras reservas
                  </li>
                </ul>
              </div>

              <div className="bg-salon-gray-dark/20 rounded-xl p-6">
                <h3 className="text-salon-white font-semibold mb-3">
                  Cancelaciones por el Salón
                </h3>
                <p className="text-salon-gray-light text-sm mb-3">
                  En casos excepcionales (enfermedad, emergencia,
                  climatología), podemos necesitar cancelar su cita. En estos
                  casos:
                </p>
                <ul className="list-disc list-inside space-y-2 text-salon-gray-light ml-4 text-sm">
                  <li>Le notificaremos con la mayor antelación posible</li>
                  <li>Ofreceremos reagendar en la primera fecha disponible</li>
                  <li>
                    Se reembolsará cualquier depósito o pago anticipado
                    realizado
                  </li>
                </ul>
              </div>
            </section>

            {/* 5. Responsabilidades */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-salon-white mb-4">
                5. Responsabilidades y Limitaciones
              </h2>
              
              <div className="space-y-4">
                <div className="bg-salon-gray-dark/20 rounded-xl p-6">
                  <h3 className="text-salon-white font-semibold mb-2">
                    Responsabilidad del Cliente
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-salon-gray-light ml-4 text-sm">
                    <li>
                      Informar sobre alergias, sensibilidades o condiciones
                      médicas
                    </li>
                    <li>Proporcionar información veraz sobre tratamientos previos</li>
                    <li>Seguir las recomendaciones del profesional</li>
                    <li>Llegar puntual a las citas programadas</li>
                  </ul>
                </div>

                <div className="bg-salon-gray-dark/20 rounded-xl p-6">
                  <h3 className="text-salon-white font-semibold mb-2">
                    Responsabilidad del Salón
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-salon-gray-light ml-4 text-sm">
                    <li>Proporcionar servicios profesionales de calidad</li>
                    <li>Utilizar productos de alta calidad</li>
                    <li>Mantener estándares de higiene y seguridad</li>
                    <li>
                      Asesorar profesionalmente sobre el mejor servicio para
                      cada cliente
                    </li>
                  </ul>
                </div>

                <div className="bg-salon-gray-dark/20 rounded-xl p-6">
                  <h3 className="text-salon-white font-semibold mb-2">
                    Limitaciones de Responsabilidad
                  </h3>
                  <p className="text-salon-gray-light text-sm mb-2">
                    No nos hacemos responsables de:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-salon-gray-light ml-4 text-sm">
                    <li>
                      Reacciones alérgicas no comunicadas previamente
                    </li>
                    <li>
                      Resultados no deseados por información incorrecta del
                      cliente
                    </li>
                    <li>
                      Daños a objetos personales dejados en el establecimiento
                    </li>
                    <li>
                      Citas perdidas por información incorrecta proporcionada
                      por el cliente
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 6. Menores */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-salon-white mb-4">
                6. Servicios a Menores de Edad
              </h2>
              <div className="bg-salon-gray-dark/20 rounded-xl p-6">
                <p className="text-salon-gray-light mb-4 text-sm">
                  Los menores de 14 años deben estar acompañados por un adulto
                  responsable durante todo el servicio.
                </p>
                <p className="text-salon-gray-light text-sm">
                  Los servicios a menores de 18 años requieren consentimiento
                  parental o del tutor legal, especialmente para tratamientos
                  que impliquen cambios significativos.
                </p>
              </div>
            </section>

            {/* 7. Propiedad Intelectual */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-salon-white mb-4">
                7. Uso de Imágenes y Contenido
              </h2>
              <div className="bg-salon-gray-dark/20 rounded-xl p-6">
                <p className="text-salon-gray-light mb-4 text-sm">
                  Podemos solicitar permiso para tomar fotografías del resultado
                  final para uso en nuestro portfolio, redes sociales o sitio
                  web.
                </p>
                <p className="text-salon-gray-light mb-4 text-sm">
                  Su consentimiento es completamente voluntario y puede ser
                  retirado en cualquier momento. Las imágenes de menores siempre
                  se mostrarán con desenfoque para proteger su identidad.
                </p>
                <p className="text-salon-gray-light text-sm">
                  Todos los contenidos del sitio web (textos, imágenes, videos,
                  diseño) son propiedad de Cariccio Hair Salon y están
                  protegidos por derechos de autor.
                </p>
              </div>
            </section>

            {/* 8. Privacidad */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-salon-white mb-4">
                8. Protección de Datos Personales
              </h2>
              <p className="text-salon-gray-light mb-4">
                El tratamiento de sus datos personales se realiza conforme al
                RGPD y legislación aplicable. Para más información, consulte
                nuestra{" "}
                <a
                  href="/privacy"
                  className="text-salon-red hover:underline font-semibold"
                >
                  Política de Privacidad
                </a>
                .
              </p>
            </section>

            {/* 9. Modificaciones */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-salon-white mb-4">
                9. Modificaciones de los Términos
              </h2>
              <p className="text-salon-gray-light">
                Nos reservamos el derecho de modificar estos Términos y
                Condiciones en cualquier momento. Las modificaciones entrarán en
                vigor desde su publicación en el sitio web. Le recomendamos
                revisar periódicamente estos términos.
              </p>
            </section>

            {/* 10. Legislación */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-salon-white mb-4">
                10. Legislación Aplicable y Jurisdicción
              </h2>
              <p className="text-salon-gray-light mb-4">
                Estos Términos y Condiciones se rigen por la legislación
                española vigente.
              </p>
              <p className="text-salon-gray-light">
                Para la resolución de cualquier controversia, las partes se
                someten a los Juzgados y Tribunales de Sevilla, España.
              </p>
            </section>

            {/* 11. Contacto */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-salon-white mb-4">
                11. Contacto
              </h2>
              <p className="text-salon-gray-light mb-4">
                Para cualquier consulta sobre estos Términos y Condiciones,
                puede contactarnos:
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
                <p className="text-salon-gray-light mb-2">
                  <strong className="text-salon-white">WhatsApp:</strong>{" "}
                  <a
                    href="https://wa.me/34628764338"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-salon-red hover:underline"
                  >
                    +34 628 76 43 38
                  </a>
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
                ¿Listo para tu Transformación?
              </h3>
              <p className="text-salon-gray-light mb-6">
                Reserva tu cita ahora y descubre el mejor corte para ti
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://booksy.com/es-es/15534_cariccio-hair-salon_barberia_30001_las-monjas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-salon-red text-salon-white font-semibold rounded-full hover:bg-salon-red-dark transition-all duration-300 transform hover:scale-105"
                >
                  Reservar Cita
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
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </a>
                <a
                  href="mailto:cariccio@gmail.com"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-salon-gray-dark text-salon-white font-semibold rounded-full hover:bg-salon-gray-dark/80 transition-all duration-300"
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
      </div>

      <Footer />
    </main>
  );
}
