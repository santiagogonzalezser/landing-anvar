import React from 'react';
import { ApartmentModel, ApartmentCategory } from '@/types';
import { theme } from '@/lib/theme';
import { RiBuildingLine, RiRulerLine, RiHome2Line } from 'react-icons/ri';

interface ApartmentStatsProps {
  model: ApartmentModel;
  category: ApartmentCategory;
  className?: string;
}

export const ApartmentStats: React.FC<ApartmentStatsProps> = ({
  model,
  category,
  className = ''
}) => {
  const categoryInfo = category.info;

  return (
    <div className={`rounded-3xl shadow-lg p-4 h-fit ${className}`} style={{ backgroundColor: '#8e8066' }}>
      {/* Header */}
      <div className="mb-3">
        <h3
          className="text-lg font-bold mb-2"
          style={{ color: theme.colors.primary }}
        >
          Información del Apartamento
        </h3>
        <div
          className="w-8 h-1 rounded-full"
          style={{ backgroundColor: theme.colors.primary }}
        />
      </div>

      {/* Model Info */}
      <div className="mb-3">
        <h4
          className="text-base font-semibold mb-2 flex items-center"
          style={{ color: theme.colors.primary }}
        >
          <RiHome2Line className="mr-2" size={18} />
          Modelo {model.name}
        </h4>

        <div className="space-y-2 text-sm">
          {model.bedrooms !== undefined && (
            <div className="flex justify-between">
              <span style={{ color: theme.colors.primary }}>Habitaciones:</span>
              <span style={{ color: theme.colors.primary }}>
                {model.bedrooms === 0 ? 'Monoambiente' : `${model.bedrooms} ${model.bedrooms === 1 ? 'habitación' : 'habitaciones'}`}
              </span>
            </div>
          )}

          {model.bathrooms !== undefined && (
            <div className="flex justify-between">
              <span style={{ color: theme.colors.primary }}>Baños:</span>
              <span style={{ color: theme.colors.primary }}>
                {model.bathrooms} {model.bathrooms === 1 ? 'baño' : 'baños'}
              </span>
            </div>
          )}

          {model.area && (
            <div className="flex justify-between">
              <span style={{ color: theme.colors.primary }}>Área:</span>
              <span style={{ color: theme.colors.primary }}>{model.area}</span>
            </div>
          )}
        </div>
      </div>

      {/* Category Info */}
      {categoryInfo && (
        <>
          {/* Description */}
          <div className="mb-3">
            <h4
              className="text-base font-semibold mb-2 flex items-center"
              style={{ color: theme.colors.primary }}
            >
              <RiBuildingLine className="mr-2" size={18} />
              Descripción
            </h4>
            <p
              className="text-xs leading-relaxed"
              style={{ color: theme.colors.primary }}
            >
              {categoryInfo.description}
            </p>
          </div>

          {/* Metraje */}
          <div>
            <h4
              className="text-base font-semibold mb-2 flex items-center"
              style={{ color: theme.colors.primary }}
            >
              <RiRulerLine className="mr-2" size={18} />
              Metraje
            </h4>
            <div className="text-xs" style={{ color: theme.colors.primary }}>
              <p className="italic">Información específica de metraje será proporcionada próximamente</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};