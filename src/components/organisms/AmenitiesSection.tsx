import React from 'react';
import { AmenityCard } from '@/components/ui/AmenityCard';
import { AMENITIES } from '@/lib/constants';

export const AmenitiesSection: React.FC = () => {
  return (
    <section id="amenidades" className="relative z-10 py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 px-2" style={{ color: '#8e8066' }}>
            Amenidades de Lujo
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg px-4 max-w-3xl mx-auto" style={{ color: '#8e8066', opacity: 0.8 }}>
            Disfruta de un estilo de vida único con las mejores amenidades de la ciudad
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-4">
          {AMENITIES.map((amenity, index) => (
            <AmenityCard
              key={index}
              amenity={amenity}
              className={index === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}
            />
          ))}
        </div>
      </div>
    </section>
  );
};