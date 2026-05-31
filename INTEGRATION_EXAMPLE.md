# Integration Example: Using Particles in Your Project

## Quick Start

### Step 1: Install the library
```bash
pnpm add tsparticles tsparticles-slim
```

### Step 2: Choose your approach

You have three components ready to use:

#### Option A: Basic Particles (Simple, no props)
```bash
# Component: src/components/ParticlesBackground.astro
# Use this for basic animated particles with no customization needed
```

#### Option B: Advanced Particles (Recommended)
```bash
# Component: src/components/ParticlesAdvanced.astro
# Use this for customizable colors, counts, emitters, and interactivity
```

#### Option C: React Component (if adding React)
```bash
# Component: src/components/ParticlesClient.tsx
# Use this only if you add React to your Astro project
```

## Implementation in Your Layout

### Current Setup
Your `src/layouts/Layout.astro` currently uses `AnimatedBackground.astro` (SVG-based circuits).

You can either:
1. **Replace** AnimatedBackground with particles
2. **Keep both** for layered effects
3. **Use particles on specific pages** only

### Replace AnimatedBackground with Particles

Edit `src/layouts/Layout.astro`:

```astro
---
import '../styles/global.css';
import Navigation from '../components/Navigation.astro';
import Footer from '../components/Footer.astro';
import ParticlesAdvanced from '../components/ParticlesAdvanced.astro';

interface Props {
  title: string;
  description?: string;
  lang: 'es' | 'en';
}

const { title, description = 'Nicolás Guzmán Dev - Diseño, Programación, Automatización y ERP', lang } = Astro.props;
---

<!doctype html>
<html lang={lang}>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content={description} />
    <title>{title}</title>
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  </head>
  <body class="bg-primary text-gray-100 min-h-screen flex flex-col relative">
    <ParticlesAdvanced 
      particleColor="#3b82f6"
      particleCount={80}
      emitterCount={3}
      enableInteractivity={true}
    />
    <Navigation lang={lang} />
    <main class="flex-1 relative z-1">
      <slot />
    </main>
    <Footer lang={lang} />
  </body>
</html>
```

### Keep Both: Layered Effects

Stack particles with your circuit background for a more complex effect:

```astro
---
import '../styles/global.css';
import Navigation from '../components/Navigation.astro';
import Footer from '../components/Footer.astro';
import AnimatedBackground from '../components/AnimatedBackground.astro';
import ParticlesBackground from '../components/ParticlesBackground.astro';

interface Props {
  title: string;
  description?: string;
  lang: 'es' | 'en';
}

const { title, description = 'Nicolás Guzmán Dev - Diseño, Programación, Automatización y ERP', lang } = Astro.props;
---

<!doctype html>
<html lang={lang}>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content={description} />
    <title>{title}</title>
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  </head>
  <body class="bg-primary text-gray-100 min-h-screen flex flex-col relative">
    <!-- SVG circuit background (z-index: 0) -->
    <AnimatedBackground />
    
    <!-- Particles on top (z-index: 0, same layer) -->
    <ParticlesBackground />
    
    <Navigation lang={lang} />
    <main class="flex-1 relative z-1">
      <slot />
    </main>
    <Footer lang={lang} />
  </body>
</html>
```

### Page-Specific Particles

Use particles only on your homepage:

```astro
---
// src/pages/index.astro
import Layout from '../layouts/Layout.astro';
import ParticlesAdvanced from '../components/ParticlesAdvanced.astro';

const title = 'Nicolás Guzmán Dev';
const description = 'Diseño, Programación, Automatización y ERP';
---

<Layout title={title} description={description} lang="es">
  {/* Special particles just for homepage */}
  <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; pointer-events: none;">
    <ParticlesAdvanced 
      particleColor="#3b82f6"
      particleCount={100}
      emitterCount={5}
      enableInteractivity={true}
    />
  </div>

  {/* Your page content here */}
  <div style="position: relative; z-index: 1;">
    {/* ... */}
  </div>
</Layout>
```

## Color Schemes

### Blue (Current)
```astro
<ParticlesAdvanced particleColor="#3b82f6" />
```

### Purple
```astro
<ParticlesAdvanced particleColor="#8b5cf6" />
```

### Multi-color
In the component, change:
```javascript
color: {
  value: ['#3b82f6', '#8b5cf6', '#6366f1'],  // Array of colors
}
```

### Gradient Theme
```javascript
color: {
  value: {
    hsl: {
      h: 200,
      s: 60,
      l: 50,
    },
  },
}
```

## Performance Optimization

### For Mobile
```astro
<ParticlesAdvanced 
  particleCount={40}        {/* Reduced from 80 */}
  enableInteractivity={false} {/* Disable hover/click */}
/>
```

### For Desktop
```astro
<ParticlesAdvanced 
  particleCount={100}
  emitterCount={5}
  enableInteractivity={true}
/>
```

### Dynamic based on device
```astro
---
const isMobile = Astro.request?.headers.get('user-agent')?.includes('Mobile') || false;
const particleCount = isMobile ? 40 : 80;
---

<ParticlesAdvanced particleCount={particleCount} />
```

## CSS Updates Needed

Ensure your global CSS or tailwind config has proper z-index stacking:

```css
body {
  position: relative;
}

main {
  position: relative;
  z-index: 1;
}

/* Your content should be above particles */
.navbar {
  position: relative;
  z-index: 2;
}

.footer {
  position: relative;
  z-index: 1;
}
```

## Testing

1. **Development:**
   ```bash
   pnpm run dev
   ```
   Open http://localhost:3000 in your browser
   
2. **Visual checks:**
   - Particles appear behind content
   - Hover effects work (if enabled)
   - Click to create particles works (if enabled)
   - No layout shift or jank
   
3. **Performance:**
   - Open DevTools > Performance
   - Record a 5-second interaction
   - Check frame rate (aim for 60 FPS)
   - If dropping frames, reduce particle count

## Troubleshooting

### Particles not visible
1. Check browser console for errors
2. Verify tsparticles is installed: `pnpm ls tsparticles`
3. Check z-index: particles should be at z-index 0, content at z-index 1+
4. Check background color isn't opaque (should be transparent)

### Performance issues
1. Reduce `particleCount` (try 40-50 on mobile)
2. Disable `enableInteractivity` on mobile
3. Reduce emitter count
4. Monitor with DevTools Performance tab

### Conflicts with existing animations
Both `AnimatedBackground` (SVG) and `ParticlesAdvanced` can coexist:
- SVG has its own animation cycle
- Particles use separate tsParticles engine
- No conflicts expected

## Next Steps

1. Install: `pnpm add tsparticles tsparticles-slim`
2. Choose your integration method (A, B, or C)
3. Update your layout or specific pages
4. Test on desktop and mobile
5. Fine-tune colors and particle count to match your design
6. Deploy and monitor performance
