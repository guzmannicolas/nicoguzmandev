# Nicolás Guzmán Dev - Portafolio Profesional

Sitio web profesional para vender servicios de Diseño, Programación, Automatización y ERP a medida.

## Características

- ✨ **Multilenguaje**: Soporte para Español e Inglés
- 🎨 **Diseño Moderno**: Interfaz limpia y profesional
- 📱 **Responsive**: Totalmente adaptado para móvil
- ⚡ **Rápido**: Construido con Astro para máximo rendimiento
- 🎯 **SEO Optimizado**: Listo para indexación en buscadores
- 💼 **Contenido Estático**: Fácil de mantener y actualizar

## Stack Tecnológico

- **Framework**: Astro 5.1
- **Estilos**: Tailwind CSS 3.4
- **Package Manager**: pnpm 8.15
- **Node**: 18+

## Estructura del Proyecto

```
src/
├── layouts/
│   └── Layout.astro          # Layout principal
├── components/
│   ├── Navigation.astro      # Navegación
│   ├── Footer.astro          # Pie de página
│   └── ServiceCard.astro     # Tarjeta de servicio
├── pages/
│   ├── index.astro           # Inicio (Español)
│   ├── servicios.astro       # Servicios (Español)
│   ├── portafolio.astro      # Portafolio (Español)
│   ├── contacto.astro        # Contacto (Español)
│   └── en/
│       ├── index.astro       # Home (English)
│       ├── services.astro    # Services (English)
│       ├── portfolio.astro   # Portfolio (English)
│       └── contact.astro     # Contact (English)
├── i18n/
│   ├── es.json              # Traducciones español
│   └── en.json              # Traducciones inglés
└── styles/
    └── global.css           # Estilos globales
```

## Instalación

```bash
# Instalar dependencias con pnpm
pnpm install

# Iniciar servidor de desarrollo
pnpm dev

# Construir para producción
pnpm build

# Vista previa de producción
pnpm preview
```

## Secciones del Sitio

### Español
- `/` - Página de inicio
- `/servicios` - Descripción detallada de servicios
- `/portafolio` - Galería de proyectos
- `/contacto` - Formulario de contacto

### English
- `/en/` - Home
- `/en/services` - Services description
- `/en/portfolio` - Projects gallery
- `/en/contact` - Contact form

## Cambios Frecuentes

### Actualizar contacto
Edita los archivos en `src/i18n/` para cambiar emails, teléfono, etc.

### Agregar proyectos
Modifica la array `projects` en:
- `src/pages/portafolio.astro` (Español)
- `src/pages/en/portfolio.astro` (English)

### Cambiar colores
Edita `tailwind.config.mjs` en la sección `colors`.

## Deployment

El sitio está optimizado para ser desplegado en:
- Vercel
- Netlify
- GitHub Pages
- Cualquier servidor estático

```bash
# Genera los archivos estáticos
pnpm build

# Los archivos están listos en la carpeta `dist/`
```

## SEO

El sitio incluye:
- Meta tags adecuados
- URLs amigables
- Sitemap automático (generable con plugins)
- Robots.txt (recomendado crear)

## Futuras Mejoras

- [ ] Formulario de contacto funcional
- [ ] Blog o case studies
- [ ] Sección de precios
- [ ] Testimonios de clientes
- [ ] Sistema de reserva de citas
- [ ] Integración con CMS

## Licencia

Privado - Nicolás Guzmán Dev
