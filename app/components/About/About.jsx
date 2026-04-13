import Image from 'next/image';
import { ABOUT_SECTION_IMG } from '../images.js';
import AnimatedReveal from '../AnimatedReveal.jsx';
import AboutCounter from './AboutCounter.jsx';

export default function About() {
  return (
    <section className="py-32 bg-cream overflow-hidden" id="about">
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          
          <AnimatedReveal className="relative md:order-2" direction="right">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-choco/5 -z-10"></div>
            <Image
              alt="Punto Chocolate interior"
              className="w-full grayscale hover:grayscale-0 transition-all duration-1000"
              src={ABOUT_SECTION_IMG}
              width={800}
              height={600}
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={65}
            />
          </AnimatedReveal>
          <AnimatedReveal className="md:order-1" direction="left" delay={0.2}>
            <h2 className="text-3xl md:text-5xl font-headline italic mb-10 leading-tight text-choco break-words">
              Nuestra Historia <br /> se escribe con Cacao.
            </h2>
            <div className="space-y-6 text-choco/70 font-body text-lg leading-relaxed">
              <p>
                Nacimos del deseo de elevar el postre cotidiano a una categoría de diseño. En Punto Chocolate, cada pieza es tratada como una obra de arte, respetando los tiempos de la naturaleza y el rigor de la técnica.
              </p>
              <p>
                Desde nuestra apertura en el corazón de Villa la Angostura, nos hemos dedicado a buscar los mejores granos de cacao, trabajando codo a codo con productores locales de leche y frutas para garantizar que cada bocado cuente una historia de excelencia.
              </p>
            </div>
            <div className="mt-12 flex flex-row-reverse gap-12 border-t border-accent/60 pt-12">
              <AboutCounter />
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}