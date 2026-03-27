'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { playfair } from '../../font.js';

const links = [
  { name: 'Inicio', id: 'hero' },
  { name: 'Helados', id: 'helados' },
  { name: 'Chocolatería', id: 'chocolateria' },
  { name: 'Sobre Nosotros', id: 'about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full max-w-[100vw] overflow-hidden z-50 transition-all duration-300 bg-choco ${
        scrolled
          ? 'shadow-soft backdrop-blur-md'
          : ''
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo + Nombre */}
        <a
          href="#hero"
          onClick={(e) => handleClick(e, 'hero')}
          className="flex items-center gap-2 no-underline"
        >
          <Image
            src="/images/heladeria-icono.jpg"
            alt="Logo Punto Chocolate"
            width={40}
            height={40}
            className="rounded-full shadow-soft w-10 h-10"
          />
          <span className={`${playfair.className} text-xl font-bold text-cream hidden sm:inline`}>
            Punto Chocolate
          </span>
        </a>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleClick(e, link.id)}
                className="text-cream font-medium hover:text-accent transition-colors duration-200 no-underline"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger mobile */}
        <button
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Abrir menú"
        >
          <span className={`block w-6 h-[2px] bg-cream transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-[2px] bg-cream transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-cream transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden flex flex-col items-center gap-4 bg-choco pb-4 list-none m-0 px-0 pt-2 overflow-hidden"
          >
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleClick(e, link.id)}
                  className="text-cream font-medium text-lg hover:text-accent transition-colors duration-200 no-underline"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
