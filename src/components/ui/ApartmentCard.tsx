import React from 'react';
import { ApartmentModel } from '@/types';
import { ImageCarousel } from './ImageCarousel';

interface ApartmentCardProps {
  model: ApartmentModel;
  className?: string;
}

export const ApartmentCard: React.FC<ApartmentCardProps> = ({
  model,
  className = ''
}) => {
  const imagesToShow = model.images && model.images.length > 0 ? model.images : [model.image];

  return (
    <div className={`${className}`}>
      <ImageCarousel
        images={imagesToShow}
        modelName={model.name}
      />
    </div>
  );
};