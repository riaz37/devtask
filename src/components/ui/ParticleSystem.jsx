'use client';

import { useEffect, useRef } from 'react';

const ParticleSystem = ({ count = 50, className = '' }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    const particleCount = isMobile ? Math.floor(count / 2) : count;
    
    // Create particles dynamically
    const container = containerRef.current;
    if (!container) return;

    // Clear existing particles
    container.innerHTML = '';

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute w-1 h-1 bg-white/60 rounded-full animate-float';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 20}s`;
      particle.style.animationDuration = `${Math.random() * 10 + 15}s`;
      
      container.appendChild(particle);
    }
  }, [count]);

  return (
    <div className={`absolute inset-0 pointer-events-none z-10 ${className}`} ref={containerRef} />
  );
};

export default ParticleSystem; 