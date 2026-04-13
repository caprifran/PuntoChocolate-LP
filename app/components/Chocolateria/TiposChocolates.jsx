'use client';
import { chocolates } from './chocolates.js';
import Card from '../Carousel/Card';
import dynamic from 'next/dynamic';
import { useState } from 'react';
const EmblaCarousel = dynamic(() => import('../Carousel/EmblaCarousel.jsx'), { ssr: false });

export default function TiposChocolates() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section className="my-16 bg-cream pb-[10px]" id="tipos-chocolates">
      <div className="mx-auto">
        {/* Tabs */}
        <div className="flex flex-nowrap gap-8 border-b border-choco/10 mb-12 overflow-x-auto no-scrollbar">
          {chocolates.map((grupo, idx) => (
            <button
              key={grupo.type}
              onClick={(e) => { setActiveTab(idx); const btn = e.currentTarget; const container = btn.parentElement; container.scrollTo({ left: btn.offsetLeft - container.offsetWidth / 2 + btn.offsetWidth / 2, behavior: 'smooth' }); }}
              className={`text-sm uppercase tracking-[0.3em] whitespace-nowrap pb-3 transition-all duration-200 bg-transparent outline-none cursor-pointer border-0 border-b-2 border-solid
                ${activeTab === idx
                  ? 'text-accent border-accent font-semibold'
                  : 'text-choco/40 border-transparent hover:text-accent font-semibold'}
              `}
              role="tab"
              aria-selected={activeTab === idx}
            >
              {grupo.type}
            </button>
          ))}
        </div>
        {/* Carrusel activo */}
        <EmblaCarousel resetKey={activeTab}>
          {chocolates[activeTab].sabores.map((sabor, i) => (
            <Card key={sabor.nombre} sabor={sabor} delay={i * 0.08} />
          ))}
        </EmblaCarousel>
      </div>
    </section>
  );
}
