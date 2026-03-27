'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { playfair } from '../../font.js';
import Sabores from './Sabores.jsx';

export default function Helados() {
  return (
    <section className="py-16 text-cream" id="helados">
      <div className="bg-choco mx-auto flex flex-col md:flex-row gap-6 md:gap-10 items-center md:h-[320px] w-full shadow-soft overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className='h-[320px]'
        >
          <Image
            src={"https://placehold.co/480x320"}
            alt="Helados artesanales referencia"
            width={480}
            height={320}
            className="object-cover h-full w-full"
            priority
            unoptimized
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className='pl-[1rem]'
        >
          <h2 className={`${playfair.className} text-3xl font-bold mb-4`}>Helados artesanales</h2>
          <p className="text-lg mb-2">
            Nuestros helados son elaborados a mano, seleccionando los mejores ingredientes para lograr una experiencia premium y auténtica con recetas propias y mucho amor.
          </p>
        </motion.div>
      </div>
      <Sabores />
    </section>
  );
}
