'use client';

import React, { useEffect } from 'react';
import Lenis from 'lenis';

export default function AntigravityProvider({ children }) {
  useEffect(() => {
    // 1. Initializing the Spatial Physics Scroller (Lenis)
    // Customizing the lerp/friction based on UX Rules
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1, // Gravity acceleration approx
      smoothTouch: false,
      touchMultiplier: 2,
      lerp: 0.08, // Frictional constant of 0.35 inverted/mapped linearly
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
