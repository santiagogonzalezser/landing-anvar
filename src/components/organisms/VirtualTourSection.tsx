'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

const amenityImages = [
  { src: '/ARIA_CAFE_WEB.jpg', alt: 'ARIA Café' },
  { src: '/ARIA_LOBBY_v2_WEB.jpg', alt: 'ARIA Lobby' },
  { src: '/ARIA_PISCINA_WEB.jpg', alt: 'ARIA Piscina' },
  { src: '/ARIA_RESTAURANTE_WEB.jpg', alt: 'ARIA Restaurante' },
  { src: '/ARIA_SPORTS-BAR_WEB.jpg', alt: 'ARIA Sports Bar' },
];

export const VirtualTourSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % amenityImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + amenityImages.length) % amenityImages.length);
  };

  const getPrevIndex = () => (currentIndex - 1 + amenityImages.length) % amenityImages.length;
  const getNextIndex = () => (currentIndex + 1) % amenityImages.length;

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      nextImage();
    }
    if (touchStart - touchEnd < -75) {
      // Swipe right
      prevImage();
    }
  };

  return (
    <>
    <section className="relative z-10 py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Less Blurred Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/ARIA_FACHADA_WEB.jpg"
          alt="Background"
          fill
          className="object-cover blur-sm opacity-30"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 sm:px-8 lg:px-10 xl:px-12">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center">

          {/* Left - 360° Virtual Tour (bigger, more horizontal space) */}
          <div className="w-full lg:w-[52%]">
            <div
              className="relative w-full h-[40vh] sm:h-[45vh] lg:h-[50vh] overflow-hidden rounded-xl lg:rounded-2xl shadow-2xl border border-opacity-20"
              style={{ borderColor: '#8e8066' }}
            >
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

          {/* Right - 3D Carousel (smaller) */}
          <div className="w-full lg:w-[48%] flex items-center px-4 lg:px-0">
            {/* Left Arrow */}
            <button
              onClick={prevImage}
              className="flex items-center justify-center transition-all flex-shrink-0 z-20 hover:opacity-70"
              style={{ color: '#8e8066' }}
            >
              <span className="text-4xl sm:text-5xl font-bold">‹</span>
            </button>

            {/* Carousel Container */}
            <div
              className="relative w-full h-[36vh] sm:h-[40vh] lg:h-[44vh] flex items-center justify-center mx-3 sm:mx-4 overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >

              {/* Center Image (Front) - Full size on top */}
              <div
                className="relative w-full h-full z-10 transition-all duration-700 ease-in-out cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                <div className="relative w-full h-full overflow-hidden rounded-xl lg:rounded-2xl shadow-2xl border border-opacity-20" style={{ borderColor: '#8e8066' }}>
                  <Image
                    src={amenityImages[currentIndex].src}
                    alt={amenityImages[currentIndex].alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out"
                    key={`current-${currentIndex}`}
                  />
                </div>
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextImage}
              className="flex items-center justify-center transition-all flex-shrink-0 z-20 hover:opacity-70"
              style={{ color: '#8e8066' }}
            >
              <span className="text-4xl sm:text-5xl font-bold">›</span>
            </button>
          </div>

        </div>
      </div>
    </section>

    {/* Image Modal */}
    {isModalOpen && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
        onClick={() => setIsModalOpen(false)}
      >
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2 hover:opacity-70 transition-opacity"
          style={{ color: '#8e8066' }}
        >
          <X size={32} strokeWidth={2.5} />
        </button>
        <div className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center">
          <Image
            src={amenityImages[currentIndex].src}
            alt={amenityImages[currentIndex].alt}
            fill
            className="object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </div>
    )}
    </>
  );
};
