'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';
import { RiBuilding2Fill, RiWaterFlashFill, RiStoreFill } from 'react-icons/ri';
import { GiWaves, GiWeightLiftingUp } from 'react-icons/gi';
import { IoWaterOutline } from 'react-icons/io5';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { FaCircle } from 'react-icons/fa';
import Image from 'next/image';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showValidationMessage, setShowValidationMessage] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('+57');
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [closingDropdown, setClosingDropdown] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.country-selector')) {
        setShowCountryDropdown(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    const form = e.target as HTMLFormElement;
    const checkbox = form.querySelector('#data-policy-agreement') as HTMLInputElement;

    if (!checkbox.checked) {
      e.preventDefault();
      setShowValidationMessage(true);
      setTimeout(() => setShowValidationMessage(false), 5000);
      return false;
    }

    setShowValidationMessage(false);

    // Show success popup after a delay to allow Mailchimp processing
    setTimeout(() => {
      setShowSuccessPopup(true);
    }, 2000);
  };

  const validateEmail = (e: React.FocusEvent<HTMLInputElement>) => {
    const email = e.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email && !emailRegex.test(email)) {
      e.target.setCustomValidity('Por favor ingresa un correo electrónico válido');
    } else {
      e.target.setCustomValidity('');
    }
  };

  const countries = [
    { code: '+57', name: 'COL' },
    { code: '+1', name: 'USA' },
    { code: '+52', name: 'MEX' },
    { code: '+34', name: 'ESP' },
    { code: '+54', name: 'ARG' },
    { code: '+55', name: 'BRA' },
    { code: '+56', name: 'CHL' },
    { code: '+51', name: 'PER' },
    { code: '+58', name: 'VEN' },
    { code: '+593', name: 'ECU' },
  ];


  const handleCountrySelect = (country: { code: string; name: string }) => {
    setSelectedCountry(country.code);
    setShowCountryDropdown(false);
  };

  const handleCountryCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.startsWith('+')) {
      setSelectedCountry(value);
    } else {
      setSelectedCountry('+' + value);
    }
  };

  const toggleDropdown = (dropdown: string) => {
    if (openDropdown === dropdown) {
      // Start closing animation
      setClosingDropdown(dropdown);
      setOpenDropdown(null);
      // Remove from DOM after animation completes
      setTimeout(() => {
        setClosingDropdown(null);
      }, 400);
    } else {
      setClosingDropdown(null);
      setOpenDropdown(dropdown);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden max-w-full" style={{ backgroundColor: '#27312d', color: '#8e8066', paddingTop: '90px' }}>
      {/* Background animated elements */}
      {mounted && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full blur-3xl transition-all duration-1000"
            style={{
              left: Math.max(0, Math.min(mousePosition.x / 15, window.innerWidth - 384)),
              top: mousePosition.y / 15 + scrollY / 5,
              backgroundColor: 'rgba(142, 128, 102, 0.1)',
            }}
          />
          <div
            className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-80 md:h-80 rounded-full blur-3xl animate-pulse"
            style={{
              transform: `translateY(${scrollY / 8}px)`,
              backgroundColor: 'rgba(142, 128, 102, 0.05)'
            }}
          />
          <div
            className="absolute bottom-1/4 left-1/3 w-28 h-28 sm:w-44 sm:h-44 md:w-72 md:h-72 rounded-full blur-3xl animate-pulse delay-1000"
            style={{
              transform: `translateY(${-scrollY / 6}px)`,
              backgroundColor: 'rgba(142, 128, 102, 0.08)'
            }}
          />
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center px-4 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-3 sm:py-4 md:py-4 lg:py-5 xl:py-5 2xl:py-6 backdrop-blur-sm border-b" style={{ backgroundColor: 'rgba(39, 49, 45, 0.95)', borderBottomColor: 'rgba(142, 128, 102, 0.2)' }}>
        <div className="flex items-center">
          <a href="#contacto" className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 xl:px-7 xl:py-3.5 2xl:px-8 2xl:py-4 text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-xl rounded-full transition-all shadow-lg hover:scale-105" style={{ backgroundColor: '#8e8066', color: '#27312d' }} onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#a69373'} onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#8e8066'}>
            Lanzamiento
          </a>
        </div>
        <div className="flex-1"></div>
        <div className="flex items-center">
          <a href="https://www.equanime.co/" target="_blank" rel="noopener noreferrer" className="transition-all hover:scale-105" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Image
              src="/equanime-logo-new.png"
              alt="Equánime"
              width={180}
              height={54}
              className="h-8 sm:h-11 md:h-12 lg:h-14 xl:h-16 2xl:h-18 object-contain cursor-pointer"
            />
          </a>
        </div>
      </nav>

      {/* Logo and 360° Virtual Tour */}
      <section className="relative z-10 py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <Image
              src="/logo-aria-transparent.png"
              alt="ARIA 93 Logo"
              width={240}
              height={154}
              className="mx-auto h-20 sm:h-24 md:h-28 lg:h-36 xl:h-40 object-contain"
            />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-4 sm:mt-6 px-2" style={{ color: '#a69373' }}>
              El nuevo ícono de Bogotá que marcará un antes y un después en el Parque de la 93
            </h2>
          </div>

          {/* 360° Virtual Tour */}
          <div className="w-full aspect-video max-w-full overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl">
            <iframe
              className="ku-embed w-full h-full"
              frameBorder="0"
              allow="xr-spatial-tracking; gyroscope; accelerometer"
              allowFullScreen
              scrolling="no"
              src="https://kuula.co/share/hjVM3?logo=1&info=1&fs=1&vr=0&zoom=1&sd=1&gyro=0&autorotate=0.08&thumbs=1&alpha=0.60&inst=es&keys=0"
            />
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] px-4 sm:px-6 md:px-12 lg:px-16 text-center">

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 max-w-4xl leading-relaxed px-4" style={{ color: '#8e8066', opacity: 0.9 }}>
          Una inversión única en el corazón de Chicó.
        </p>

        <div className="flex justify-center mb-12 sm:mb-16 px-4">
          <a href="#contacto" className="px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:scale-105 transition-all shadow-2xl" style={{ backgroundColor: '#8e8066', color: '#27312d' }}>
            Acceder a Lanzamiento Privado
          </a>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-6xl w-full px-4 mb-12 sm:mb-16">
          <div className="backdrop-blur-sm border rounded-2xl p-6 hover:scale-105 transition-all shadow-lg" style={{ backgroundColor: 'rgba(142, 128, 102, 0.1)', borderColor: 'rgba(142, 128, 102, 0.3)' }}>
            <p className="font-medium mb-2" style={{ color: '#8e8066', opacity: 0.8 }}>Apartamentos desde</p>
            <div className="text-2xl sm:text-3xl font-bold" style={{ color: '#8e8066' }}>25.49m² a 56.55m²</div>
          </div>
          <div className="backdrop-blur-sm border rounded-2xl p-6 hover:scale-105 transition-all shadow-lg" style={{ backgroundColor: 'rgba(142, 128, 102, 0.1)', borderColor: 'rgba(142, 128, 102, 0.3)' }}>
            <div className="text-3xl font-bold mb-2" style={{ color: '#8e8066' }}>152</div>
            <p className="font-medium" style={{ color: '#8e8066', opacity: 0.8 }}>Apartamentos</p>
          </div>
          <div className="backdrop-blur-sm border rounded-2xl p-6 hover:scale-105 transition-all shadow-lg" style={{ backgroundColor: 'rgba(142, 128, 102, 0.1)', borderColor: 'rgba(142, 128, 102, 0.3)' }}>
            <div className="text-3xl font-bold mb-2" style={{ color: '#8e8066' }}>+1,250m²</div>
            <p className="font-medium" style={{ color: '#8e8066', opacity: 0.8 }}>Club House de Lujo</p>
          </div>
          <div className="backdrop-blur-sm border rounded-2xl p-6 hover:scale-105 transition-all shadow-lg" style={{ backgroundColor: 'rgba(142, 128, 102, 0.1)', borderColor: 'rgba(142, 128, 102, 0.3)' }}>
            <div className="text-3xl font-bold mb-2" style={{ color: '#8e8066' }}>+720m²</div>
            <p className="font-medium" style={{ color: '#8e8066', opacity: 0.8 }}>Zona Comercial</p>
          </div>
        </div>

      </section>

      {/* Project Details Section */}
      <section id="proyecto" className="relative z-10 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-16 backdrop-blur-sm" style={{ backgroundColor: 'rgba(142, 128, 102, 0.05)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 px-2" style={{ color: '#8e8066' }}>
              Exclusividad Redefinida
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4" style={{ color: '#8e8066', opacity: 0.8 }}>
              En el corazón del Parque de la 93, donde cada detalle ha sido pensado para ofrecerte
              una experiencia de vida incomparable y una oportunidad de inversión excepcional.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-start lg:items-center px-2 sm:px-4">
            <div className="space-y-4 sm:space-y-6">
              {/* Ubicación Privilegiada Dropdown */}
              <div className="border rounded-xl sm:rounded-2xl hover:scale-105 transition-all shadow-lg hover:shadow-xl" style={{ backgroundColor: 'rgba(142, 128, 102, 0.1)', borderColor: 'rgba(142, 128, 102, 0.3)' }}>
                <button
                  onClick={() => toggleDropdown('ubicacion')}
                  className="w-full text-left p-4 sm:p-6 flex justify-between items-center rounded-xl sm:rounded-2xl transition-all"
                  onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'rgba(142, 128, 102, 0.2)'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}
                >
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold" style={{ color: '#8e8066' }}>Ubicación Privilegiada</h3>
                  <span className="text-xl sm:text-2xl" style={{ color: '#8e8066' }}>
                    {openDropdown === 'ubicacion' ? '−' : '+'}
                  </span>
                </button>
                {mounted && (openDropdown === 'ubicacion' || closingDropdown === 'ubicacion') && (
                  <div
                    className="px-4 sm:px-6 pb-4 sm:pb-6 overflow-hidden"
                    style={{
                      animation: openDropdown === 'ubicacion' ? 'slideDown 0.4s ease-out' : 'slideUp 0.4s ease-in'
                    }}
                  >
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
                  </div>
                )}
              </div>

              {/* Diseño Arquitectónico Dropdown */}
              <div className="border rounded-xl sm:rounded-2xl hover:scale-105 transition-all shadow-lg hover:shadow-xl" style={{ backgroundColor: 'rgba(142, 128, 102, 0.1)', borderColor: 'rgba(142, 128, 102, 0.3)' }}>
                <button
                  onClick={() => toggleDropdown('diseno')}
                  className="w-full text-left p-4 sm:p-6 flex justify-between items-center rounded-xl sm:rounded-2xl transition-all"
                  onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'rgba(166, 147, 115, 0.2)'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}
                >
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold" style={{ color: '#a69373' }}>Diseño Arquitectónico</h3>
                  <span className="text-xl sm:text-2xl" style={{ color: '#a69373' }}>
                    {openDropdown === 'diseno' ? '−' : '+'}
                  </span>
                </button>
                {mounted && (openDropdown === 'diseno' || closingDropdown === 'diseno') && (
                  <div
                    className="px-4 sm:px-6 pb-4 sm:pb-6 overflow-hidden"
                    style={{
                      animation: openDropdown === 'diseno' ? 'slideDown 0.4s ease-out' : 'slideUp 0.4s ease-in'
                    }}
                  >
                    <p className="leading-relaxed text-sm sm:text-base md:text-lg mt-2 sm:mt-4" style={{ color: '#8e8066', opacity: 0.8 }}>
                      Arquitectura contemporánea que combina elegancia y funcionalidad. Cada espacio
                      ha sido optimizado para maximizar el confort y la rentabilidad de tu inversión.
                    </p>
                  </div>
                )}
              </div>

              {/* Oportunidad de Inversión Dropdown */}
              <div className="border rounded-xl sm:rounded-2xl hover:scale-105 transition-all shadow-lg hover:shadow-xl" style={{ backgroundColor: 'rgba(142, 128, 102, 0.1)', borderColor: 'rgba(142, 128, 102, 0.3)' }}>
                <button
                  onClick={() => toggleDropdown('inversion')}
                  className="w-full text-left p-4 sm:p-6 flex justify-between items-center rounded-xl sm:rounded-2xl transition-all"
                  onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'rgba(142, 128, 102, 0.2)'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}
                >
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold" style={{ color: '#8e8066' }}>Oportunidad de Inversión</h3>
                  <span className="text-xl sm:text-2xl" style={{ color: '#8e8066' }}>
                    {openDropdown === 'inversion' ? '−' : '+'}
                  </span>
                </button>
                {mounted && (openDropdown === 'inversion' || closingDropdown === 'inversion') && (
                  <div
                    className="px-4 sm:px-6 pb-4 sm:pb-6 overflow-hidden"
                    style={{
                      animation: openDropdown === 'inversion' ? 'slideDown 0.4s ease-out' : 'slideUp 0.4s ease-in'
                    }}
                  >
                    <p className="leading-relaxed text-sm sm:text-base md:text-lg mt-2 sm:mt-4" style={{ color: '#8e8066', opacity: 0.8 }}>
                      Alto potencial de rentabilidad en una zona de constante valorización.
                      Perfecto para inversionistas que buscan rentabilidad garantizada en el sector premium.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="border-2 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl hover:shadow-3xl transition-all" style={{ backgroundColor: 'rgba(142, 128, 102, 0.1)', borderColor: 'rgba(142, 128, 102, 0.3)' }}>
                <div className="space-y-4 sm:space-y-6">
                  <div className="text-center">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4" style={{ color: '#8e8066' }}>Características Destacadas</h4>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg sm:rounded-xl" style={{ backgroundColor: 'rgba(142, 128, 102, 0.15)' }}>
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#8e8066' }}>
                        <RiBuilding2Fill className="text-lg sm:text-xl" style={{ color: '#27312d' }} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h5 className="font-semibold text-sm sm:text-base" style={{ color: '#8e8066' }}>152 Unidades Residenciales</h5>
                        <p className="text-xs sm:text-sm" style={{ color: '#8e8066', opacity: 0.7 }}>Apartamentos de 25.49m² a 56.55m²</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg sm:rounded-xl" style={{ backgroundColor: 'rgba(142, 128, 102, 0.15)' }}>
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#a69373' }}>
                        <RiWaterFlashFill className="text-lg sm:text-xl" style={{ color: '#27312d' }} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h5 className="font-semibold text-sm sm:text-base" style={{ color: '#8e8066' }}>Club House Premium</h5>
                        <p className="text-xs sm:text-sm" style={{ color: '#8e8066', opacity: 0.7 }}>Más de 1,250m² de amenidades</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg sm:rounded-xl" style={{ backgroundColor: 'rgba(142, 128, 102, 0.15)' }}>
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#8e8066' }}>
                        <RiStoreFill className="text-lg sm:text-xl" style={{ color: '#27312d' }} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h5 className="font-semibold text-sm sm:text-base" style={{ color: '#8e8066' }}>Zona Comercial</h5>
                        <p className="text-xs sm:text-sm" style={{ color: '#8e8066', opacity: 0.7 }}>Más de 720m² comerciales</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenidades" className="relative z-10 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 px-2" style={{ color: '#8e8066' }}>
              Amenidades de Lujo
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl px-4" style={{ color: '#8e8066', opacity: 0.8 }}>
              Disfruta de un estilo de vida único con las mejores amenidades de la ciudad
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-2 sm:px-4">
            <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover:scale-105 transition-all shadow-xl" style={{ backgroundColor: 'rgba(142, 128, 102, 0.15)' }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 flex items-center justify-center" style={{ backgroundColor: '#8e8066' }}>
                <GiWaves className="text-xl sm:text-2xl md:text-3xl" style={{ color: '#27312d' }} />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4" style={{ color: '#8e8066' }}>Piscina con Borde Infinito</h3>
              <p className="leading-relaxed text-sm sm:text-base" style={{ color: '#8e8066', opacity: 0.8 }}>
                Espectacular piscina infinita con vista directamente al Parque de la 93.
              </p>
            </div>

            <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover:scale-105 transition-all shadow-xl" style={{ backgroundColor: 'rgba(142, 128, 102, 0.15)' }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 flex items-center justify-center" style={{ backgroundColor: '#a69373' }}>
                <GiWeightLiftingUp className="text-xl sm:text-2xl md:text-3xl" style={{ color: '#27312d' }} />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4" style={{ color: '#a69373' }}>Gimnasio Premium</h3>
              <p className="leading-relaxed text-sm sm:text-base" style={{ color: '#8e8066', opacity: 0.8 }}>
                Gimnasio completamente dotado con equipamento de última tecnología.
              </p>
            </div>

            <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover:scale-105 transition-all shadow-xl sm:col-span-2 lg:col-span-1" style={{ backgroundColor: 'rgba(142, 128, 102, 0.15)' }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 flex items-center justify-center" style={{ backgroundColor: '#8e8066' }}>
                <IoWaterOutline className="text-xl sm:text-2xl md:text-3xl" style={{ color: '#27312d' }} />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4" style={{ color: '#8e8066' }}>Zona de Recuperación</h3>
              <p className="leading-relaxed text-sm sm:text-base" style={{ color: '#8e8066', opacity: 0.8 }}>
                Zona privada que contiene un espacio para masajes, sauna y cold plunge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="relative z-10 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-16" style={{ backgroundColor: '#8e8066' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 px-2" style={{ color: '#27312d' }}>
            Accede al Lanzamiento Privado
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-4" style={{ color: '#27312d', opacity: 0.8 }}>
            Sé parte de los primeros en conocer este exclusivo proyecto.
            Regístrate ahora y obtén condiciones preferenciales.
          </p>

          <div className="backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8" style={{ backgroundColor: 'rgba(39, 49, 45, 0.2)' }}>
            <form
              action="https://equanime.us5.list-manage.com/subscribe/post?u=6f1dbb9913f0dd514fadfc3b2&id=c1f89efb03&f_id=002acbe1f0"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate space-y-4 sm:space-y-6"
              target="_blank"
              onSubmit={handleFormSubmit}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <input
                  type="text"
                  name="FNAME"
                  id="mce-FNAME"
                  placeholder="Nombre"
                  required
                  className="px-4 py-3 sm:px-6 sm:py-4 rounded-lg sm:rounded-xl border focus:outline-none focus:ring-2 transition-all text-sm sm:text-base"
                  style={{ backgroundColor: 'rgba(39, 49, 45, 0.9)', borderColor: 'rgba(39, 49, 45, 0.5)', color: '#8e8066' }}
                />
                <input
                  type="text"
                  name="LNAME"
                  id="mce-LNAME"
                  placeholder="Apellidos"
                  required
                  className="px-4 py-3 sm:px-6 sm:py-4 rounded-lg sm:rounded-xl border focus:outline-none focus:ring-2 transition-all text-sm sm:text-base"
                  style={{ backgroundColor: 'rgba(39, 49, 45, 0.9)', borderColor: 'rgba(39, 49, 45, 0.5)', color: '#8e8066' }}
                />
              </div>
              <input
                type="email"
                name="EMAIL"
                id="mce-EMAIL"
                placeholder="Correo electrónico"
                required
                onBlur={validateEmail}
                className="w-full px-4 py-3 sm:px-6 sm:py-4 rounded-lg sm:rounded-xl border focus:outline-none focus:ring-2 transition-all text-sm sm:text-base"
                style={{ backgroundColor: 'rgba(39, 49, 45, 0.9)', borderColor: 'rgba(39, 49, 45, 0.5)', color: '#8e8066' }}
              />

              {/* Phone number with searchable country selector */}
              <div className="flex gap-2 sm:gap-3">
                <div className="relative country-selector" style={{ width: '80px', minWidth: '80px' }}>
                  <input
                    type="text"
                    value={selectedCountry}
                    onChange={handleCountryCodeChange}
                    onFocus={() => setShowCountryDropdown(true)}
                    placeholder="+57"
                    className="w-full px-2 py-3 sm:px-4 sm:py-4 rounded-lg sm:rounded-xl border focus:outline-none focus:ring-2 transition-all text-center text-sm sm:text-base"
                    style={{ backgroundColor: 'rgba(39, 49, 45, 0.9)', borderColor: 'rgba(39, 49, 45, 0.5)', color: '#8e8066' }}
                  />
                  {showCountryDropdown && (
                    <div className="absolute top-full left-0 mt-1 rounded-lg sm:rounded-xl border shadow-lg z-20 max-h-60 overflow-y-auto" style={{ backgroundColor: 'rgba(39, 49, 45, 0.95)', borderColor: 'rgba(39, 49, 45, 0.5)', width: '160px' }}>
                      {countries.map((country) => (
                        <div
                          key={country.code}
                          onClick={() => handleCountrySelect(country)}
                          className="px-3 py-2 sm:px-4 sm:py-3 cursor-pointer hover:bg-opacity-20 hover:bg-white transition-colors flex items-center space-x-2 sm:space-x-3"
                          style={{ color: '#8e8066' }}
                        >
                          <FaCircle style={{ color: '#8e8066', fontSize: '6px' }} />
                          <span className="font-mono font-semibold text-xs sm:text-sm">{country.code}</span>
                          <span className="text-xs opacity-75">{country.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <input
                  type="tel"
                  name="PHONE"
                  id="mce-PHONE"
                  placeholder="Número de teléfono"
                  className="flex-1 min-w-0 px-4 py-3 sm:px-6 sm:py-4 rounded-lg sm:rounded-xl border focus:outline-none focus:ring-2 transition-all text-sm sm:text-base"
                  style={{ backgroundColor: 'rgba(39, 49, 45, 0.9)', borderColor: 'rgba(39, 49, 45, 0.5)', color: '#8e8066' }}
                  onFocus={() => setShowCountryDropdown(false)}
                />
              </div>

              {/* Mailchimp hidden field */}
              <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                <input type="text" name="b_6f1dbb9913f0dd514fadfc3b2_c1f89efb03" tabIndex={-1} />
              </div>

              {/* Data protection policy checkbox */}
              <div className="flex items-start space-x-2 sm:space-x-3">
                <input
                  type="checkbox"
                  id="data-policy-agreement"
                  name="data-policy-agreement"
                  required
                  className="mt-1 w-5 h-5 rounded border-2 focus:ring-2 transition-all"
                  style={{
                    backgroundColor: 'rgba(39, 49, 45, 0.9)',
                    borderColor: 'rgba(39, 49, 45, 0.5)',
                    accentColor: '#8e8066'
                  }}
                />
                <label htmlFor="data-policy-agreement" className="text-xs sm:text-sm leading-relaxed" style={{ color: '#27312d', opacity: 0.8 }}>
                  <span className="text-red-400">*</span> Acepto la{' '}
                  <a
                    href="https://politica-datos.vercel.app/"
                    target="_blank"
                    className="underline transition-colors"
                    style={{ color: '#27312d' }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = '1'}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = '0.8'}
                  >
                    Política de Tratamiento de Datos Personales
                  </a>
                  {' '}y autorizo el tratamiento de mis datos personales para las finalidades descritas en dicha política.
                </label>
              </div>

              {/* Validation message for checkbox */}
              {showValidationMessage && (
                <div className="p-4 rounded-xl border-2 border-red-400 bg-red-100 text-red-700 text-center animate-pulse">
                  <p className="font-semibold">¡Atención!</p>
                  <p>Debe aceptar la Política de Tratamiento de Datos Personales para continuar.</p>
                </div>
              )}

              <button
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="w-full px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base md:text-lg font-bold transition-all shadow-lg hover:scale-105 cursor-pointer hover:cursor-pointer"
                style={{ backgroundColor: '#27312d', color: '#8e8066' }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.cursor = 'pointer';
                  (e.target as HTMLElement).style.backgroundColor = '#3a4540';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = '#27312d';
                }}
              >
                Solicitar Información Exclusiva
              </button>

              {/* Mailchimp responses */}
              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response" style={{ display: 'none', color: '#ff4444', textAlign: 'center', marginTop: '10px' }}></div>
                <div className="response" id="mce-success-response" style={{ display: 'none', color: '#44ff44', textAlign: 'center', marginTop: '10px' }}></div>
              </div>
            </form>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 sm:py-10 md:py-12 px-4 sm:px-6" style={{ backgroundColor: '#27312d' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center" style={{ color: '#8e8066', opacity: 0.7 }}>
            <p className="text-sm sm:text-base">&copy; 2024 ARIA 93. Todos los derechos reservados.</p>
            <p className="mt-2">
              <a href="https://politica-datos.vercel.app/" className="transition-colors text-sm sm:text-base" style={{ color: '#8e8066' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#a69373'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#8e8066'}>
                Política de Tratamiento de Datos
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm p-4">
          <div className="relative max-w-sm sm:max-w-md w-full">
            <div
              className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center shadow-2xl border animate-bounce"
              style={{ backgroundColor: '#8e8066', borderColor: 'rgba(39, 49, 45, 0.3)' }}
            >
              <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4 flex justify-center">
                <IoCheckmarkCircle style={{ color: '#27312d' }} />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4" style={{ color: '#27312d' }}>
                ¡Registro Exitoso!
              </h3>
              <p className="mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base" style={{ color: '#27312d', opacity: 0.8 }}>
                Gracias por tu interés en ARIA 93. Hemos recibido tu información y nos pondremos en contacto contigo muy pronto con detalles exclusivos del proyecto.
              </p>
              <button
                onClick={() => setShowSuccessPopup(false)}
                className="px-6 py-2 sm:px-8 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all hover:scale-105 shadow-lg text-sm sm:text-base"
                style={{ backgroundColor: '#27312d', color: '#8e8066' }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = '#3a4540';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = '#27312d';
                }}
              >
                Continuar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mailchimp Form Validation Script */}
      <Script
        src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
        strategy="lazyOnload"
      />
      <Script id="mailchimp-config" strategy="lazyOnload">
        {`
          (function($) {
            window.fnames = new Array();
            window.ftypes = new Array();
            fnames[1]='FNAME';ftypes[1]='text';
            fnames[2]='LNAME';ftypes[2]='text';
            fnames[4]='PHONE';ftypes[4]='phone';
            fnames[0]='EMAIL';ftypes[0]='email';
          }(typeof jQuery !== 'undefined' ? jQuery : function(){}));
        `}
      </Script>
    </div>
  );
}
