'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { playfair } from '../../font.js';
import TiposChocolates from './TiposChocolates.jsx';

export default function Chocolateria() {
  return (
    <section className="py-16 text-cream" id="chocolateria">
      <div className="bg-choco mx-auto flex flex-col-reverse md:flex-row gap-6 md:gap-10 items-center md:h-[320px] w-full shadow-soft overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className='pl-[1rem]'
        >
          <h2 className={`${playfair.className} text-3xl font-bold mb-4`}>Chocolatería artesanal</h2>
          <p className="text-lg mb-2">
            Nuestros chocolates son elaborados a mano, seleccionando los mejores ingredientes para lograr una experiencia premium y auténtica. Bombones, tabletas, trufas y más, con recetas propias y mucho amor.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className='h-[320px]'
        >
          <Image
            src={"https://placehold.co/480x320"}
            alt="Chocolatería artesanal referencia"
            width={480}
            height={320}
            className="object-cover h-full w-full"
            priority
            unoptimized
          />
        </motion.div>
      </div>
      <TiposChocolates />
    </section>
  );
}
