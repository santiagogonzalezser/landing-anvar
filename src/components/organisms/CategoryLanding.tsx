import React from 'react';
import { ApartmentCategory } from '@/types';
import { CategoryCard } from '@/components/ui/CategoryCard';
import { theme } from '@/lib/theme';

interface CategoryLandingProps {
  categories: ApartmentCategory[];
  onSelectCategory: (categoryId: string, modelId: string) => void;
}

export const CategoryLanding: React.FC<CategoryLandingProps> = ({
  categories,
  onSelectCategory
}) => {
  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h1
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: theme.colors.text.primary }}
          >
            Modelos de Apartamentos
          </h1>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            style={{ color: theme.colors.text.secondary }}
          >
            Descubre nuestra variedad de apartamentos diseñados para diferentes estilos de vida.
            Haz clic en cualquier categoría para explorar los modelos disponibles.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onSelectCategory={onSelectCategory}
              className="w-full"
            />
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p
            className="text-sm"
            style={{ color: theme.colors.text.secondary }}
          >
            ¿Necesitas más información? Contacta con nuestro equipo de ventas para una asesoría personalizada.
          </p>
        </div>
      </div>
    </div>
  );
};