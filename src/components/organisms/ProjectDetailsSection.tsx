import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/Card';
import { FeatureItem } from '@/components/ui/FeatureItem';
import { StatCard } from '@/components/ui/StatCard';
import { useDropdown } from '@/hooks/useDropdown';
import { FEATURED_CHARACTERISTICS, PROJECT_STATS } from '@/lib/constants';

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
    <section id="proyecto" className="relative z-10 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 lg:px-16 backdrop-blur-sm" style={{ backgroundColor: 'rgba(142, 128, 102, 0.05)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 px-2" style={{ color: '#8e8066' }}>
            Exclusividad Redefinida
          </h2>
          <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-4" style={{ color: '#8e8066', opacity: 0.8 }}>
            En el corazón del Parque de la 93, donde cada detalle ha sido pensado para ofrecerte
            una experiencia de vida incomparable y una oportunidad de inversión excepcional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start lg:items-center px-2 sm:px-4">
          <div className="space-y-4 sm:space-y-6">
            {dropdownSections.map((section) => (
              <Card key={section.id} className="hover:shadow-xl">
                <button
                  onClick={() => toggleDropdown(section.id)}
                  className="w-full text-left p-4 sm:p-6 flex justify-between items-center rounded-xl sm:rounded-2xl transition-all"
                  onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = section.hoverColor}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}
                >
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold" style={{ color: section.titleColor }}>
                    {section.title}
                  </h3>
                  <span className="text-xl sm:text-2xl" style={{ color: section.titleColor }}>
                    {openDropdown === section.id ? '−' : '+'}
                  </span>
                </button>
                <div suppressHydrationWarning>
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
                </div>
              </Card>
            ))}
          </div>

          <div className="relative mt-8 lg:mt-0">
            <Card variant="feature" className="border-2 p-4 sm:p-6 lg:p-8 shadow-2xl hover:shadow-3xl">
              <div className="space-y-4 sm:space-y-6">
                <div className="text-center">
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4" style={{ color: '#8e8066' }}>
                    Características Destacadas
                  </h4>
                </div>

                <div className="space-y-3 sm:space-y-4">
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

        {/* Project Stats Cards */}
        <div className="mt-8 sm:mt-10 md:mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 max-w-5xl mx-auto px-4">
            {PROJECT_STATS.map((stat, index) => (
              <StatCard key={index} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};