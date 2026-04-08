import { Suspense } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Chocolateria from './components/Chocolateria/Chocolateria.jsx';
import Alfajores from './components/Alfajores/Alfajores.jsx';
import About from './components/About/About.jsx';
import WhatsAppFloat from './components/WhatsAppFloat/WhatsAppFloat.jsx';
import Footer from './components/Footer/Footer.jsx';
import Helados from './components/Helados/Helados.jsx';
import SectionSkeleton from './components/skeletons/SectionSkeleton.jsx';

export default function Page() {
  return (
    <main className="flex flex-col w-full relative min-h-screen">
      {/* Navbar + Hero: carga inmediata (above the fold) */}
      <Navbar />
      <Hero />

      <div className="flex flex-col w-full gap-3">
        {/* Helados — imagen izquierda + carrusel */}
        <Suspense
          fallback={<SectionSkeleton imagePosition="left" showCarousel />}
        >
          <Helados />
        </Suspense>

        {/* Chocolatería — imagen derecha */}
        <Suspense
          fallback={<SectionSkeleton imagePosition="right" showCarousel />}
        >
          <Chocolateria />
        </Suspense>

        {/* Alfajores — imagen izquierda */}
        <Suspense
          fallback={<SectionSkeleton imagePosition="left" showCarousel />}
        >
          <Alfajores />
        </Suspense>

        <About />
        <Footer />
      </div>

      {/* Floating elements */}
      <WhatsAppFloat />
    </main>
  );
}
