'use client';

import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Chocolateria from './components/Chocolateria/Chocolateria.jsx';
import Alfajores from './components/Alfajores/Alfajores.jsx';
import About from './components/About/About.jsx';
import WhatsAppFloat from './components/WhatsAppFloat/WhatsAppFloat.jsx';
import Footer from './components/Footer/Footer.jsx';
import Helados from './components/Helados/Helados.jsx';

export default function Page() {
  return (
    <main className="flex flex-col w-full relative min-h-screen">
      <Navbar />
      <Hero />
      <div className="flex flex-col w-full gap-3">
        <Helados />
        <Chocolateria />
        <Alfajores />
        <About />
        <Footer />
      </div>

      {/* 0g Modals / Fixed floating elements */}
      <WhatsAppFloat />
    </main>
  );
}
