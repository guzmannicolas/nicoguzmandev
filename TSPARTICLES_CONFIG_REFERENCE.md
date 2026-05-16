# TSparticles Complete Configuration Reference

## All Configuration Files Created

Your project now includes:

1. **ParticlesBackground.astro** - Basic particles component
2. **ParticlesAdvanced.astro** - Advanced with props and emitters
3. **ParticlesHexagon.astro** - Specialized hexagon pattern
4. **ParticlesClient.tsx** - React component version

## Component Comparison

| Feature | Basic | Advanced | Hexagon | React |
|---------|-------|----------|---------|-------|
| Customizable Colors | ❌ | ✅ | ✅ | ✅ |
| Customizable Count | ❌ | ✅ | ✅ | ✅ |
| Emitters | ❌ | ✅ | ✅ (Hexagon) | ✅ |
| Interactivity | ✅ | ✅ | ✅ | ✅ |
| Props Support | ❌ | ✅ | ✅ | ✅ |
| Astro Native | ✅ | ✅ | ✅ | ❌ |
| Framework Agnostic | ✅ | ✅ | ✅ | ❌ |

## Quick Usage Reference

### Basic Particles
```astro
<ParticlesBackground />
```
- 80 particles
- Blue color (#3b82f6)
- Interactive hover and click
- No configuration options

### Advanced Particles
```astro
<ParticlesAdvanced 
  particleColor="#3b82f6"      {/* Color value or array */}
  particleCount={80}           {/* 30-200 recommended */}
  emitterCount={3}             {/* Number of emitter points */}
  enableInteractivity={true}   {/* true or false */}
/>
```
- Hexagon emitter pattern
- Full customization
- Props-based configuration
- Particle attraction enabled

### Hexagon Particles
```astro
<ParticlesHexagon 
  particleColor="#3b82f6"                    {/* Color */}
  particleCount={100}                        {/* Count */}
  hexagonSize="large"                        {/* small|medium|large */}
  flowTowardCenter={true}                    {/* Flow direction */}
  emitterIntensity="medium"                  {/* low|medium|high */}
/>
```
- Specialized for geometric patterns
- Emitters positioned at hexagon vertices
- Optional center-flow attraction
- Debug visualization available

### React Component
```tsx
<ParticlesClient 
  particleColor="#3b82f6"
  particleCount={80}
  interactive={true}
  hexagonMode={false}
/>
```

## Installation Steps

```bash
# Step 1: Install tsparticles
pnpm add tsparticles tsparticles-slim

# Step 2: Use in your layout or pages
# See INTEGRATION_EXAMPLE.md

# Step 3: (Optional) Add React for React component
pnpm add react react-dom
```

## Particle Configuration Deep Dive

### Shape Options
```javascript
shape: {
  type: 'circle',              // Recommended for performance
  // Other options:
  // 'square', 'triangle', 'polygon', 'star', 'image', 'char'
}
```

### Color Options

Single color:
```javascript
color: { value: '#3b82f6' }
```

Array of colors:
```javascript
color: { value: ['#3b82f6', '#8b5cf6', '#6366f1'] }
```

HSL color:
```javascript
color: {
  value: {
    hsl: {
      h: 200,  // Hue (0-360)
      s: 60,   // Saturation (0-100)
      l: 50,   // Lightness (0-100)
    },
  },
}
```

RGB with animation:
```javascript
color: {
  value: '#3b82f6',
  animation: {
    enable: true,
    speed: 20,
    sync: true,
  },
}
```

### Size Animation

Static size:
```javascript
size: { value: 3 }
```

Random size range:
```javascript
size: {
  value: { min: 1, max: 5 },
  random: { enable: true, minimumValue: 1 },
}
```

Animated size:
```javascript
size: {
  value: { min: 2, max: 8 },
  animation: {
    enable: true,
    speed: 2,
    minimumValue: 1,
    sync: false,
  },
}
```

### Movement Patterns

Straight line:
```javascript
move: {
  enable: true,
  speed: 2,
  straight: true,
  direction: 'right',
}
```

Random direction:
```javascript
move: {
  enable: true,
  speed: { min: 1, max: 3 },
  direction: 'none',
  random: true,
  straight: false,
}
```

Toward center:
```javascript
move: {
  enable: true,
  speed: 2,
  direction: 'center',
  attract: {
    enable: true,
    rotateX: 300,
    rotateY: 300,
  },
}
```

### Particle Boundaries

Bounce off edges:
```javascript
move: {
  outModes: {
    default: 'bounce',
  },
}
```

Other options:
- `'bounce'` - Bounce back from edges
- `'out'` - Leave canvas (disappear)
- `'split'` - Split into new particles
- `'destroy'` - Remove from system
- `'none'` - No effect

### Opacity Animation

Fade effect:
```javascript
opacity: {
  value: 0.5,
  random: { enable: true, minimumValue: 0.2 },
  animation: {
    enable: true,
    speed: 1,
    minimumValue: 0.1,
    sync: false,
  },
}
```

### Interactivity Modes

Repulse (push away):
```javascript
interactivity: {
  events: {
    onHover: { enable: true, mode: 'repulse' },
  },
  modes: {
    repulse: {
      distance: 200,
      duration: 0.4,
    },
  },
}
```

Attract (pull in):
```javascript
modes: {
  attract: {
    distance: 200,
    duration: 0.4,
  },
}
```

Push (add particles):
```javascript
interactivity: {
  events: {
    onClick: { enable: true, mode: 'push' },
  },
  modes: {
    push: {
      quantity: 4,
    },
  },
}
```

Bubble (enlarge):
```javascript
modes: {
  bubble: {
    distance: 200,
    size: 8,
    duration: 0.3,
  },
}
```

### Emitter Configuration

Single emitter:
```javascript
emitters: [
  {
    position: {
      x: 50,  // Percentage (0-100)
      y: 50,  // Percentage (0-100)
    },
    rate: {
      delay: 0,     // Delay in seconds
      quantity: 2,  // Particles per emission
    },
    life: {
      count: 0,     // 0 = infinite
      duration: 0,  // Lifetime in seconds
    },
  },
]
```

Multiple emitters:
```javascript
emitters: [
  { position: { x: 25, y: 50 }, rate: { quantity: 2 } },
  { position: { x: 75, y: 50 }, rate: { quantity: 2 } },
  { position: { x: 50, y: 25 }, rate: { quantity: 1 } },
  { position: { x: 50, y: 75 }, rate: { quantity: 1 } },
]
```

## Performance Tips

### Heavy Load (100+ particles)
- Disable opacity animation
- Disable size animation
- Reduce update frequency
- Increase value_area in density

### Moderate Load (50-100 particles)
- Keep animations enabled
- Use moderate interaction distance
- Standard density value_area

### Light Load (20-50 particles)
- All features enabled
- Interactive is fine
- Can have multiple emitters

### Mobile Optimization
```javascript
{
  particles: {
    number: { value: 30 },  // Reduced
    size: { value: { min: 2, max: 4 } },  // Smaller
  },
  interactivity: {
    events: {
      onHover: { enable: false },  // Disable hover on mobile
      onClick: { enable: false },
    },
  },
}
```

## Debugging

Enable debug visualization in ParticlesHexagon:

```astro
<!-- Change this from -->
if (false) {
  // Enable visualization
}

<!-- To -->
if (true) {
  // Enable visualization
}
```

This draws the hexagon outline and emitter points.

## Common Configurations

### Galaxy/Space Effect
```javascript
{
  particles: {
    shape: { type: 'circle' },
    color: { value: ['#00ff00', '#00ff88', '#00ffff'] },
    opacity: { value: 0.7 },
    size: { value: { min: 1, max: 3 } },
    move: {
      speed: { min: 0.5, max: 1.5 },
      direction: 'none',
      random: true,
      attract: { enable: true, rotateX: 600, rotateY: 1200 },
    },
  },
  emitters: Array(8).fill(null).map((_, i) => ({
    position: {
      x: 10 + i * 12.5,
      y: Math.random() * 100,
    },
    rate: { quantity: 1 },
  })),
}
```

### Fireflies Effect
```javascript
{
  particles: {
    shape: { type: 'circle' },
    color: { value: '#ffff00' },
    opacity: {
      value: 0.3,
      animation: {
        enable: true,
        speed: 1,
        minimumValue: 0,
      },
    },
    size: { value: { min: 2, max: 4 } },
    move: {
      speed: { min: 0.5, max: 1 },
      direction: 'none',
      random: true,
      straight: false,
    },
  },
}
```

### Tech Nodes Effect
```javascript
{
  particles: {
    shape: { type: 'circle' },
    color: { value: '#3b82f6' },
    opacity: { value: { min: 0.5, max: 1 } },
    size: { value: { min: 2, max: 5 } },
    move: {
      speed: { min: 1, max: 2 },
      direction: 'center',
      attract: { enable: true, rotateX: 300, rotateY: 300 },
    },
  },
  interactivity: {
    events: {
      onHover: { mode: 'repulse' },
      onClick: { mode: 'push' },
    },
    modes: {
      repulse: { distance: 150 },
      push: { quantity: 3 },
    },
  },
}
```

### Gentle Float Effect
```javascript
{
  particles: {
    shape: { type: 'circle' },
    color: { value: '#8b5cf6' },
    opacity: { value: 0.4 },
    size: { value: { min: 3, max: 6 } },
    move: {
      speed: { min: 0.1, max: 0.5 },
      direction: 'top',
      random: true,
      straight: false,
      outModes: { default: 'out' },
    },
  },
}
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (modern versions)

## Known Limitations

1. Large particle counts (300+) may impact performance on mobile
2. Complex emitter patterns with physics can be computationally expensive
3. SVG paths require additional plugin loading
4. Animated colors have slight performance impact

## Resources

- [TSparticles Docs](https://particles.js.org/)
- [Configuration Preset Examples](https://particles.js.org/docs/interfaces/IOptions.html)
- [GitHub Examples](https://github.com/tsparticles/tsparticles/tree/main/websites/www/public/samples)
- [Interactive Playground](https://particles.js.org/demo/)
