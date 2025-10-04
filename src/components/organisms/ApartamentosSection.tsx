'use client';

import React, { useState } from 'react';
import { ImageCarousel } from '@/components/ui/ImageCarousel';
import { APARTMENT_CATEGORIES } from '@/lib/constants';
import { theme } from '@/lib/theme';

export const ApartamentosSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const currentCategory = APARTMENT_CATEGORIES[selectedCategory];

  // Collect all images from models in the current category
  const allImages = currentCategory.models.flatMap(model =>
    model.images || [model.image]
  ).filter(Boolean);

  return (
    <section id="apartamentos" className="relative z-10 py-4 sm:py-6 md:py-8 lg:py-10 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-2 sm:mb-3">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 px-2" style={{ color: theme.colors.accent }}>
            Apartamentos
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg px-4 max-w-3xl mx-auto" style={{ color: theme.colors.accent, opacity: 0.8 }}>
            152 unidades residenciales de 25.49m² a 56.55m²
          </p>
        </div>

        {/* Two Column Layout: Info Left, Carousel Right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 lg:gap-5 items-center">

          {/* Left Column: Category Selector & Info */}
          <div className="space-y-3">
            {/* Category Selector */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {APARTMENT_CATEGORIES.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(index)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium text-xs sm:text-sm ${
                    selectedCategory === index
                      ? 'shadow-lg scale-105'
                      : 'opacity-70'
                  }`}
                  style={{
                    backgroundColor: selectedCategory === index ? theme.colors.accent : 'rgba(142, 128, 102, 0.3)',
                    color: selectedCategory === index ? theme.colors.background : theme.colors.accent
                  }}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Category Info */}
            <div className="p-4 sm:p-6 rounded-2xl" style={{ backgroundColor: 'rgba(142, 128, 102, 0.1)' }}>
              <p className="text-sm sm:text-base leading-relaxed mb-3" style={{ color: theme.colors.accent }}>
                {currentCategory.info.description}
              </p>
              {currentCategory.info.features && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {currentCategory.info.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-2 sm:px-3 py-1 rounded-full text-xs font-medium"
                      style={{ backgroundColor: 'rgba(142, 128, 102, 0.2)', color: theme.colors.accent }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Image Carousel */}
          <div className="h-[280px] sm:h-[320px] md:h-[350px] lg:h-[370px]">
            <ImageCarousel
              images={allImages}
              modelName={currentCategory.name}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
