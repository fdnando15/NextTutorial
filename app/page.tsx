import Navbar from "@/app/ui/salon/navbar";
import HeroSection from "@/app/ui/salon/hero-section";
import Footer from "@/app/ui/salon/footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-salon-black">
      <Navbar />
      <HeroSection />

      {/* Content sections will go here in future phases */}
      <section className="min-h-screen bg-salon-black text-salon-white flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Bienvenido a <span className="text-salon-red">barberíasvq</span>
          </h2>
          <p className="text-xl text-salon-gray-light mb-6">
            Te enseño qué corte usar según tu rostro 🚀
          </p>
          <p className="text-lg text-salon-gray-light">
            Web en desarrollo, próximamente más contenido!
          </p>
          <p className="text-sm text-salon-gray-light">
            Imágenes y vídeos borrosos por privacidad
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
