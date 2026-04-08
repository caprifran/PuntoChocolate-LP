'use client';
import { motion } from 'framer-motion';
import { playfair } from '../../font.js';

export default function HeroContent() {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className={`${playfair.className} text-4xl md:text-6xl font-bold text-cream drop-shadow-lg mb-2 text-center`}
        style={{ textShadow: '0 4px 24px rgba(59,47,47,0.25)' }}
      >
        Punto Chocolate
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-base md:text-xl text-cream mb-2 md:mb-4 text-center max-w-2xl drop-shadow"
        style={{ textShadow: '0 2px 12px rgba(59,47,47,0.18)' }}
      >
        Heladería & Chocolatería artesanal en Villa la Angostura
      </motion.p>
    </>
  );
}
