'use client';
import { motion } from 'framer-motion';
import { socialLinks } from './social.js';

export default function SocialLinks() {
  return (
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
  );
}
