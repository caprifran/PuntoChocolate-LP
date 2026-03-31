import { Montserrat, Cormorant_Garamond } from 'next/font/google';

export const inter = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const playfair = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap', 
  style: ['normal', 'italic']
});

export default inter;
