'use client';
import { motion } from 'framer-motion';

export default function AnimatedReveal({ children, className, direction = 'left', delay = 0 }) {
  const x = direction === 'left' ? -100 : 100;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}
