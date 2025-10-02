import React from 'react';
import { ApartmentCategory } from '@/types';
import { CategoryCard } from '@/components/ui/CategoryCard';
import { theme } from '@/lib/theme';

interface CategoryLandingProps {
  categories: ApartmentCategory[];
  onSelectCategory: (categoryId: string, modelId: string) => void;
  title?: string;
  subtitle?: string;
}

export const CategoryLanding: React.FC<CategoryLandingProps> = ({
  categories,
  onSelectCategory,
  title = "Modelos de Apartamentos",
  subtitle
}) => {
  return (
    <div className="h-full flex items-center justify-center px-4 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        {/* Title */}
        <div className="text-center mb-3">
          <h1
            className="text-2xl md:text-3xl font-bold mb-2"
            style={{ color: theme.colors.text.primary }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className="text-xs md:text-sm max-w-3xl mx-auto"
              style={{ color: theme.colors.text.secondary }}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Category Grid */}
        <div className="flex justify-center gap-3 lg:gap-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onSelectCategory={onSelectCategory}
              className="flex-1 max-w-[280px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};