'use client';
import { motion } from 'framer-motion';
import { playfair } from '../../font.js';
import {chocolates} from './chocolates.js';
import Card from '../Carousel/Card';
import dynamic from 'next/dynamic';
import { useState } from 'react';
const EmblaCarousel = dynamic(() => import('../Carousel/EmblaCarousel.jsx'), { ssr: false });

export default function TiposChocolates() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section className="my-16 bg-cream pb-[10px]" id="tipos-chocolates">
      <div className="max-w-6xl mx-auto px-4">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {chocolates.map((grupo, idx) => (
            <motion.h4
              key={grupo.type}
              onClick={() => setActiveTab(idx)}
              className={`select-none cursor-pointer flex items-center justify-center px-6 h-12 min-w-[120px] rounded-2xl font-semibold text-base md:text-lg shadow-soft transition-colors duration-200 border-2 pl-[5px] pr-[5px]
                ${activeTab === idx
                  ? 'bg-cream text-choco border-choco'
                  : 'bg-choco text-cream border-choco'}
              `}
              style={{height: '48px'}}
              tabIndex={0}
              role="tab"
              aria-selected={activeTab === idx}
            >
              {grupo.type}
            </motion.h4>
          ))}
        </div>
        {/* Carrusel activo */}
        <div>
          <EmblaCarousel resetKey={activeTab}>
            {chocolates[activeTab].sabores.map((sabor, i) => (
              <Card key={sabor.nombre} sabor={sabor} delay={i * 0.1} />
            ))}
          </EmblaCarousel>
        </div>
      </div>
    </section>
  );
}
