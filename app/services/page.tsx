import Navbar from "@/app/ui/salon/navbar";
import Footer from "@/app/ui/salon/footer";
import Link from "next/link";

interface Service {
  name: string;
  price: string;
  duration: string;
  description: string;
}

interface Extra {
  name: string;
  price: string;
}

const services: Service[] = [
  {
    name: "Corte Tijeras",
    price: "16€",
    duration: "30 min",
    description:
      "Enfocado a clientes con pelo medio/largo. Se trabajará a través de secciones con lavado previo.",
  },
  {
    name: "Corte + Barba",
    price: "16€",
    duration: "30 min",
    description: "Servicio completo de corte y arreglo de barba.",
  },
  {
    name: "Corte Cariccio",
    price: "16€",
    duration: "30 min",
    description:
      "Corte + styling natural y asesoramiento sobre peinado y cuidado capilar.",
  },
  {
    name: "Only Fade Jesús",
    price: "10€",
    duration: "15 min",
    description:
      "Solo degradado. Para clientes que asisten antes de 14 días. No incluye corte superior.",
  },
];

const extras: Extra[] = [
  {
    name: "Cejas con navaja",
    price: "1,00 €",
  },
  {
    name: "Lavado final",
    price: "2,00 €",
  },
  {
    name: "Perfilado de barba (solo pómulos)",
    price: "1,00 €",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-salon-black">
      <Navbar />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-salon-white mb-6">
              Nuestros <span className="text-salon-red">Servicios</span>
            </h1>
            <p className="text-xl text-salon-gray-light max-w-3xl mx-auto">
              Servicios profesionales de barbería con atención personalizada
            </p>
          </div>

          {/* Main Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
            {services.map((service) => (
              <div
                key={service.name}
                className="group relative bg-salon-gray-dark rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-salon-red/30"
              >
                {/* Red Border on Hover */}
                <div className="absolute inset-0 border-4 border-salon-red rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />

                {/* Corner Decorations */}
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="w-8 h-8 border-t-2 border-l-2 border-salon-red rounded-tl-lg" />
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="w-8 h-8 border-t-2 border-r-2 border-salon-red rounded-tr-lg" />
                </div>

                {/* Content */}
                <div className="relative p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h2 className="text-2xl font-bold text-salon-white">
                      {service.name}
                    </h2>
                    <span className="text-2xl font-bold text-salon-red">
                      {service.price}
                    </span>
                  </div>
                  <div className="mb-4">
                    <span className="inline-block bg-salon-gray text-salon-gray-light px-3 py-1 rounded-full text-sm font-medium">
                      {service.duration}
                    </span>
                  </div>
                  <p className="text-salon-gray-light leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Decorative Line */}
                  <div className="h-1 w-12 bg-salon-red rounded-full transition-all duration-300 group-hover:w-20" />
                </div>
              </div>
            ))}
          </div>

          {/* Extras Section */}
          <div className="bg-salon-gray-dark rounded-lg shadow-lg p-8 mb-12 border border-salon-gray">
            <h2 className="text-3xl font-bold text-salon-white mb-6">Extras</h2>
            <ul className="space-y-4">
              {extras.map((extra) => (
                <li
                  key={extra.name}
                  className="flex justify-between items-center py-3 border-b border-salon-gray last:border-b-0"
                >
                  <span className="text-salon-gray-light text-lg">
                    {extra.name}
                  </span>
                  <span className="text-salon-white font-semibold text-lg">
                    {extra.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link
              href="https://booksy.com/es-es/15534_cariccio-hair-salon_barberia_30001_las-monjas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-salon-red text-white px-12 py-4 rounded-lg text-xl font-bold hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Reservar Cita en Booksy
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
