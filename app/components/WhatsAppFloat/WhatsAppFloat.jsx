'use client';
import { motion } from 'framer-motion';

export default function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/5492944530000"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8, boxShadow: '0 4px 12px rgba(0,0,0,0.8)' }}
      animate={{ opacity: 1, scale: 1, boxShadow: '0 6px 20px rgba(0,0,0,0.9)' }}
      whileHover={{ scale: 1.15, boxShadow: '0 12px 32px rgba(0,0,0,1.2)' }}
      transition={{ duration: 0.1 }}
      className="fixed bottom-[10px] right-[10px] z-50 p-2 flex items-center justify-center
                 rounded-full transition-smooth
                 bg-accent text-choco "
      aria-label="Contactar por WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
      >
        {/* Fondo con borde */}
        <circle
          cx="12"
          cy="12"
          r="11"
          fill="var(--whatsapp-bg)"
          stroke="var(--whatsapp-border)"
          strokeWidth="2"
        />

        {/* Logo de WhatsApp */}
        <path
          fill="currentColor"
          d="M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.19 1.6 6.01L0 24l6.18-1.62A12.07 12.07 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.23-3.48-8.52zM12 22c-1.85 0-3.67-.5-5.24-1.44l-.37-.22-3.67.96.98-3.58-.24-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.97.95-.97 2.3 0 1.35.99 2.65 1.13 2.83.14.18 1.95 2.98 4.74 4.06.66.28 1.18.45 1.58.58.66.21 1.26.18 1.73.11.53-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32z"
        />
      </svg>
    </motion.a>
  );
}