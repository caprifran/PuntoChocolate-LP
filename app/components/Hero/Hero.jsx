import Image from 'next/image';
import { HERO_SECTION_IMG } from '../images.js';
import HeroContent from './HeroContent.jsx';

export default function Hero() {
  return (
    <section className="relative w-full h-[calc(100vh-64px)] flex items-center justify-center bg-cream overflow-hidden" id="hero">
      <Image
        src={HERO_SECTION_IMG}
        alt="Banner principal Punto Chocolate"
        fill
        priority
        fetchPriority="high"
        className="object-cover object-center w-full h-full absolute inset-0 z-0 block"
        sizes="100vw"
        quality={60}
      />
      <div
        className="relative z-10 w-full flex flex-col items-center justify-end h-full px-4 py-6 md:py-12 mt-auto"
        style={{ boxShadow: 'inset 0 -120px 80px -40px rgba(30, 20, 15, 0.55)' }}
      >
        <HeroContent />
      </div>
    </section>
  );
}
