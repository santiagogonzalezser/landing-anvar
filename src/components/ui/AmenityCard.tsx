import React from 'react';
import { Card } from './Card';
import { Amenity } from '@/types';

interface AmenityCardProps {
  amenity: Amenity;
  className?: string;
}

export const AmenityCard: React.FC<AmenityCardProps> = ({ amenity, className = '' }) => {
  const { title, description, icon: Icon, bgColor } = amenity;

  return (
    <Card variant="amenity" className={`p-4 sm:p-5 md:p-6 ${className}`}>
      <div
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl mb-3 sm:mb-4 flex items-center justify-center"
        style={{ backgroundColor: bgColor }}
      >
        <Icon className="text-lg sm:text-xl md:text-2xl" style={{ color: '#27312d' }} />
      </div>
      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3" style={{ color: bgColor }}>
        {title}
      </h3>
      <p className="leading-relaxed text-sm sm:text-base" style={{ color: '#8e8066', opacity: 0.8 }}>
        {description}
      </p>
    </Card>
  );
};