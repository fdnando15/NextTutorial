import Navbar from "@/app/ui/salon/navbar";
import Footer from "@/app/ui/salon/footer";
import Image from "next/image";
import { MapPinIcon, PhoneIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-salon-black">
      <Navbar />

      {/* Fixed WhatsApp Button */}
      <a
        href="https://wa.me/34628764338"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 group"
        aria-label="Contáctanos por WhatsApp"
      >
        <svg
          className="w-8 h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-salon-black-light text-white text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Contacta con nosotros
        </span>
      </a>

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          {/*<div className="text-center mb-16 animate-fadeIn">
            <h1 className="text-5xl md:text-6xl font-bold text-salon-white mb-6">
              Visita <span className="text-salon-red">Nuestro Salón</span>
            </h1>
            <p className="text-xl md:text-2xl text-salon-gray-light max-w-3xl mx-auto leading-relaxed">
              Más que un corte, una experiencia de cuidado personalizada.
              Descubre nuestra atmósfera profesional y pasión por el estilo.
            </p>
          </div>*/}

          {/* Gallery Section - About Us Visual */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-salon-white mb-8 text-center">
              Nuestro <span className="text-salon-red">Espacio</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="relative h-96 rounded-lg overflow-hidden group">
                <Image
                  src="/salon1.jpeg"
                  alt="Interior del Salón - Estaciones profesionales de barbería"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                {/*<div className="absolute inset-0 bg-gradient-to-t from-salon-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 text-salon-white">
                    <p className="text-lg font-semibold">
                      Estaciones Profesionales
                    </p>
                  </div>
                </div>*/}
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden group">
                <Image
                  src="/salon2.jpeg"
                  alt="Interior del Salón - Ambiente moderno y acogedor"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                {/*<div className="absolute inset-0 bg-gradient-to-t from-salon-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 text-salon-white">
                    <p className="text-lg font-semibold">Ambiente Moderno</p>
                  </div>
                </div>*/}
              </div>
            </div>
            <div className="text-center">
              <p className="text-lg text-salon-gray-light max-w-2xl mx-auto">
                Entra en un espacio donde la tradición se encuentra con el
                estilo moderno. Nuestro salón cuidadosamente diseñado
                proporciona el ambiente perfecto para tu experiencia de cuidado
                personal.
              </p>
            </div>
          </section>

          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Contact Details */}
            <div className="space-y-8">
              {/* Primary CTA - Book Appointment */}
              {/*<div className="bg-salon-black-light rounded-xl p-8 border border-salon-gray/20">
                <h3 className="text-2xl font-bold text-salon-white mb-4">
                  ¿Listo para Tu{" "}
                  <span className="text-salon-red">Nuevo Look?</span>
                </h3>
                <p className="text-salon-gray-light mb-6">
                  Reserva tu cita al instante vía WhatsApp y asegura tu espacio
                  con nuestros barberos expertos.
                </p>
                <a
                  href="https://wa.me/34628764338?text=Hola!%20Me%20gustar%C3%ADa%20reservar%20una%20cita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-salon-red hover:bg-salon-red-dark text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 text-center text-lg shadow-lg hover:shadow-salon-red/50 hover:scale-105"
                >
                  <span className="flex items-center justify-center gap-3">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Reserva Tu Cita
                  </span>
                </a>
              </div>*/}

              {/* Phone Contact */}
              <div className="bg-salon-black-light rounded-xl p-6 border border-salon-gray/20">
                <div className="flex items-start gap-4">
                  <div className="bg-salon-red/10 p-3 rounded-lg">
                    <PhoneIcon className="w-6 h-6 text-salon-red" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-salon-white mb-2">
                      Llámanos
                    </h4>
                    <a
                      href="tel:+34628764338"
                      className="text-salon-gray-light hover:text-salon-red transition-colors duration-300 text-lg"
                    >
                      +34 628 76 43 38
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Contact */}
              <div className="bg-salon-black-light rounded-xl p-6 border border-salon-gray/20">
                <div className="flex items-start gap-4">
                  <div className="bg-salon-red/10 p-3 rounded-lg">
                    <svg
                      className="w-6 h-6 text-salon-red"
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
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-salon-white mb-2">
                      Email
                    </h4>
                    <a
                      href="mailto:cariccio@gmail.com"
                      className="text-salon-gray-light hover:text-salon-red transition-colors duration-300 text-lg break-all"
                    >
                      cariccio@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="bg-salon-black-light rounded-xl p-6 border border-salon-gray/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-salon-red/10 p-3 rounded-lg">
                    <ClockIcon className="w-6 h-6 text-salon-red" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-salon-white mb-4">
                      Horario de Apertura
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-salon-gray-light">
                          Lunes - Viernes
                        </span>
                        <span className="text-salon-white font-medium">
                          9:00 - 20:00
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-salon-gray-light">Sábado</span>
                        <span className="text-salon-white font-medium">
                          10:00 - 18:00
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-salon-gray-light">Domingo</span>
                        <span className="text-salon-white font-medium">
                          Cerrado
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-salon-black-light rounded-xl p-6 border border-salon-gray/20">
                <h4 className="text-lg font-semibold text-salon-white mb-4">
                  Síguenos
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/cariccio_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-salon-red/10 hover:bg-salon-red p-4 rounded-lg transition-all duration-300 group"
                    aria-label="Síguenos en Instagram"
                  >
                    <svg
                      className="w-6 h-6 text-salon-red group-hover:text-white transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.tiktok.com/@cariccio_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-salon-red/10 hover:bg-salon-red p-4 rounded-lg transition-all duration-300 group"
                    aria-label="Síguenos en TikTok"
                  >
                    <svg
                      className="w-6 h-6 text-salon-red group-hover:text-white transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Map & Location */}
            <div className="space-y-6">
              {/* Address */}
              <div className="bg-salon-black-light rounded-xl p-6 border border-salon-gray/20">
                <div className="flex items-start gap-4">
                  <div className="bg-salon-red/10 p-3 rounded-lg">
                    <MapPinIcon className="w-6 h-6 text-salon-red" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-salon-white mb-2">
                      Nuestra Ubicación
                    </h4>
                    <p className="text-salon-gray-light text-lg leading-relaxed">
                      Calle Fuente de la Salud, 101
                      <br />
                      41600, Arahal
                      <br />
                      Sevilla, España
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Alternative - No Google Maps (Privacy) */}
              <div className="bg-salon-black-light rounded-xl overflow-hidden border border-salon-gray/20">
                <div className="relative w-full h-96 bg-salon-gray-dark/30 flex items-center justify-center">
                  <div className="text-center px-6">
                    <MapPinIcon className="w-16 h-16 text-salon-red mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-salon-white mb-2">
                      Encuéntranos en Arahal, Sevilla
                    </h4>
                    <p className="text-salon-gray-light mb-6">
                      Calle Fuente de la Salud, 101
                      <br />
                      41600, Arahal, Sevilla
                    </p>
                    <div className="inline-block px-4 py-2 bg-salon-red/10 rounded-lg">
                      <p className="text-salon-gray-light text-sm">
                        🔒 Mapa desactivado por privacidad (versión desarrollo)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <a
                    href="https://www.google.com/maps/dir//37.2615075,-5.5515031/@37.3753708,-5.9550582,9z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full bg-salon-white hover:bg-salon-red text-salon-black hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                  >
                    Abrir en Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Building Section */}
          {/*<div className="bg-salon-black-light rounded-xl p-8 md:p-12 border border-salon-gray/20 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-salon-white mb-4">
              ¿Por Qué <span className="text-salon-red">Elegirnos?</span>
            </h3>
            <p className="text-lg text-salon-gray-light max-w-3xl mx-auto leading-relaxed">
              Combinamos años de experiencia con pasión por el oficio. Cada
              cliente recibe atención personalizada en nuestro espacio moderno y
              profesional. Tu estilo, tu confianza, nuestro compromiso.
            </p>
          </div>*/}
        </div>
      </div>

      <Footer />
    </main>
  );
}
