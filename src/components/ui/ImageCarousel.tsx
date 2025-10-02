'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { ImageLightbox } from './ImageLightbox';

interface ImageCarouselProps {
  images: string[];
  modelName: string;
  className?: string;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  modelName,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const openLightbox = () => {
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  if (!images || images.length === 0) {
    return null;
  }

  // If only one image, keep same layout but hide arrows and dots
  if (images.length === 1) {
    return (
      <>
        <div className={`h-full flex items-center ${className}`}>
          {/* Left spacer to match arrow space */}
          <div className="p-3 mr-4 flex-shrink-0 opacity-0 pointer-events-none">
            <div className="w-6 h-6"></div>
          </div>

          {/* Main image */}
          <div
            className={`relative flex-1 cursor-pointer h-full flex items-center justify-center ${images[0].includes('FACHADA') ? 'bg-[#27312d] rounded-2xl' : 'overflow-hidden rounded-2xl'}`}
            onClick={openLightbox}
          >
            <Image
              src={images[0]}
              alt={`Apartamento ${modelName}`}
              width={1200}
              height={800}
              className={`${images[0].includes('FACHADA') ? 'max-h-full w-auto rounded-2xl' : 'w-full h-full object-cover'} hover:opacity-95 transition-opacity`}
              quality={95}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
            />
          </div>

          {/* Right spacer to match arrow space */}
          <div className="p-3 ml-4 flex-shrink-0 opacity-0 pointer-events-none">
            <div className="w-6 h-6"></div>
          </div>
        </div>

        <ImageLightbox
          images={images}
          currentIndex={0}
          isOpen={lightboxOpen}
          onClose={closeLightbox}
          modelName={modelName}
        />
      </>
    );
  }

  return (
    <>
      <div className={`h-full flex flex-col ${className}`}>
        {/* Container with navigation arrows outside */}
        <div className="flex items-center h-full min-h-0">
          {/* Left arrow */}
          <button
            onClick={goToPrevious}
            className="p-3 rounded-full shadow-lg transition-all hover:scale-105 mr-4 flex-shrink-0"
            style={{ backgroundColor: 'rgba(39, 49, 45, 0.8)', color: '#8e8066' }}
            aria-label="Imagen anterior"
          >
            <RiArrowLeftSLine size={24} />
          </button>

          {/* Main image */}
          <div
            className="relative flex-1 cursor-pointer h-full overflow-hidden rounded-2xl"
            onClick={openLightbox}
          >
            <Image
              src={images[currentIndex]}
              alt={`Apartamento ${modelName} - Vista ${currentIndex + 1}`}
              width={1200}
              height={800}
              className="w-full h-full object-cover hover:opacity-95 transition-opacity"
              quality={95}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
            />
          </div>

          {/* Right arrow */}
          <button
            onClick={goToNext}
            className="p-3 rounded-full shadow-lg transition-all hover:scale-105 ml-4 flex-shrink-0"
            style={{ backgroundColor: 'rgba(39, 49, 45, 0.8)', color: '#8e8066' }}
            aria-label="Siguiente imagen"
          >
            <RiArrowRightSLine size={24} />
          </button>
        </div>

        {/* Dots indicator - moved outside and below */}
        <div className="flex justify-center mt-4 space-x-2 flex-shrink-0">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index ? 'opacity-100' : 'opacity-50'
              }`}
              style={{ backgroundColor: '#8e8066' }}
              aria-label={`Ver imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <ImageLightbox
        images={images}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        modelName={modelName}
      />
    </>
  );
};