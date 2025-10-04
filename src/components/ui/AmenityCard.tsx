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
    <Card variant="amenity" className={`p-3 sm:p-4 ${className}`}>
      <div
        className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl mb-2 sm:mb-3 flex items-center justify-center"
        style={{ backgroundColor: bgColor }}
      >
        <Icon className="text-base sm:text-lg" style={{ color: '#27312d' }} />
      </div>
      <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1.5 sm:mb-2" style={{ color: bgColor }}>
        {title}
      </h3>
      <p className="leading-relaxed text-xs sm:text-sm" style={{ color: '#8e8066', opacity: 0.8 }}>
        {description}
      </p>
    </Card>
  );
};