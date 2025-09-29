import React from 'react';
import Image from 'next/image';
import { ApartmentCategory } from '@/types';
import { theme } from '@/lib/theme';

interface CategoryCardProps {
  category: ApartmentCategory;
  onSelectCategory: (categoryId: string, modelId: string) => void;
  className?: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  onSelectCategory,
  className = ''
}) => {
  const firstModel = category.models[0];

  const handleClick = () => {
    onSelectCategory(category.id, firstModel.id);
  };

  return (
    <div
      className={`rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 ${className}`}
      style={{ backgroundColor: theme.colors.secondary }}
      onClick={handleClick}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={firstModel.image}
          alt={`${category.name} - ${firstModel.name}`}
          width={600}
          height={450}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          quality={90}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>

      {/* Footer */}
      <div className="py-2 px-3">
        <h3
          className="text-lg font-bold text-center"
          style={{ color: theme.colors.primary }}
        >
          {category.name}
        </h3>
      </div>
    </div>
  );
};