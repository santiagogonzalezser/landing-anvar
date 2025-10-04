import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/Card';
import { FeatureItem } from '@/components/ui/FeatureItem';
import { useDropdown } from '@/hooks/useDropdown';
import { FEATURED_CHARACTERISTICS } from '@/lib/constants';

export const ProjectDetailsSection: React.FC = () => {
  const { openDropdown, closingDropdown, toggleDropdown } = useDropdown();

  const dropdownSections = [
    {
      id: 'ubicacion',
      title: 'Ubicación Privilegiada',
      titleColor: '#8e8066',
      hoverColor: 'rgba(142, 128, 102, 0.2)',
      content: (
        <>
          <p className="leading-relaxed text-sm sm:text-base md:text-lg mb-4 sm:mb-6 mt-2 sm:mt-4" style={{ color: '#8e8066', opacity: 0.8 }}>
            Ubicado en el Parque de la 93 en Chicó, la zona más valorizada de Bogotá. Donde convergen arte, gastronomía y la vida social más exclusiva de la ciudad.
          </p>
          <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/mapa-aria.jpg"
              alt="Mapa ARIA 93 - Ubicación y distribución del proyecto"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </>
      )
    },
    {
      id: 'diseno',
      title: 'Diseño Arquitectónico',
      titleColor: '#a69373',
      hoverColor: 'rgba(166, 147, 115, 0.2)',
      content: (
        <p className="leading-relaxed text-sm sm:text-base md:text-lg mt-2 sm:mt-4" style={{ color: '#8e8066', opacity: 0.8 }}>
          Arquitectura contemporánea que combina elegancia y funcionalidad. Cada espacio
          ha sido optimizado para maximizar el confort y la rentabilidad de tu inversión.
        </p>
      )
    },
    {
      id: 'inversion',
      title: 'Oportunidad de Inversión',
      titleColor: '#8e8066',
      hoverColor: 'rgba(142, 128, 102, 0.2)',
      content: (
        <p className="leading-relaxed text-sm sm:text-base md:text-lg mt-2 sm:mt-4" style={{ color: '#8e8066', opacity: 0.8 }}>
          Alto potencial de rentabilidad en una zona de constante valorización.
          Perfecto para inversionistas que buscan rentabilidad garantizada en el sector premium.
        </p>
      )
    }
  ];

  return (
    <section id="proyecto" className="relative z-10 py-3 sm:py-5 md:py-7 lg:py-8 px-3 sm:px-5 md:px-7 lg:px-8 backdrop-blur-sm" style={{ backgroundColor: 'rgba(142, 128, 102, 0.05)' }}>
      <div className="max-w-4xl mx-auto scale-90 sm:scale-95 md:scale-100">
        <div className="text-center mb-3 sm:mb-4 md:mb-5">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 px-2" style={{ color: '#8e8066' }}>
            Exclusividad Redefinida
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed px-4" style={{ color: '#8e8066', opacity: 0.8 }}>
            En el corazón del Parque de la 93, donde cada detalle ha sido pensado para ofrecerte
            una experiencia de vida incomparable y una oportunidad de inversión excepcional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 items-start lg:items-center">
          <div className="space-y-2 sm:space-y-3">
            {dropdownSections.map((section) => (
              <Card key={section.id}>
                <button
                  onClick={() => toggleDropdown(section.id)}
                  className="w-full text-left p-3 sm:p-4 md:p-5 flex justify-between items-center rounded-xl sm:rounded-2xl transition-all"
                  style={{ backgroundColor: 'transparent' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = section.hoverColor)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold" style={{ color: section.titleColor }}>
                    {section.title}
                  </h3>
                  <span className="text-base sm:text-lg md:text-xl" style={{ color: section.titleColor }}>
                    {openDropdown === section.id ? '−' : '+'}
                  </span>
                </button>
                {(openDropdown === section.id || closingDropdown === section.id) && (
                  <div
                    className="px-4 sm:px-6 pb-4 sm:pb-6 overflow-hidden"
                    style={{
                      animation: openDropdown === section.id ? 'slideDown 0.4s ease-out' : 'slideUp 0.4s ease-in'
                    }}
                  >
                    {section.content}
                  </div>
                )}
              </Card>
            ))}
          </div>

          <div className="relative">
            <Card variant="feature" className="border-2 p-3 sm:p-4 md:p-5 lg:p-6 shadow-2xl">
              <div className="space-y-2 sm:space-y-3">
                <div className="text-center">
                  <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2" style={{ color: '#8e8066' }}>
                    Características Destacadas
                  </h4>
                </div>

                <div className="space-y-2">
                  {FEATURED_CHARACTERISTICS.map((feature, index) => (
                    <FeatureItem
                      key={index}
                      icon={feature.icon}
                      title={feature.title}
                      description={feature.description}
                      bgColor={feature.bgColor}
                    />
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>

      </div>
    </section>
  );
};
