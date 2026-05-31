# tsparticles Integration Guide for Astro

Complete guide to integrating tsparticles (particles.js) in your Astro project with hexagon particles and emitters.

## Installation

```bash
pnpm add tsparticles --ignore-scripts
```

Note: Use `--ignore-scripts` flag to skip the post-install script that may cause dependency issues.

## Components Created

### 1. ParticlesBackground.astro (Basic)
Simple particles component with hexagon shapes and interactivity.

**Features:**
- Hexagon-shaped particles
- Linking between nearby particles
- Hover repulse effect
- Click to add particles
- Fixed fullscreen background
- Transparent background for blending

**Usage:**
```astro
---
import ParticlesBackground from "../components/ParticlesBackground.astro";
---

<ParticlesBackground />
<main>Your content here</main>
```

### 2. ParticlesCustom.astro (Configurable)
Advanced particles component accepting custom configuration via props.

**Configuration Options:**
```astro
interface Props {
  config?: {
    particleCount?: number;      // Default: 80
    particleColor?: string;       // Default: "#ffffff"
    particleSize?: number;        // Default: 3
    linkDistance?: number;        // Default: 150
    moveSpeed?: number;           // Default: 2
  };
}
```

**Usage:**
```astro
---
import ParticlesCustom from "../components/ParticlesCustom.astro";
---

<ParticlesCustom 
  config={{
    particleCount: 120,
    particleColor: "#00ff88",
    moveSpeed: 3
  }}
/>
```

### 3. ParticlesWithEmitters.astro (Advanced)
Particles spawning from specific points (emitters) instead of scattered randomly.

**Features:**
- Two emitters (top center and bottom center)
- Particles spawn and flow in specified directions
- Life cycle management
- Perfect for directional effects

**Customization:**
Modify the `emitters` array to change:
- `position.x`, `position.y` - Emitter location (0-100 percent)
- `direction` - Particle flow direction (top, bottom, left, right)
- `rate.quantity` - Particles per spawn
- `rate.delay` - Time between spawns

### 4. LayoutWithParticles.astro
Layout component that automatically includes particles background.

**Usage:**
```astro
---
import LayoutWithParticles from "../layouts/LayoutWithParticles.astro";
---

<LayoutWithParticles title="Page Title">
  <h1>Your content</h1>
  <p>Will render above particles</p>
</LayoutWithParticles>
```

## Key Implementation Details

### Why pointer-events: none?
```css
#tsparticles {
  pointer-events: none;  /* Allows clicks to pass through to content below */
}
```

### Why z-index: -1?
```javascript
fullScreen: {
  enable: true,
  zIndex: -1,  // Renders behind all content
},
```

### Async Loading
Particles load asynchronously to prevent blocking page render:
```javascript
(async () => {
  await loadSlim(tsParticles);
  await tsParticles.load("tsparticles", config);
})();
```

## Configuration Deep Dive

### Particle Shape (Hexagon)
```javascript
shape: {
  type: "polygon",
  polygon: {
    sides: 6,  // 6 = hexagon, 3 = triangle, 4 = square, etc.
  },
}
```

### Opacity Animation
```javascript
opacity: {
  value: 0.5,
  animation: {
    enable: true,
    minimumValue: 0.1,
    speed: 1,
    startValue: "max",    // Start at max opacity
    destroy: "min",       // Remove when opacity hits min
  },
}
```

### Interactivity Modes
- `repulse`: Pushes particles away on hover
- `push`: Adds new particles on click
- `grab`: Attracts particles toward mouse
- `bubble`: Magnifies particles near mouse

### Link Configuration
```javascript
links: {
  enable: true,
  distance: 150,        // Max distance to create links
  color: "#ffffff",
  opacity: 0.4,
  width: 1,
}
```

## Performance Optimization

1. **Use tsparticles-slim**
   - Smaller bundle than full tsparticles
   - Sufficient for most use cases

2. **Adjust particle count**
   - Reduce on mobile (detect with `window.innerWidth`)
   - Start with 50-100, adjust based on performance

3. **Disable unused features**
   - Set `links.enable: false` if not needed
   - Limit interactivity to essential modes only

4. **Use detectRetina: true**
   - Scales particles appropriately for high-DPI displays

5. **FPS Limit**
   - Set `fpsLimit: 60` to cap at 60fps

## Mobile Considerations

```javascript
const isMobile = window.innerWidth < 768;
const particleCount = isMobile ? 30 : 80;

await tsParticles.load("tsparticles", {
  particles: {
    number: { value: particleCount },
    // ... rest of config
  },
});
```

## Troubleshooting

### Particles not showing
1. Check z-index is -1 (behind content)
2. Verify container div with id="tsparticles" exists
3. Check browser console for errors
4. Ensure tsparticles-slim is loaded with `loadSlim()`

### Content not clickable
- Make sure `pointer-events: none` is set on #tsparticles
- Ensure content has `position: relative; z-index: 1` or higher

### Performance issues
- Reduce particle count
- Disable links
- Remove opacity animation
- Disable interactivity modes

### Particles bouncing off edges strangely
- Adjust `outModes` property
- Options: "bounce", "out", "in", "destroy"

## Advanced: Custom Presets

Create reusable particle configurations:

```javascript
// particleConfigs.js
export const configs = {
  minimal: {
    particleCount: 30,
    particleColor: "#ffffff",
    moveSpeed: 1,
  },
  
  aggressive: {
    particleCount: 150,
    particleColor: "#00ff88",
    moveSpeed: 3,
  },
  
  professional: {
    particleCount: 80,
    particleColor: "#a0a0ff",
    moveSpeed: 1.5,
  },
};
```

## Browser Support

tsparticles supports:
- Chrome/Chromium (all versions)
- Firefox (all versions)
- Safari 10+
- Edge (all versions)

Mobile browsers fully supported.

## Resources

- [tsparticles GitHub](https://github.com/tsparticles/tsparticles)
- [Configuration Documentation](https://particles.js.org/docs/)
- [Shape Types Reference](https://particles.js.org/docs/options/particles/shape)
- [Presets Library](https://github.com/tsparticles/presets)

## Common Patterns

### Hero Section with Particles
```astro
<div style="position: relative; z-index: 1;">
  <ParticlesBackground />
  <section style="text-align: center; padding: 100px 20px;">
    <h1>Your Hero Title</h1>
    <p>With particles background</p>
  </section>
</div>
```

### Multiple Sections
```astro
<ParticlesBackground /> {/* Only one, rendered behind everything */}
<section>Section 1</section>
<section>Section 2</section>
<section>Section 3</section>
```

### Dark Mode Toggle
```javascript
// Update config based on theme
const isDark = document.documentElement.classList.contains('dark');
const particleColor = isDark ? "#ffffff" : "#000000";
```
