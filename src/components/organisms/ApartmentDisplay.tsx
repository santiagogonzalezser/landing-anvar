import React from 'react';
import { ApartmentModel, ApartmentCategory } from '@/types';
import { ApartmentCard } from '@/components/ui/ApartmentCard';
import { ApartmentStats } from '@/components/ui/ApartmentStats';
import { CategoryLanding } from './CategoryLanding';
import { theme } from '@/lib/theme';

interface ApartmentDisplayProps {
  selectedModel: ApartmentModel | null;
  categoryName?: string;
  categories?: ApartmentCategory[];
  onSelectCategory?: (categoryId: string, modelId: string) => void;
}

export const ApartmentDisplay: React.FC<ApartmentDisplayProps> = ({
  selectedModel,
  categoryName,
  categories,
  onSelectCategory
}) => {
  if (!selectedModel) {
    if (categories && onSelectCategory) {
      return (
        <CategoryLanding
          categories={categories}
          onSelectCategory={onSelectCategory}
        />
      );
    }

    return (
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: theme.colors.text.primary }}
          >
            Selecciona un modelo
          </h2>
          <p
            className="text-lg"
            style={{ color: theme.colors.text.secondary }}
          >
            Escoge una categoría y modelo en el menú lateral para ver los detalles del apartamento.
          </p>
        </div>
      </div>
    );
  }

  // Find the category for this model
  const modelCategory = categories?.find(cat =>
    cat.models.some(model => model.id === selectedModel.id)
  );

  return (
    <div className="flex-1 flex items-center justify-center min-h-0 py-4 px-4 md:px-6">
      <div className="w-full max-w-7xl mx-auto h-full max-h-[calc(100vh-120px)]">
        {/* Main Content - Responsive Layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-4 gap-4 lg:gap-6 h-full items-start">
          {/* Image Section - Takes 3 columns on LG screens, full width on mobile */}
          <div className="lg:col-span-3 w-full flex justify-center min-h-0 flex-1">
            <div className="w-full h-full flex items-center">
              <ApartmentCard
                model={selectedModel}
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Stats Panel - Takes 1 column on LG screens, aligned with image top */}
          <div className="lg:col-span-1 w-full flex justify-center lg:justify-start min-h-0">
            {modelCategory && (
              <div className="w-full flex">
                <ApartmentStats
                  model={selectedModel}
                  category={modelCategory}
                  className="w-full"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};