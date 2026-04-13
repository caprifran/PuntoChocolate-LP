import Image from 'next/image';
import AnimatedReveal from '../AnimatedReveal.jsx';
import TiposChocolates from './TiposChocolates.jsx';
import { CHOCOLATE_IMG } from '../images.js';

export default function Chocolateria() {
  return (
    <section className="py-24 bg-cream overflow-hidden">
      <div className="container mx-auto px-12">
        <div className="flex flex-col md:flex-row-reverse gap-12 items-end mb-24" id="chocolateria">
          <AnimatedReveal className="w-full md:w-1/2 aspect-[4/5] bg-choco relative rounded-xl overflow-hidden" direction="right">
            <Image
              alt="Chocolatería artesanal"
              className="object-cover"
              src={CHOCOLATE_IMG}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={65}
            />
          </AnimatedReveal>
          <AnimatedReveal className="md:w-1/2 pb-12" direction="left" delay={0.2}>
            <span className="text-choco font-label text-sm uppercase tracking-[0.3em] mb-4 block border-b-[2px] border-accent/60 w-fit pb-[2px]">La Boutique</span>
            <h2 className="text-3xl md:text-5xl font-headline italic mb-8 leading-tight break-words">Pequeñas Joyas <br /> de Cacao Puro.</h2>
            <p className="text-choco text-lg font-body leading-relaxed max-w-md mb-8">
              Nuestra chocolatería es un ejercicio de precisión. Cada bombón y cada tableta es el resultado de meses de investigación sobre perfiles de tueste y maridajes inesperados.
            </p>
          </AnimatedReveal>
        </div>
        {/* Tipos Chocolates Tabs & Carousel */}
        <div className="mt-24">
          <TiposChocolates />
        </div>
      </div>
    </section>
  );
}

