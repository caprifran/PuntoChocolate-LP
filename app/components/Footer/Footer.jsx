'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Contact from './Contact.jsx';
import { playfair } from '../../font.js';
import { socialLinks } from './social.js';

const links = [
  { name: 'Inicio', id: 'hero' },
  { name: 'Helados', id: 'helados' },
  { name: 'Chocolatería', id: 'chocolateria' },
  { name: 'Sobre Nosotros', id: 'about' },
];

export default function Footer() {
  return (
    <footer className="text-cream pt-[10px] relative bg-gradient-to-br from-[#2d1f1f] via-choco to-[#523e3e] shadow-soft mt-24 pt-12 pb-4 px-4 md:px-0 overflow-hidden p-[1rem]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-0 pt-[2rem] pb-[2rem] px-4">
            {/* Logo y frase */}
            <div className="flex flex-col items-center mb-6 md:mb-0 w-full md:w-[33.33%]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >   
                    <Image src="/images/heladeria-icono.jpg" alt="Logo Punto Chocolate" width={64} height={64} className="rounded-full mb-2 shadow-soft w-16 h-16" />
                </motion.div>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-lg font-semibold text-center"
                >
                    "¡El sabor de la Patagonia en cada cucharada!"
                </motion.p>
            </div>
            {/* Contacto integrado */}
            <div className="max-w-4xl mx-auto w-full md:w-[33.33%]">
                <Contact />
            </div>
            
            {/* Redes sociales */}
            <div className="flex flex-col items-center gap-3 w-full md:w-[33.33%]">
                <motion.h3
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className={`${playfair.className} text-3xl font-bold text-center`}
                >
                    Redes Sociales
                </motion.h3>  
                <div className="flex gap-4 mb-2 justify-center">
                    {socialLinks.map(social => (
                        <motion.a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.15 }}
                            className="rounded-full p-2 shadow-soft hover:bg-accent transition-colors duration-200"
                            aria-label={social.name}
                        >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        > 
                            {social.svg}
                        </motion.div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </div>
        

        {/* Derechos reservados */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >   
            <div className="text-center text-cream/60 text-sm mt-8 mb-2">
                © {new Date().getFullYear()} Punto Chocolate. Todos los derechos reservados.
            </div>
        </motion.div>
    </footer>
  );
}
