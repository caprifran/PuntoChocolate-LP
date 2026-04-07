import '../styles/globals.css';
import { inter } from './font.js';
import AntigravityProvider from './components/AntigravityProvider/AntigravityProvider.jsx';

export const metadata = {
  title: 'Punto Chocolate',
  description: 'Heladería & Chocolatería artesanal en Villa la Angostura',
  icons: {
    icon: '/images/chocolateria-ref.jpg',
  },
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