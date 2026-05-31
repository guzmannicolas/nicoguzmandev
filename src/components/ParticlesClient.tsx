import React, { useEffect, useRef } from 'react';
import { tsParticles } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

interface ParticlesClientProps {
  particleColor?: string;
  particleCount?: number;
  interactive?: boolean;
  hexagonMode?: boolean;
}

export default function ParticlesClient({
  particleColor = '#3b82f6',
  particleCount = 80,
  interactive = true,
  hexagonMode = false,
}: ParticlesClientProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    const initParticles = async () => {
      if (initialized.current || !containerRef.current) return;

      initialized.current = true;

      try {
        await loadSlim(tsParticles);

        const containerElement = containerRef.current;
        const containerId = `particles-${Date.now()}`;
        containerElement.id = containerId;

        const config = {
          particles: {
            number: {
              value: particleCount,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: particleColor,
            },
            shape: {
              type: 'circle',
            },
            opacity: {
              value: 0.5,
              random: {
                enable: true,
                minimumValue: 0.2,
              },
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false,
              },
            },
            size: {
              value: {
                min: 1,
                max: 5,
              },
              random: {
                enable: true,
                minimumValue: 1,
              },
            },
            move: {
              enable: true,
              speed: {
                min: -2,
                max: 2,
              },
              direction: 'none',
              random: false,
              straight: false,
              outModes: {
                default: 'bounce',
              },
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: interactive,
                mode: 'repulse',
              },
              onClick: {
                enable: interactive,
                mode: 'push',
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
          },
          background: {
            color: 'transparent',
          },
        };

        await tsParticles.load(containerId, config);
      } catch (error) {
        console.error('Error initializing particles:', error);
      }
    };

    initParticles();
  }, [particleColor, particleCount, interactive]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    />
  );
}
