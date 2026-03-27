import '../styles/globals.css';
import { inter } from './font.js';

export const metadata = {
  title: 'Punto Chocolate',
  description: 'Heladería & Chocolatería artesanal en Villa la Angostura',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-cream text-choco min-h-screen`}>
        {children}
      </body>
    </html>
  );
}