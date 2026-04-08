import '../styles/globals.css';
import { inter } from './font.js';
import AntigravityProvider from './components/AntigravityProvider/AntigravityProvider.jsx';

export const metadata = {
  metadataBase: new URL('https://punto-chocolate.vercel.app/'),
  title: {
    default: 'Punto Chocolate | Heladería & Chocolatería Artesanal',
    template: '%s | Punto Chocolate',
  },
  description:
    'Heladería & Chocolatería artesanal en Villa la Angostura. Helados cremosos, chocolates premium y alfajores de autor.',
  keywords: [
    'heladería',
    'chocolatería',
    'artesanal',
    'Villa la Angostura',
    'helados',
    'chocolates',
    'alfajores',
    'Punto Chocolate',
  ],
  icons: {
    icon: '/images/favicon.ico',
  },
  openGraph: {
    title: 'Punto Chocolate | Heladería & Chocolatería Artesanal',
    description:
      'Heladería & Chocolatería artesanal en Villa la Angostura. Helados cremosos, chocolates premium y alfajores de autor.',
    locale: 'es_AR',
    type: 'website',
    images: [{ url: '/images/Hero.jpg', width: 1200, height: 630, alt: 'Punto Chocolate' }],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Punto Chocolate | Heladería & Chocolatería Artesanal',
    description: 'Heladería artesanal en Villa La Angostura con helados, chocolates y alfajores premium.',
    images: ['/images/Hero.jpg'],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-cream text-choco min-h-screen`}>
        <AntigravityProvider>
          {children}
        </AntigravityProvider>
      </body>
    </html>
  );
}