'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { playfair } from '../../font.js';
import { socialLinks } from './social.js';
import { ICONO_PUNTO_CHOCO } from '../images.js';

const links = [
    { name: 'Inicio', id: 'hero' },
    { name: 'Helados', id: 'helados' },
    { name: 'Chocolatería', id: 'chocolateria' },
    { name: 'Sobre Nosotros', id: 'about' },
];

export default function Footer() {
    return (
        <footer className="bg-surface dark:bg-choco w-full border-t border-cream/80 flex flex-col justify-between items-center px-12 py-16 gap-10">
            <div className="flex items-center">
                <div className="flex items-center gap-4">
                    <Image src={ICONO_PUNTO_CHOCO} alt="Logo Punto Chocolate" width={64} height={64} className="h-10 w-10 rounded-full object-cover" />
                    <span className={`${playfair.className} text-2xl italic tracking-tight text-cream`}>Punto Chocolate</span>
                </div>
            </div>
            <div className="flex flex-col items-center text-center gap-4">
                <p className="text-cream font-label text-xs tracking-widest uppercase opacity-80">Las Frambuesas 275 local 5 - Villa La Angostura</p>
                <p className="text-cream font-label text-xs tracking-widest uppercase opacity-80">Todos los días de 12 a 00 hs</p>
            </div>
            <div className="w-full border-t border-cream/80 mt-8 pt-8 flex flex-col items-center gap-6">
                <div className="flex gap-6 mb-2 justify-center text-cream">
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
                <p className="text-[#3b2f2f] dark:text-[#f5e6d3] font-label text-[10px] tracking-widest uppercase opacity-50 text-center">© {new Date().getFullYear()} Punto Chocolate. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}