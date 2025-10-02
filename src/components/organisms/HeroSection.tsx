import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative z-10 min-h-screen flex items-center">
      <div className="max-w-full mx-auto w-full">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-screen lg:min-h-[calc(100vh-60px)]">

          {/* Left Column: Logo, Description, and Action Buttons */}
          <div className="flex flex-col justify-center space-y-6 py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 lg:px-16">
            {/* Logo */}
            <div className="text-center lg:text-left">
              <Image
                src="/logo-aria-transparent.png"
                alt="ARIA 93 Logo"
                width={300}
                height={192}
                className="mx-auto lg:mx-0 h-32 sm:h-36 md:h-40 lg:h-44 object-contain"
              />
            </div>

            {/* Investment Tagline */}
            <p className="text-base sm:text-lg md:text-xl text-center lg:text-left leading-relaxed" style={{ color: '#8e8066', opacity: 0.9 }}>
              El nuevo ícono de Bogotá que marcará un antes y un después en el Parque de la 93. Una inversión única en el corazón de Chicó.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start flex-wrap items-center">
              <Button
                href="/apartamentos"
                className="text-sm sm:text-base font-semibold w-full sm:w-auto max-w-xs"
                variant="primary"
              >
                Apartamentos
              </Button>

              <Button
                href="/amenidades"
                className="text-sm sm:text-base font-semibold w-full sm:w-auto max-w-xs"
                variant="primary"
              >
                Club House
              </Button>
            </div>
          </div>

          {/* Right Column: 360° Virtual Tour with background image */}
          <div className="relative w-full py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 lg:px-16 flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <Image
              src="/ARIA_FACHADA_WEB.jpg"
              alt="ARIA Fachada"
              fill
              className="object-cover"
              style={{ opacity: 0.3 }}
              quality={90}
            />

            {/* 360° Virtual Tour */}
            <div className="relative z-10 w-full aspect-video overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl">
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

        </div>
      </div>
    </section>
  );
};