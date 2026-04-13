'use client';
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

export default function EmblaCarousel({ children, resetKey }) {
  // Duplicamos los elementos si son pocos para asegurar un loop infinito fluido
  const slides = React.Children.toArray(children);
  const minSlides = 12; // Mínimo de slides necesarios para un loop sin saltos
  const repeatedSlides = slides.length > 0 && slides.length < minSlides
    ? Array(Math.ceil(minSlides / slides.length)).fill(slides).flat()
    : slides;

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: 'start',
      dragFree: true,
      loop: true, // Loop infinito
    },
    [
      AutoScroll({
        speed: 0.8, // Movimiento constante, fluido y lento
        stopOnInteraction: false,
        stopOnMouseEnter: true, // Pausar al hover para ver descripción
      }),
    ]
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    const autoScroll = emblaApi.plugins().autoScroll;
    if (autoScroll) autoScroll.stop();
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    const autoScroll = emblaApi.plugins().autoScroll;
    if (autoScroll) autoScroll.stop();
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
      emblaApi.scrollTo(0, true);
      onSelect();
      emblaApi.on('select', onSelect);
      emblaApi.on('reInit', onSelect);
    }
  }, [emblaApi, resetKey, onSelect]);

  return (
    <div className="relative w-full max-w-full pb-10 px-0 md:px-16 lg:px-20 group">
      {/* Botón Anterior - Posicionado en el exterior del carrusel */}
      <button
        onClick={scrollPrev}
        className="absolute left-1 md:left-4 top-[40%] -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-cream/90 backdrop-blur-sm border border-choco/10 text-choco shadow-lg hover:bg-accent hover:text-cream hover:scale-110 transition-all duration-300 cursor-pointer group/btn"
        aria-label="Anterior"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover/btn:-translate-x-0.5 transition-transform"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Viewport del Carrusel */}
      <div className="w-full max-w-full overflow-hidden py-12 -my-12" ref={emblaRef}>
        <div className="flex">
          {repeatedSlides.map((child, index) => {
            const uniqueKey = `${resetKey}-${index}-${child.key || index}`;
            return React.isValidElement(child) ? (
              <div key={uniqueKey} className="flex-shrink-0 pl-[24px]">
                {React.cloneElement(child, {
                  onActivate: () => emblaApi && emblaApi.scrollTo(index),
                })}
              </div>
            ) : (
              child
            );
          })}
        </div>
      </div>

      {/* Botón Siguiente - Posicionado en el exterior del carrusel */}
      <button
        onClick={scrollNext}
        className="absolute right-1 md:right-4 top-[40%] -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-cream/90 backdrop-blur-sm border border-choco/10 text-choco shadow-lg hover:bg-accent hover:text-cream hover:scale-110 transition-all duration-300 cursor-pointer group/btn"
        aria-label="Siguiente"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover/btn:translate-x-0.5 transition-transform"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}
