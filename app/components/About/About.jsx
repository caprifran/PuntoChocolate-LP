'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { playfair } from '../../font.js';

export default function About() {
  return (
    <section className="py-16 text-cream" id="about">
      <div className="bg-choco mx-auto flex flex-col md:flex-row gap-6 md:gap-10 items-center md:h-[320px] w-full shadow-soft overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
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

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className='pl-[1rem]'
        >
          <h2 className={`${playfair.className} text-3xl font-bold mb-4`}>Sobre Punto Chocolate</h2>
          <p className="text-lg mb-2">
                  Somos una heladería y chocolatería artesanal ubicada en Villa la Angostura, Patagonia Argentina. Nos apasiona crear sabores únicos y chocolates de calidad, en un ambiente cálido y familiar.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
