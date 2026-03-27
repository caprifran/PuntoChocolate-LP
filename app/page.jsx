import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Sabores from './components/Sabores/Sabores.jsx';
import Chocolateria from './components/Chocolateria/Chocolateria.jsx';
import About from './components/About/About.jsx';
import WhatsAppFloat from './components/WhatsAppFloat/WhatsAppFloat.jsx';
import Footer from './components/Footer/Footer.jsx';
import Helados from './components/Sabores/Helados.jsx';

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Helados />
      <Chocolateria />
      <About />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
