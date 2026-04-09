'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function Card({ sabor, delay = 0, onActivate }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="relative min-w-[300px] max-w-[300px] flex-shrink-0 cursor-pointer select-none"
      onClick={() => {
        const next = !isActive;
        setIsActive(next);
        if (next && onActivate) onActivate();
      }}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      {/* Card body */}
      <div className="overflow-hidden rounded-2xl bg-cream shadow-soft">
        {/* Image + overlay */}
        <div className="relative h-80 overflow-hidden">
          <Image
            src={sabor.imagen}
            alt={sabor.nombre}
            fill
            className="object-cover transition-transform duration-700 ease-out"
            style={{ transform: isActive ? 'scale(1.05)' : 'scale(1)' }}
            sizes="300px"
            quality={60}
            draggable={false}
          />
          {/* Description overlay — grows upward from bottom of image */}
          <motion.div
            initial={false}
            animate={{
              height: isActive ? 'auto' : 0,
              opacity: isActive ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="absolute bottom-0 left-0 right-0 overflow-hidden bg-gradient-to-t from-choco/90 via-choco/70 to-transparent"
          >
            <p className="px-5 pt-10 pb-4 text-sm text-cream/90 leading-relaxed">
              {sabor.descripcion || 'Producto artesanal'}
            </p>
          </motion.div>
        </div>

        {/* Title below image */}
        <div className="px-5 pt-4 pb-5">
          <h3 className="text-xl font-semibold italic text-choco leading-tight">
            {sabor.nombre}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}