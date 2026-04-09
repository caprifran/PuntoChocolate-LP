import Image from 'next/image';
import { playfair } from '../../font.js';
import { ICONO_PUNTO_CHOCO } from '../images.js';
import SocialLinks from './SocialLinks.jsx';

export default function Footer() {
    return (
        <footer className="bg-surface dark:bg-choco w-full border-t border-cream/80 flex flex-col justify-between items-center px-12 py-16 gap-10">
            <div className="flex items-center">
                <div className="flex items-center gap-4">
                    <Image src={ICONO_PUNTO_CHOCO} alt="Logo Punto Chocolate" width={40} height={40} sizes="40px" quality={50} className="h-10 w-10 rounded-full object-cover" />
                    <span className={`${playfair.className} text-2xl italic tracking-tight text-cream`}>Punto Chocolate</span>
                </div>
            </div>
            <div className="flex flex-col items-center text-center gap-4">
                <p className="text-cream font-label text-xs tracking-widest uppercase opacity-80">Las Frambuesas 275 local 5 - Villa La Angostura</p>
                <p className="text-cream font-label text-xs tracking-widest uppercase opacity-80">Todos los días de 12 a 00 hs</p>
            </div>
            <div className="w-full border-t border-cream/80 mt-8 pt-8 flex flex-col items-center gap-6">
                <SocialLinks />
                <p className="text-[#3b2f2f] dark:text-[#f5e6d3] font-label text-[10px] tracking-widest uppercase opacity-50 text-center">© {new Date().getFullYear()} Punto Chocolate. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}