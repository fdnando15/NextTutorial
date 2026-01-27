import Navbar from "@/app/ui/salon/navbar";
import Footer from "@/app/ui/salon/footer";
import VideoCard from "@/app/ui/salon/video-card";

const videos = [
  { src: "/video1.mp4", title: "CORTE RICHARD RÍOS" },
  { src: "/video2.mp4", title: "CORTE FRANCÉS" },
  { src: "/video3.mp4", title: "CORTE PARA NIÑO" },
  { src: "/video4.mp4", title: "TRANSFORMACIÓN TOTAL" },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-salon-black">
      <Navbar />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-salon-white mb-6">
              Nuestra <span className="text-salon-red">Galería</span>
            </h1>
            <p className="text-xl text-salon-gray-light max-w-3xl mx-auto">
              Descubre nuestras transformaciones y trabajos destacados.
              <br />
              <span className="text-salon-white">
                Pasa el ratón sobre los videos para verlos en acción.
              </span>
            </p>

            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="h-px w-16 bg-salon-red" />
              <div className="h-2 w-2 bg-salon-red rounded-full" />
              <div className="h-px w-16 bg-salon-red" />
            </div>
          </div>

          {/* Video Grid */}
          <div className="grid blur-3xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {videos.map((video, index) => (
              <VideoCard
                key={index}
                videoSrc={video.src}
                title={video.title}
                index={index}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <p className="text-salon-gray-light mb-6 text-lg">
              ¿Listo para tu transformación?
            </p>
            <a
              href="https://booksy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-salon-red text-salon-white text-lg font-semibold rounded-full hover:bg-salon-red-dark transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-salon-red/50"
            >
              Reserva tu Cita Ahora
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          {/* Instagram CTA */}
          <div className="mt-12 text-center">
            <p className="text-salon-gray-light mb-4">
              Síguenos en Instagram para más contenido
            </p>
            <a
              href="https://www.instagram.com/barberíasvq_/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-salon-white hover:text-salon-red transition-colors duration-300"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span className="font-semibold">@barberíasvq_</span>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
