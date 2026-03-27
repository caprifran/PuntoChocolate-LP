'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { playfair } from '../../font.js';

export default function Contact() {
  return (
    <section id="contact">
      <div className="max-w-xl mx-auto px-4 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`${playfair.className} text-3xl font-bold mb-4`}
        >
          Contacto
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-2 text-lg"
        >
          Dirección: Las Frambuesas 275 local 5 - Villa La Angostura
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-2 text-lg"
        >
          Horario: Todos los días de 12 a 00 hs
        </motion.p>
      </div>
    </section>
  );
}
