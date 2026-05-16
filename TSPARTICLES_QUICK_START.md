# tsparticles Quick Start for Astro

Get particles.js working in Astro in 5 minutes.

## Installation

```bash
pnpm add tsparticles --ignore-scripts
```

## Option 1: Simple Background Particles (Recommended for Most Uses)

### Step 1: Create Component
Already created at: `/src/components/ParticlesBackground.astro`

### Step 2: Add to Your Layout

Edit your layout file (e.g., `/src/layouts/Layout.astro`):

```astro
---
import ParticlesBackground from "../components/ParticlesBackground.astro";
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My Site</title>
  </head>
  <body>
    <!-- Particles render as background -->
    <ParticlesBackground />
    
    <!-- Your content -->
    <main>
      <slot />
    </main>

    <style>
      body {
        margin: 0;
        padding: 0;
        background-color: #0a0e27;
      }

      main {
        position: relative;
        z-index: 1;  /* Ensures content is above particles */
      }
    </style>
  </body>
</html>
```

### Step 3: Use the Layout

```astro
---
import Layout from "../layouts/Layout.astro";
---

<Layout>
  <h1>Hello World</h1>
  <p>This content is above the particles background!</p>
</Layout>
```

Done! You now have interactive hexagon particles in the background.

## Option 2: Customizable Particles

Use `ParticlesCustom.astro` for control over colors and behavior:

```astro
---
import ParticlesCustom from "../components/ParticlesCustom.astro";
---

<ParticlesCustom 
  config={{
    particleCount: 120,
    particleColor: "#00ff88",
    particleSize: 4,
    linkDistance: 200,
    moveSpeed: 3,
  }}
/>
```

Available config options:
- `particleCount` - Number of particles (30-200 recommended)
- `particleColor` - Hex color code
- `particleSize` - Base size in pixels
- `linkDistance` - How far particles connect (150-300)
- `moveSpeed` - Movement speed (1-5)

## Option 3: Particles with Emitters

For directional particle flows from specific points:

```astro
---
import ParticlesWithEmitters from "../components/ParticlesWithEmitters.astro";
---

<ParticlesWithEmitters />
```

This creates particles flowing from top and bottom center of the screen.

Modify emitter positions in the component:

```javascript
emitters: [
  {
    position: { x: 50, y: 10 },   // 50% from left, 10% from top
    direction: "bottom",           // Flow downward
    rate: { delay: 0.25, quantity: 2 },
  },
  {
    position: { x: 50, y: 90 },   // Bottom center
    direction: "top",
    rate: { delay: 0.25, quantity: 2 },
  },
]
```

## Troubleshooting

**Particles not visible?**
- Check browser console (F12) for errors
- Verify z-index: -1 is set in config
- Make sure content has position: relative; z-index: 1;

**Content not clickable?**
- Ensure pointer-events: none is on #tsparticles
- Check z-index layering

**Performance issues?**
- Reduce particleCount to 30-50
- Set links.enable: false to disable connecting lines
- Disable interactivity modes if not needed

**Particles look wrong?**
- Verify particleColor matches background
- Try adjusting size and opacity values

## Color Presets

Popular color combinations:

```javascript
// Purple/Blue (Professional)
particleColor: "#a0a0ff"

// Cyan (Modern)
particleColor: "#00ffff"

// Green (Tech)
particleColor: "#00ff88"

// White (Classic)
particleColor: "#ffffff"

// Orange (Warm)
particleColor: "#ff9500"
```

## Performance Tips

1. **Reduce on Mobile**
```javascript
const particleCount = window.innerWidth < 768 ? 30 : 80;
```

2. **Disable Links**
```javascript
links: {
  enable: false,  // Removes connection lines
}
```

3. **Limit Interactions**
```javascript
interactivity: {
  modes: {
    repulse: { /* hover effect */ },
    // Remove push mode if not needed
  }
}
```

4. **Cap Frame Rate**
```javascript
fpsLimit: 45,  // Instead of 60
```

## Next Steps

1. Try `/particles-demo` route to see it in action
2. Adjust colors to match your brand
3. Fine-tune particle count for your device
4. Experiment with different shapes (triangle, square, star)

For advanced customization, see `TSPARTICLES_INTEGRATION_GUIDE.md`

---

Need help? Check the component comments for detailed configuration options.
