import { useCallback, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

export default function EmblaCarousel({ children, resetKey }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    dragFree: true,
    containScroll: 'keepSnaps',
    loop: false,
  });

  const rootRef = useRef(null);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
      emblaApi.scrollTo(0, true);
    }
  }, [emblaApi, resetKey]);

  useEffect(() => {
    const node = rootRef.current;
    if (!node || !emblaApi) return;

    const onWheel = (e) => {
      const delta = e.deltaY || e.deltaX;
      if (delta === 0) return;

      const engine = emblaApi.internalEngine();
      const canScroll = delta > 0
        ? engine.limit.reachedMax(engine.location.get())
        : engine.limit.reachedMin(engine.location.get());

      if (!canScroll) {
        e.preventDefault();
        if (delta > 0) emblaApi.scrollNext();
        else emblaApi.scrollPrev();
      }
    };

    node.addEventListener('wheel', onWheel, { passive: false });
    return () => node.removeEventListener('wheel', onWheel);
  }, [emblaApi]);

  return (
    <div ref={rootRef} className="relative w-full max-w-full overflow-hidden">
      <div className="w-full max-w-full overflow-hidden" ref={emblaRef}>
        <div className="flex gap-[5px]">
          {children}
        </div>
      </div>
    </div>
  );
}
