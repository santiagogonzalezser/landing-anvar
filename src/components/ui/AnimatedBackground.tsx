import React, { useState, useEffect } from 'react';
import { MousePosition } from '@/types';

interface AnimatedBackgroundProps {
  mousePosition: MousePosition;
  scrollY: number;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  mousePosition,
  scrollY,
}) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full blur-3xl transition-all duration-1000"
        style={{
          left: Math.max(0, Math.min(mousePosition.x / 15, windowWidth - 384)),
          top: mousePosition.y / 15 + scrollY / 5,
          backgroundColor: 'rgba(142, 128, 102, 0.1)',
        }}
      />
      <div
        className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-80 md:h-80 rounded-full blur-3xl animate-pulse"
        style={{
          transform: `translateY(${scrollY / 8}px)`,
          backgroundColor: 'rgba(142, 128, 102, 0.05)'
        }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-28 h-28 sm:w-44 sm:h-44 md:w-72 md:h-72 rounded-full blur-3xl animate-pulse delay-1000"
        style={{
          transform: `translateY(${-scrollY / 6}px)`,
          backgroundColor: 'rgba(142, 128, 102, 0.08)'
        }}
      />
    </div>
  );
};