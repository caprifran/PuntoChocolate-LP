# Punto Chocolate 🍫

Landing page para **Punto Chocolate**, heladería y chocolatería artesanal ubicada en Villa la Angostura, Neuquén.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)

## Vista previa

El sitio incluye las siguientes secciones:

- **Navbar** — Navegación principal
- **Hero** — Banner de presentación
- **Helados** — Carrusel de sabores con movimiento constante (marquee), loop infinito garantizado y controles laterales externos en escritorio.
- **Chocolatería** — Catálogo de productos de chocolatería
- **Alfajores** — Catálogo de alfajores artesanales con carrusel por tipo
- **About** — Historia y filosofía del local
- **Footer** — Información de contacto y redes sociales
- **WhatsApp Float** — Botón flotante para contacto directo

## Tecnologías

| Tecnología | Uso |
|---|---|
| **Next.js 16** | Framework React con App Router |
| **React 19** | Librería de UI |
| **Tailwind CSS 4** | Estilos utilitarios y Layout fluido |
| **Framer Motion** | Animaciones de físicas interactivas |
| **Lenis Scroll** | Momentum nativo (Motor Antigravedad) |
| **Google Fonts** | Cormorant Garamond (Lujo) y Montserrat |
| **Embla Carousel** | Carrusel con AutoScroll Plugin (Efecto Marquee) |

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/PuntoChocolate-LP.git

# Entrar al directorio
cd PuntoChocolate-LP

# Instalar dependencias
npm install

# Iniciar en modo desarrollo
npm run dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Genera el build de producción |
| `npm start` | Inicia el servidor de producción |

## Estructura del proyecto

```
app/
├── layout.jsx          # Layout principal (App Router)
├── page.jsx            # Página de inicio fluida
├── font.js             # Definición de Typography (Montserrat/Cormorant)
├── components/
│   ├── AntigravityProvider/ # Motor Físico (Lenis) de renderizado
│   ├── About/          # Sección "Sobre nosotros"
│   ├── Carousel/       # Componentes del carrusel (Embla)
│   ├── Chocolateria/   # Sección de chocolatería
│   ├── Alfajores/      # Sección de alfajores artesanales
│   ├── Footer/         # Pie de página y contacto
│   ├── Hero/           # Banner principal
│   ├── Navbar/         # Barra de navegación
│   ├── Sabores/        # Sección de helados y sabores
│   └── WhatsAppFloat/  # Botón flotante de WhatsApp
public/
└── images/             # Imágenes estáticas
styles/
└── globals.css         # Estilos globales
```

## Licencia

ISC
