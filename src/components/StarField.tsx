import React, { useEffect, useRef } from 'react';

const StarField = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createStar = () => {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.setProperty('--duration', `${2 + Math.random() * 4}s`);
      star.style.width = `${1 + Math.random() * 2}px`;
      star.style.height = star.style.width;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      return star;
    };

    const createShootingStar = () => {
      const star = document.createElement('div');
      star.className = 'shooting-star';
      star.style.setProperty('--delay', `${Math.random() * 10}s`);
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 40}%`;
      return star;
    };

    // Create initial stars
    for (let i = 0; i < 100; i++) {
      container.appendChild(createStar());
    }

    // Create shooting stars
    for (let i = 0; i < 5; i++) {
      container.appendChild(createShootingStar());
    }

    // Cleanup
    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ overflow: 'hidden' }}
    />
  );
};

export default StarField;