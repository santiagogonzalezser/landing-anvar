import React, { useState, useEffect } from 'react';
import { ApartmentModel, ApartmentCategory } from '@/types';
import { ApartmentCard } from '@/components/ui/ApartmentCard';
import { ApartmentStats } from '@/components/ui/ApartmentStats';
import { CategoryLanding } from './CategoryLanding';
import { theme } from '@/lib/theme';
import { RiInformationLine, RiCloseLine } from 'react-icons/ri';

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
  const [showMobileDetails, setShowMobileDetails] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);
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
    <>
      <div className="flex-1 flex items-center justify-center min-h-0 py-4 px-4 md:px-6">
        <div className="w-full max-w-7xl mx-auto h-full max-h-[calc(100vh-120px)]">
          {/* Main Content - Responsive Layout */}
          <div className="flex flex-col lg:grid lg:grid-cols-4 gap-4 lg:gap-6 h-full items-start">
            {/* Image Section - Takes 3 columns on LG screens, full width on mobile */}
            <div className="lg:col-span-3 w-full flex justify-center min-h-0 flex-1 relative">
              <ApartmentCard
                model={selectedModel}
                className="w-full h-full"
              />

              {/* Mobile Info Button - Icon overlay below carousel, centered */}
              <button
                onClick={() => setShowMobileDetails(true)}
                className="lg:hidden absolute bottom-8 left-1/2 -translate-x-1/2 z-10 p-3 rounded-full shadow-lg transition-all hover:scale-105"
                style={{ backgroundColor: theme.colors.secondary, color: theme.colors.primary }}
              >
                <RiInformationLine size={24} />
              </button>
            </div>

            {/* Stats Panel - Takes 1 column on LG screens, aligned with image top */}
            <div className="lg:col-span-1 w-full flex justify-center lg:justify-start min-h-0 hidden lg:flex">
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

      {/* Mobile Details Modal */}
      {showMobileDetails && modelCategory && isMobile && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="max-w-md w-full max-h-[80vh] overflow-y-auto relative">
            <ApartmentStats
              model={selectedModel}
              category={modelCategory}
              className="w-full"
            />
            <button
              onClick={() => setShowMobileDetails(false)}
              className="absolute top-2 right-2 p-2 rounded-full transition-all hover:scale-105"
              style={{ backgroundColor: theme.colors.primary, color: theme.colors.secondary }}
              aria-label="Cerrar"
            >
              <RiCloseLine size={24} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};