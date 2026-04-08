import Image from 'next/image';
import AnimatedReveal from '../AnimatedReveal.jsx';
import Sabores from './Sabores.jsx';
import { SECCION_HELADOS } from '../images.js';

export default function Helados() {
  return (
    <section className="py-24 bg-cream overflow-hidden">
      <div className="container mx-auto px-12">
        <div className="flex flex-col md:flex-row gap-12 items-end mb-24" id="helados">
          <AnimatedReveal className="w-full md:w-1/2 aspect-[4/5] bg-choco relative" direction="left">
            <Image
              alt="Artisan chocolate gelato"
              className="object-cover"
              src={SECCION_HELADOS}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </AnimatedReveal>
          <AnimatedReveal className="md:w-1/2 pb-12" direction="right" delay={0.2}>
            <span className="text-choco font-label text-sm uppercase tracking-[0.3em] mb-4 block">La Gelatería</span>
            <h2 className="text-3xl md:text-5xl font-headline italic mb-8 leading-tight break-words">Texturas que susurran <br /> elegancia fría.</h2>
            <p className="text-choco text-lg font-body leading-relaxed max-w-md mb-8">
              Nuestros helados no se sirven, se presentan. Elaborados con procesos lentos y materias primas de origen controlado para lograr una cremosidad sin precedentes.
            </p>
            <div className="w-24 h-px bg-choco"></div>
          </AnimatedReveal>
        </div>
        {/* Sabores Tabs & Carousel */}
        <div className="mt-24">
          <Sabores />
        </div>
      </div>
    </section>
  );
}
