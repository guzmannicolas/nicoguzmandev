# TSparticles Integration Guide for Astro

This guide shows how to integrate tsparticles (particles.js) in your Astro project as a background effect.

## Installation

```bash
pnpm add tsparticles tsparticles-slim
```

## Options

### Option 1: Basic Astro Component (Recommended for Astro)

**File:** `src/components/ParticlesBackground.astro`

This is the simplest approach - uses native Astro syntax with client-side script.

**Usage in Layout:**
```astro
---
import ParticlesBackground from '../components/ParticlesBackground.astro';
---

<html>
  <body>
    <ParticlesBackground />
    <!-- Rest of your content -->
  </body>
</html>
```

**Pros:**
- Pure Astro component
- No framework overhead
- Minimal dependencies
- Easy to customize inline

**Cons:**
- Script runs on every page load (mitigated with `window.particlesInitialized` check)

### Option 2: Advanced Astro Component with Props

**File:** `src/components/ParticlesAdvanced.astro`

Includes support for custom properties, hexagon emitter paths, and configurable parameters.

**Usage:**
```astro
<ParticlesAdvanced
  particleColor="#3b82f6"
  particleCount={80}
  emitterCount={3}
  enableInteractivity={true}
/>
```

**Features:**
- Customizable particle color
- Adjustable particle count
- Hexagon-based emitter positioning
- Toggle interactivity
- Particle attraction/repulsion

### Option 3: React Component (if you add React to Astro)

**File:** `src/components/ParticlesClient.tsx`

This component works if you integrate React with Astro.

**First, add React to your project:**
```bash
pnpm add react react-dom
# Then update astro.config.mjs to include @astrojs/react
```

**Usage in Astro:**
```astro
---
import ParticlesClient from '../components/ParticlesClient';
---

<ParticlesClient client:only="react"
  particleColor="#3b82f6"
  particleCount={80}
  interactive={true}
/>
```

## Configuration Reference

### Basic Particle Settings

```javascript
{
  particles: {
    number: {
      value: 80,                    // Number of particles
      density: {
        enable: true,
        value_area: 800,            // Spacing density
      },
    },
    color: {
      value: '#3b82f6',             // Single color or array of colors
    },
    shape: {
      type: 'circle',               // Can be: circle, square, triangle, image, polygon, star, etc.
    },
    size: {
      value: {
        min: 1,
        max: 5,
      },
    },
    opacity: {
      value: 0.5,
      animation: {
        enable: true,
        speed: 1,
      },
    },
    move: {
      enable: true,
      speed: {
        min: -2,
        max: 2,
      },
      direction: 'none',            // none, top, top-right, right, bottom-right, bottom, bottom-left, left, top-left
      outModes: {
        default: 'bounce',          // bounce, out, split, destroy, none
      },
    },
  }
}
```

### Interactivity Settings

```javascript
{
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: 'repulse',            // repulse, attract, bubble, etc.
      },
      onClick: {
        enable: true,
        mode: 'push',               // push, remove, repulse, bubble, etc.
      },
    },
    modes: {
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        quantity: 4,
      },
    },
  }
}
```

### Emitter Configuration (for advanced patterns)

```javascript
{
  emitters: [
    {
      position: {
        x: 50,                      // Percentage (0-100)
        y: 50,
      },
      rate: {
        delay: 0,                   // Delay in seconds
        quantity: 2,                // Particles per emission
      },
    },
    // Add more emitters for different positions
  ]
}
```

## Hexagon Path Pattern

The advanced component automatically calculates hexagon vertex positions:

```typescript
const getHexagonPoints = (centerX, centerY, radius) => {
  const points = [];
  for (let i = 0; i < 6; i++) {
    const angle = (i * Math.PI) / 3;
    points.push({
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    });
  }
  return points;
};
```

Place emitters at these hexagon points for a radial pattern.

## Best Practices for Background Effects

### 1. Keep pointer-events: none
Ensures particles don't block clickable content.

### 2. Use fixed positioning
Keeps particles visible as user scrolls.

### 3. Optimize particle count
- Desktop: 80-150 particles
- Mobile: 30-60 particles
- Balance between visual impact and performance

### 4. Use lazy loading
Import ParticlesBackground only when needed:

```astro
---
import { lazy } from 'astro:components';
const ParticlesBackground = lazy(() => import('../components/ParticlesBackground.astro'));
---
```

### 5. Performance optimization
Add this to your tailwind config or global CSS to ensure proper z-index stacking:

```css
body {
  position: relative;
}

.particles-background {
  pointer-events: none;
}

main {
  position: relative;
  z-index: 1;
}
```

### 6. Dark/Light theme support
Adjust colors based on theme:

```astro
---
const theme = Astro.cookies.get('theme')?.value || 'dark';
const particleColor = theme === 'dark' ? '#3b82f6' : '#1e40af';
---

<ParticlesAdvanced particleColor={particleColor} />
```

## Troubleshooting

### Particles not appearing
1. Check z-index: should be `0`, content should be `z-1` or higher
2. Verify container has 100% width/height
3. Check that `pointer-events: none` is set
4. Ensure tsparticles is properly installed

### Performance issues
1. Reduce particle count
2. Disable animations on opacity/size
3. Reduce interactivity distance
4. Use `value_area` density instead of fixed number

### Initialization conflicts
Each component uses a flag to prevent multiple initializations:
- `ParticlesBackground`: `window.particlesInitialized`
- `ParticlesAdvanced`: `window.particlesAdvancedInitialized`

If you use multiple particle components, they won't conflict.

## Custom SVG Path Particles

To create particles that follow an SVG hexagon path:

```javascript
{
  particles: {
    shape: {
      type: 'polygon',
      options: {
        polygon: {
          sides: 6,                  // Creates hexagon shape
        },
      },
    },
  },
  plugins: {
    pathMask: {
      enable: true,
      path: 'M 100,100 L 200,100 L 250,150 L 200,200 L 100,200 L 50,150 Z', // SVG path
    },
  }
}
```

## Resources

- [TSparticles Documentation](https://particles.js.org/)
- [TSparticles GitHub](https://github.com/tsparticles/tsparticles)
- [Configuration Examples](https://particles.js.org/docs/interfaces/Options.html)

## Next Steps

1. Choose your integration option (Basic, Advanced, or React)
2. Install tsparticles: `pnpm add tsparticles tsparticles-slim`
3. Create the component based on your choice
4. Add to your layout or specific pages
5. Customize colors, count, and interactivity to match your design
6. Test performance on mobile devices
