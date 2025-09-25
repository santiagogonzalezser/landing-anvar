import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export const HeroSection: React.FC = () => {
  return (
    <>
      {/* Logo and 360° Virtual Tour */}
      <section className="relative z-10 py-4 sm:py-6 md:py-8 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="text-center mb-4 sm:mb-6 md:mb-8">
            <Image
              src="/logo-aria-transparent.png"
              alt="ARIA 93 Logo"
              width={240}
              height={154}
              className="mx-auto h-16 sm:h-20 md:h-24 lg:h-28 object-contain"
            />
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mt-3 sm:mt-4 px-2" style={{ color: '#a69373' }}>
              El nuevo ícono de Bogotá que marcará un antes y un después en el Parque de la 93
            </h2>
          </div>

          {/* 360° Virtual Tour */}
          <div className="w-full aspect-video max-w-full overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl">
            <iframe
              className="ku-embed w-full h-full"
              frameBorder="0"
              allow="xr-spatial-tracking; gyroscope; accelerometer"
              allowFullScreen
              scrolling="no"
              src="https://kuula.co/share/hjVM3?logo=1&info=1&fs=1&vr=0&zoom=1&sd=1&gyro=0&autorotate=0.08&thumbs=1&alpha=0.60&inst=es&keys=0"
            />
          </div>
        </div>
      </section>

      {/* Main Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 lg:px-16 text-center">
        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl leading-relaxed" style={{ color: '#8e8066', opacity: 0.9 }}>
          Una inversión única en el corazón de Chicó.
        </p>

        <div className="flex justify-center mb-8 sm:mb-12">
          <Button
            href="#contacto"
            className="text-sm sm:text-base md:text-lg font-semibold"
          >
            Acceder a Lanzamiento
          </Button>
        </div>
      </section>
    </>
  );
};