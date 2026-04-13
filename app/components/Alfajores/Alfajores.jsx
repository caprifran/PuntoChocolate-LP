import Image from 'next/image';
import AnimatedReveal from '../AnimatedReveal.jsx';
import TiposAlfajores from './TiposAlfajores.jsx';
import { ALFAJOR_IMG } from '../images.js';

export default function Alfajores() {
  return (
    <section className="py-24 bg-cream overflow-hidden">
      <div className="container mx-auto px-12">
        <div className="flex flex-col md:flex-row gap-12 items-end mb-24" id="alfajores">
          <AnimatedReveal className="w-full md:w-1/2 aspect-[4/5] bg-choco relative rounded-xl overflow-hidden" direction="left">
            <Image
              alt="Alfajores artesanales"
              className="object-cover"
              src={ALFAJOR_IMG}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={65}
            />
          </AnimatedReveal>
          <AnimatedReveal className="md:w-1/2 pb-12" direction="right" delay={0.2}>
            <span className="text-choco font-label text-sm uppercase tracking-[0.3em] mb-4 block border-b-[2px] border-accent/60 w-fit pb-[2px]">El Ícono Nacional</span>
            <h2 className="text-3xl md:text-5xl font-headline italic mb-8 leading-tight break-words">Alfajores <br /> Reinterpretados.</h2>
            <p className="text-choco text-lg font-body leading-relaxed max-w-md mb-8">
              La elevación de un clásico. Capas finas de masa artesanal unidas por el dulce de leche más puro, bañadas en una cascada de chocolate premium de nuestra propia manufactura.
            </p>
            <div className="w-24 h-px bg-"></div>
          </AnimatedReveal>
        </div>
        {/* Tipos Alfajores Tabs & Carousel */}
        <div className="mt-24">
          <TiposAlfajores />
        </div>
      </div>
    </section>
  );
}
