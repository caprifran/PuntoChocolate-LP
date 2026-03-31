'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ABOUT_SECTION_IMG } from '../images.js';

const START_YEAR = 2017;

function useCountUp(target, duration = 1500) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          const start = performance.now();
          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

export default function About() {
  const years = new Date().getFullYear() - START_YEAR;
  const { count, ref: counterRef } = useCountUp(years, 1200);

  return (
    <section className="py-32 bg-cream overflow-hidden" id="about">
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          
          <motion.div
            className="relative md:order-2"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-choco/5 -z-10"></div>
            <img
              alt="Punto Chocolate interior"
              className="w-full grayscale hover:grayscale-0 transition-all duration-1000"
              src={ABOUT_SECTION_IMG}
            />
          </motion.div>
          <motion.div
            className="md:order-1"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
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
            <div className="mt-12 flex flex-row-reverse gap-12 border-t border-choco/10 pt-12">
              <div ref={counterRef}>
                <span className="block text-3xl font-headline italic text-choco">{count}+</span>
                <span className="text-[10px] font-label uppercase tracking-widest text-choco/60">Años de Maestría</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}