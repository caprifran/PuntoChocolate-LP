'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { playfair } from '../../font.js';
import Sabores from './Sabores.jsx';
import { HELADO_IMG, SECCION_HELADOS } from '../images.js';

export default function Helados() {
  return (
    <section className="py-24 bg-cream overflow-hidden">
      <div className="container mx-auto px-12">
        <div className="flex flex-col md:flex-row gap-12 items-end mb-24" id="helados">
          <motion.div
            className="md:w-1/2 aspect-[4/5] bg-choco"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <img alt="Artisan chocolate gelato" className="w-full h-full object-cover" src={SECCION_HELADOS} />
          </motion.div>
          <motion.div
            className="md:w-1/2 pb-12"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <span className="text-choco font-label text-sm uppercase tracking-[0.3em] mb-4 block">La Gelatería</span>
            <h2 className="text-3xl md:text-5xl font-headline italic mb-8 leading-tight break-words">Texturas que susurran <br /> elegancia fría.</h2>
            <p className="text-choco text-lg font-body leading-relaxed max-w-md mb-8">
              Nuestros helados no se sirven, se presentan. Elaborados con procesos lentos y materias primas de origen controlado para lograr una cremosidad sin precedentes.
            </p>
            <div className="w-24 h-px bg-choco"></div>
          </motion.div>
        </div>
        {/* Sabores Tabs & Carousel */}
        <div className="mt-24">
          <Sabores />
        </div>
      </div>
    </section>
  );
}
