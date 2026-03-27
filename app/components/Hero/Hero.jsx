'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {BANNER_PPAL_IMG, WHATSAPP_LOGO} from '../images.js';
import { playfair } from '../../font.js';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[40vh] sm:min-h-[50vh] md:min-h-[70vh] flex items-center justify-center bg-cream overflow-hidden pt-[64px]" id="hero">
      <Image
        src={"https://placehold.co/1920x1080/png"}
        alt="Banner principal Punto Chocolate"
        fill
        priority
        className="object-cover w-full h-full absolute inset-0 z-0"
        sizes="100vw"
      />
      <div className="relative z-10 w-full flex flex-col items-center justify-end h-full px-4 py-6 md:py-12 mt-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`${playfair.className} text-4xl md:text-6xl font-bold text-choco drop-shadow-lg mb-2 text-center`}
          style={{ textShadow: '0 4px 24px rgba(59,47,47,0.25)' }}
        >
          Punto Chocolate
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base md:text-xl text-choco mb-2 md:mb-4 text-center max-w-2xl drop-shadow"
          style={{ textShadow: '0 2px 12px rgba(59,47,47,0.18)' }}
        >
          Heladería & Chocolatería artesanal en Villa la Angostura
        </motion.p>
      </div>
    </section>
  );
}
