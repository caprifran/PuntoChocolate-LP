'use client';
import { motion } from 'framer-motion';
import TiposChocolates from './TiposChocolates.jsx';
import { CHOCOLATE_IMG } from '../images.js';

export default function Chocolateria() {
  return (
    <section className="py-24 bg-cream overflow-hidden">
      <div className="container mx-auto px-12">
        <div className="flex flex-col md:flex-row-reverse gap-12 items-end mb-24" id="chocolateria">
          <motion.div
            className="md:w-1/2 aspect-[4/5] bg-choco"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <img alt="Chocolatería artesanal" className="w-full h-full object-cover" src={CHOCOLATE_IMG} />
          </motion.div>
          <motion.div
            className="md:w-1/2 pb-12"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <span className="text-choco font-label text-sm uppercase tracking-[0.3em] mb-4 block">La Boutique</span>
            <h2 className="text-3xl md:text-5xl font-headline italic mb-8 leading-tight break-words">Pequeñas Joyas <br /> de Cacao Puro.</h2>
            <p className="text-choco text-lg font-body leading-relaxed max-w-md mb-8">
              Nuestra chocolatería es un ejercicio de precisión. Cada bombón y cada tableta es el resultado de meses de investigación sobre perfiles de tueste y maridajes inesperados.
            </p>
            <div className="w-24 h-px bg-choco"></div>
          </motion.div>
        </div>
        {/* Tipos Chocolates Tabs & Carousel */}
        <div className="mt-24">
          <TiposChocolates />
        </div>
      </div>
    </section>
  );
}

