'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function Card({ sabor, delay }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="relative min-w-[180px] max-w-[200px] w-[200px] h-[200px] flex-shrink-0 cursor-pointer select-none"
      style={{ perspective: 1200 }}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 1.03, y: -2 }}
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: 'spring', stiffness: 220, damping: 25 }}
        className="relative w-full h-full rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
        style={{ transformStyle: 'preserve-3d'}}
      >
        {/* Front */}
        <div
          className="absolute inset-0 w-full h-full rounded-[24px] overflow-hidden"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <Image
            src={sabor.imagen}
            alt={sabor.nombre}
            fill
            className="object-cover"
            sizes="200px"
            draggable={false}
          />
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 w-full h-full bg-choco/95 backdrop-blur-md rounded-[24px] flex flex-col items-center justify-center p-4 text-cream border border-cream/10"
          style={{
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          <span className="font-bold text-lg mb-1 text-accent text-center w-full leading-tight text-balance">
            {sabor.nombre}
          </span>
          <span className="text-sm text-cream text-center w-full overflow-hidden line-clamp-6 text-ellipsis">
            {sabor.descripcion || 'Helado artesanal'}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}