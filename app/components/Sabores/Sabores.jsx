'use client';
import { motion } from 'framer-motion';
import { playfair } from '../../font.js';
import {saboresNuevo} from './sabores.js';
import FlavorCard from '../Carousel/Card.jsx';
import dynamic from 'next/dynamic';
import { useState } from 'react';
const EmblaCarousel = dynamic(() => import('../Carousel/EmblaCarousel.jsx'), { ssr: false });

export default function Sabores() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section className="py-16 bg-cream pb-[10px]" id="sabores">
      <div className="max-w-6xl mx-auto px-4">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {saboresNuevo.map((grupo, idx) => (
            <motion.h4
              key={grupo.type}
              onClick={() => setActiveTab(idx)}
              className={`select-none cursor-pointer flex items-center justify-center px-6 h-12 min-w-[120px] rounded-2xl font-semibold text-base md:text-lg shadow-soft transition-colors duration-200 border-2 pl-[5px] pr-[5px]
                ${activeTab === idx
                  ? 'bg-cream text-choco border-choco'
                  : 'bg-choco text-cream border-choco hover:bg-cream/80 hover:text-choco'}
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
            {saboresNuevo[activeTab].sabores.map((sabor, i) => (
              <FlavorCard key={sabor.nombre} sabor={sabor} delay={i * 0.1} />
            ))}
          </EmblaCarousel>
        </div>
      </div>
    </section>
  );
}
