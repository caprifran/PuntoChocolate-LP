'use client';
import { useEffect, useRef, useState } from 'react';

const START_YEAR = 2017;

function useCountUp(target, duration = 1500) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          const start = performance.now();
          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

export default function AboutCounter() {
  const years = new Date().getFullYear() - START_YEAR;
  const { count, ref: counterRef } = useCountUp(years, 1200);

  return (
    <div ref={counterRef}>
      <span className="block text-3xl font-headline italic text-choco">{count}+</span>
      <span className="text-[10px] font-label uppercase tracking-widest text-choco/60">Años de Maestría</span>
    </div>
  );
}
