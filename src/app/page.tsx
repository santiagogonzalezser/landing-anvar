'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi';
import { RiBuilding2Fill, RiWaterFlashFill, RiStoreFill } from 'react-icons/ri';
import { GiWaves, GiWeightLiftingUp } from 'react-icons/gi';
import { IoWaterOutline } from 'react-icons/io5';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { FaCircle } from 'react-icons/fa';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showValidationMessage, setShowValidationMessage] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('+57');
  const [countrySearch, setCountrySearch] = useState('');
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
        setCountrySearch('');
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

  const filteredCountries = countries.filter(country =>
    country.name.includes(countrySearch.toUpperCase()) ||
    country.code.includes(countrySearch)
  );

  const handleCountrySelect = (country: { code: string; name: string; flag: string }) => {
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
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: '#27312d', color: '#8e8066', paddingTop: '88px' }}>
      {/* Background animated elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl transition-all duration-1000"
          style={{
            left: mousePosition.x / 15,
            top: mousePosition.y / 15 + scrollY / 5,
            backgroundColor: 'rgba(142, 128, 102, 0.1)',
          }}
        />
        <div
          className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translateY(${scrollY / 8}px)`,
            backgroundColor: 'rgba(142, 128, 102, 0.05)'
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full blur-3xl animate-pulse delay-1000"
          style={{
            transform: `translateY(${-scrollY / 6}px)`,
            backgroundColor: 'rgba(142, 128, 102, 0.08)'
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 md:p-8 backdrop-blur-sm border-b" style={{ backgroundColor: 'rgba(39, 49, 45, 0.95)', borderBottomColor: 'rgba(142, 128, 102, 0.2)' }}>
        <div className="flex items-center">
          <img
            src="/logo-anvar.png"
            alt="ÁNVAR 93 Logo"
            className="h-10 object-contain cursor-pointer transition-transform hover:scale-105"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </div>
        <div className="flex items-center space-x-8">
          <div className="text-sm tracking-wide">
            <a href="https://www.equanime.co/" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: '#8e8066', opacity: 0.7 }} onMouseEnter={(e) => e.target.style.opacity = '1'} onMouseLeave={(e) => e.target.style.opacity = '0.7'}>
              EQUÁNIME
            </a>
          </div>
          <a href="#contacto" className="px-6 py-2 rounded-full transition-all shadow-lg" style={{ backgroundColor: '#8e8066', color: '#27312d' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#a69373'} onMouseLeave={(e) => e.target.style.backgroundColor = '#8e8066'}>
            Pre-venta
          </a>
        </div>
      </nav>

      {/* Logo and 360° Virtual Tour */}
      <section className="relative z-10 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="text-center mb-8">
            <img
              src="/logo-anvar.png"
              alt="ÁNVAR 93 Logo"
              className="mx-auto h-24 md:h-32 object-contain"
            />
          </div>

          {/* 360° Virtual Tour */}
          <iframe
            className="ku-embed w-full h-96 rounded-2xl shadow-2xl"
            frameBorder="0"
            allow="xr-spatial-tracking; gyroscope; accelerometer"
            allowFullScreen
            scrolling="no"
            src="https://kuula.co/share/hjVM3?logo=1&info=1&fs=1&vr=0&zoom=1&sd=1&gyro=0&autorotate=0.08&thumbs=1&alpha=0.60&inst=es&keys=0"
          />
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6 md:px-12 lg:px-16 text-center">

        <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight" style={{ color: '#a69373' }}>
          El Nuevo Ícono de Bogotá
        </h1>

        <p className="text-xl md:text-2xl mb-12 max-w-4xl leading-relaxed" style={{ color: '#8e8066', opacity: 0.9 }}>
          Descubre el exclusivo desarrollo residencial en el corazón del Parque de la 93.
          Donde el lujo se encuentra con la inversión inteligente en la zona más privilegiada de Chicó.
        </p>

        <div className="flex justify-center mb-16">
          <a href="#contacto" className="px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all shadow-2xl" style={{ backgroundColor: '#8e8066', color: '#27312d' }}>
            Acceder a Pre-venta Privada
          </a>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl w-full px-4 mb-16">
          <div className="backdrop-blur-sm border rounded-2xl p-6 hover:scale-105 transition-all shadow-lg" style={{ backgroundColor: 'rgba(142, 128, 102, 0.1)', borderColor: 'rgba(142, 128, 102, 0.3)' }}>
            <div className="text-3xl font-bold mb-2" style={{ color: '#8e8066' }}>152</div>
            <p className="font-medium" style={{ color: '#8e8066', opacity: 0.8 }}>Apartamentos Exclusivos</p>
          </div>
          <div className="backdrop-blur-sm border rounded-2xl p-6 hover:scale-105 transition-all shadow-lg" style={{ backgroundColor: 'rgba(142, 128, 102, 0.1)', borderColor: 'rgba(142, 128, 102, 0.3)' }}>
            <div className="text-3xl font-bold mb-2" style={{ color: '#8e8066' }}>+1,250m²</div>
            <p className="font-medium" style={{ color: '#8e8066', opacity: 0.8 }}>Club House de Lujo</p>
          </div>
          <div className="backdrop-blur-sm border rounded-2xl p-6 hover:scale-105 transition-all shadow-lg" style={{ backgroundColor: 'rgba(142, 128, 102, 0.1)', borderColor: 'rgba(142, 128, 102, 0.3)' }}>
            <div className="text-3xl font-bold mb-2" style={{ color: '#8e8066' }}>+720m²</div>
            <p className="font-medium" style={{ color: '#8e8066', opacity: 0.8 }}>Zona Comercial</p>
          </div>
          <div className="backdrop-blur-sm border rounded-2xl p-6 hover:scale-105 transition-all shadow-lg" style={{ backgroundColor: 'rgba(142, 128, 102, 0.1)', borderColor: 'rgba(142, 128, 102, 0.3)' }}>
            <div className="text-3xl font-bold mb-2" style={{ color: '#8e8066' }}>25.49-56.55m²</div>
            <p className="font-medium" style={{ color: '#8e8066', opacity: 0.8 }}>Apartamentos Desde</p>
          </div>
        </div>

      </section>

      {/* Project Details Section */}
      <section id="proyecto" className="relative z-10 py-24 px-6 md:px-12 lg:px-16 backdrop-blur-sm" style={{ backgroundColor: 'rgba(142, 128, 102, 0.05)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#8e8066' }}>
              Exclusividad Redefinida
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#8e8066', opacity: 0.8 }}>
              En el corazón del Parque de la 93, donde cada detalle ha sido pensado para ofrecerte
              una experiencia de vida incomparable y una oportunidad de inversión excepcional.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center px-4">
            <div className="space-y-6">
              {/* Ubicación Privilegiada Dropdown */}
              <div className="border rounded-2xl hover:scale-105 transition-all shadow-lg hover:shadow-xl" style={{ backgroundColor: 'rgba(142, 128, 102, 0.1)', borderColor: 'rgba(142, 128, 102, 0.3)' }}>
                <button
                  onClick={() => toggleDropdown('ubicacion')}
                  className="w-full text-left p-6 flex justify-between items-center rounded-2xl transition-all"
                  style={{
                    ':hover': { backgroundColor: 'rgba(142, 128, 102, 0.2)' }
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(142, 128, 102, 0.2)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  <h3 className="text-2xl font-bold" style={{ color: '#8e8066' }}>Ubicación Privilegiada</h3>
                  <span className="text-2xl" style={{ color: '#8e8066' }}>
                    {openDropdown === 'ubicacion' ? '−' : '+'}
                  </span>
                </button>
                {mounted && (openDropdown === 'ubicacion' || closingDropdown === 'ubicacion') && (
                  <div
                    className="px-6 pb-6 overflow-hidden"
                    style={{
                      animation: openDropdown === 'ubicacion' ? 'slideDown 0.4s ease-out' : 'slideUp 0.4s ease-in'
                    }}
                  >
                    <p className="leading-relaxed text-lg mb-6 mt-4" style={{ color: '#8e8066', opacity: 0.8 }}>
                      Ubicado en el exclusivo Parque de la 93 en Chicó, la zona más valorizada de Bogotá.
                      Rodeado de la mejor gastronomía, centros comerciales de lujo y conectividad excepcional.
                    </p>
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src="/mapa-anvar.jpg"
                        alt="Mapa ÁNVAR 93 - Ubicación y distribución del proyecto"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Diseño Arquitectónico Dropdown */}
              <div className="border rounded-2xl hover:scale-105 transition-all shadow-lg hover:shadow-xl" style={{ backgroundColor: 'rgba(142, 128, 102, 0.1)', borderColor: 'rgba(142, 128, 102, 0.3)' }}>
                <button
                  onClick={() => toggleDropdown('diseno')}
                  className="w-full text-left p-6 flex justify-between items-center rounded-2xl transition-all"
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(166, 147, 115, 0.2)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  <h3 className="text-2xl font-bold" style={{ color: '#a69373' }}>Diseño Arquitectónico</h3>
                  <span className="text-2xl" style={{ color: '#a69373' }}>
                    {openDropdown === 'diseno' ? '−' : '+'}
                  </span>
                </button>
                {mounted && (openDropdown === 'diseno' || closingDropdown === 'diseno') && (
                  <div
                    className="px-6 pb-6 overflow-hidden"
                    style={{
                      animation: openDropdown === 'diseno' ? 'slideDown 0.4s ease-out' : 'slideUp 0.4s ease-in'
                    }}
                  >
                    <p className="leading-relaxed text-lg mt-4" style={{ color: '#8e8066', opacity: 0.8 }}>
                      Arquitectura contemporánea que combina elegancia y funcionalidad. Cada espacio
                      ha sido optimizado para maximizar el confort y la rentabilidad de tu inversión.
                    </p>
                  </div>
                )}
              </div>

              {/* Oportunidad de Inversión Dropdown */}
              <div className="border rounded-2xl hover:scale-105 transition-all shadow-lg hover:shadow-xl" style={{ backgroundColor: 'rgba(142, 128, 102, 0.1)', borderColor: 'rgba(142, 128, 102, 0.3)' }}>
                <button
                  onClick={() => toggleDropdown('inversion')}
                  className="w-full text-left p-6 flex justify-between items-center rounded-2xl transition-all"
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(142, 128, 102, 0.2)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  <h3 className="text-2xl font-bold" style={{ color: '#8e8066' }}>Oportunidad de Inversión</h3>
                  <span className="text-2xl" style={{ color: '#8e8066' }}>
                    {openDropdown === 'inversion' ? '−' : '+'}
                  </span>
                </button>
                {mounted && (openDropdown === 'inversion' || closingDropdown === 'inversion') && (
                  <div
                    className="px-6 pb-6 overflow-hidden"
                    style={{
                      animation: openDropdown === 'inversion' ? 'slideDown 0.4s ease-out' : 'slideUp 0.4s ease-in'
                    }}
                  >
                    <p className="leading-relaxed text-lg mt-4" style={{ color: '#8e8066', opacity: 0.8 }}>
                      Alto potencial de rentabilidad en una zona de constante valorización.
                      Perfecto para inversionistas que buscan rentabilidad garantizada en el sector premium.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="relative">
              <div className="border-2 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all" style={{ backgroundColor: 'rgba(142, 128, 102, 0.1)', borderColor: 'rgba(142, 128, 102, 0.3)' }}>
                <div className="space-y-6">
                  <div className="text-center">
                    <h4 className="text-2xl font-bold mb-4" style={{ color: '#8e8066' }}>Características Destacadas</h4>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 rounded-xl" style={{ backgroundColor: 'rgba(142, 128, 102, 0.15)' }}>
                      <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#8e8066' }}>
                        <RiBuilding2Fill className="text-xl" style={{ color: '#27312d' }} />
                      </div>
                      <div>
                        <h5 className="font-semibold" style={{ color: '#8e8066' }}>152 Unidades Residenciales</h5>
                        <p style={{ color: '#8e8066', opacity: 0.7 }}>Apartamentos de 25.49m² a 56.55m²</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 p-4 rounded-xl" style={{ backgroundColor: 'rgba(142, 128, 102, 0.15)' }}>
                      <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#a69373' }}>
                        <RiWaterFlashFill className="text-xl" style={{ color: '#27312d' }} />
                      </div>
                      <div>
                        <h5 className="font-semibold" style={{ color: '#8e8066' }}>Club House Premium</h5>
                        <p style={{ color: '#8e8066', opacity: 0.7 }}>Más de 1,250m² de amenidades</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 p-4 rounded-xl" style={{ backgroundColor: 'rgba(142, 128, 102, 0.15)' }}>
                      <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#8e8066' }}>
                        <RiStoreFill className="text-xl" style={{ color: '#27312d' }} />
                      </div>
                      <div>
                        <h5 className="font-semibold" style={{ color: '#8e8066' }}>Zona Comercial</h5>
                        <p style={{ color: '#8e8066', opacity: 0.7 }}>Más de 720m² comerciales</p>
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
      <section id="amenidades" className="relative z-10 py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#8e8066' }}>
              Amenidades de Lujo
            </h2>
            <p className="text-xl" style={{ color: '#8e8066', opacity: 0.8 }}>
              Disfruta de un estilo de vida único con las mejores amenidades de la ciudad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
            <div className="rounded-3xl p-8 hover:scale-105 transition-all shadow-xl" style={{ backgroundColor: 'rgba(142, 128, 102, 0.15)' }}>
              <div className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center" style={{ backgroundColor: '#8e8066' }}>
                <GiWaves className="text-3xl" style={{ color: '#27312d' }} />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#8e8066' }}>Piscina Infinity</h3>
              <p className="leading-relaxed" style={{ color: '#8e8066', opacity: 0.8 }}>
                Espectacular piscina infinita con vista directamente al Parque de la 93.
              </p>
            </div>

            <div className="rounded-3xl p-8 hover:scale-105 transition-all shadow-xl" style={{ backgroundColor: 'rgba(142, 128, 102, 0.15)' }}>
              <div className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center" style={{ backgroundColor: '#a69373' }}>
                <GiWeightLiftingUp className="text-3xl" style={{ color: '#27312d' }} />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#a69373' }}>Gimnasio Premium</h3>
              <p className="leading-relaxed" style={{ color: '#8e8066', opacity: 0.8 }}>
                Gimnasio completamente dotado con equipamento de última tecnología.
              </p>
            </div>

            <div className="rounded-3xl p-8 hover:scale-105 transition-all shadow-xl" style={{ backgroundColor: 'rgba(142, 128, 102, 0.15)' }}>
              <div className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center" style={{ backgroundColor: '#8e8066' }}>
                <IoWaterOutline className="text-3xl" style={{ color: '#27312d' }} />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#8e8066' }}>Circuito Hídrico</h3>
              <p className="leading-relaxed" style={{ color: '#8e8066', opacity: 0.8 }}>
                Un circuito hídrico que contiene masajes, sauna y cold plunge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="relative z-10 py-24 px-6 md:px-12 lg:px-16" style={{ backgroundColor: '#8e8066' }}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8" style={{ color: '#27312d' }}>
            Accede a la Pre-venta Privada
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: '#27312d', opacity: 0.8 }}>
            Sé parte de los primeros en conocer este exclusivo proyecto.
            Regístrate ahora y obtén condiciones preferenciales.
          </p>

          <div className="backdrop-blur-sm rounded-3xl p-8 mb-8" style={{ backgroundColor: 'rgba(39, 49, 45, 0.2)' }}>
            <form
              action="https://equanime.us5.list-manage.com/subscribe/post?u=6f1dbb9913f0dd514fadfc3b2&id=c1f89efb03&f_id=002acbe1f0"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate space-y-6"
              target="_blank"
              onSubmit={handleFormSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="FNAME"
                  id="mce-FNAME"
                  placeholder="Nombre"
                  required
                  className="px-6 py-4 rounded-xl border focus:outline-none focus:ring-2 transition-all"
                  style={{ backgroundColor: 'rgba(39, 49, 45, 0.9)', borderColor: 'rgba(39, 49, 45, 0.5)', color: '#8e8066' }}
                />
                <input
                  type="text"
                  name="LNAME"
                  id="mce-LNAME"
                  placeholder="Apellidos"
                  required
                  className="px-6 py-4 rounded-xl border focus:outline-none focus:ring-2 transition-all"
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
                className="w-full px-6 py-4 rounded-xl border focus:outline-none focus:ring-2 transition-all"
                style={{ backgroundColor: 'rgba(39, 49, 45, 0.9)', borderColor: 'rgba(39, 49, 45, 0.5)', color: '#8e8066' }}
              />

              {/* Phone number with searchable country selector */}
              <div className="flex gap-3">
                <div className="relative country-selector" style={{ width: '90px' }}>
                  <input
                    type="text"
                    value={selectedCountry}
                    onChange={handleCountryCodeChange}
                    onFocus={() => setShowCountryDropdown(true)}
                    placeholder="+57"
                    className="w-full px-4 py-4 rounded-xl border focus:outline-none focus:ring-2 transition-all text-center"
                    style={{ backgroundColor: 'rgba(39, 49, 45, 0.9)', borderColor: 'rgba(39, 49, 45, 0.5)', color: '#8e8066' }}
                  />
                  {showCountryDropdown && (
                    <div className="absolute top-full left-0 mt-1 rounded-xl border shadow-lg z-20 max-h-60 overflow-y-auto" style={{ backgroundColor: 'rgba(39, 49, 45, 0.95)', borderColor: 'rgba(39, 49, 45, 0.5)', width: '180px' }}>
                      {countries.map((country) => (
                        <div
                          key={country.code}
                          onClick={() => handleCountrySelect(country)}
                          className="px-4 py-3 cursor-pointer hover:bg-opacity-20 hover:bg-white transition-colors flex items-center space-x-3"
                          style={{ color: '#8e8066' }}
                        >
                          <FaCircle style={{ color: '#8e8066', fontSize: '8px' }} />
                          <span className="font-mono font-semibold">{country.code}</span>
                          <span className="text-sm opacity-75">{country.name}</span>
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
                  className="flex-1 px-6 py-4 rounded-xl border focus:outline-none focus:ring-2 transition-all"
                  style={{ backgroundColor: 'rgba(39, 49, 45, 0.9)', borderColor: 'rgba(39, 49, 45, 0.5)', color: '#8e8066' }}
                  onFocus={() => setShowCountryDropdown(false)}
                />
              </div>

              {/* Mailchimp hidden field */}
              <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                <input type="text" name="b_6f1dbb9913f0dd514fadfc3b2_c1f89efb03" tabIndex={-1} />
              </div>

              {/* Data protection policy checkbox */}
              <div className="flex items-start space-x-3">
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
                <label htmlFor="data-policy-agreement" className="text-sm leading-relaxed" style={{ color: '#27312d', opacity: 0.8 }}>
                  <span className="text-red-400">*</span> Acepto la{' '}
                  <a
                    href="/politica-datos"
                    target="_blank"
                    className="underline transition-colors"
                    style={{ color: '#27312d' }}
                    onMouseEnter={(e) => e.target.style.opacity = '1'}
                    onMouseLeave={(e) => e.target.style.opacity = '0.8'}
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
                className="w-full px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg hover:scale-105 cursor-pointer hover:cursor-pointer"
                style={{ backgroundColor: '#27312d', color: '#8e8066' }}
                onMouseEnter={(e) => {
                  e.target.style.cursor = 'pointer';
                  e.target.style.backgroundColor = '#3a4540';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#27312d';
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
      <footer className="relative z-10 py-12 px-6" style={{ backgroundColor: '#27312d' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center" style={{ color: '#8e8066', opacity: 0.7 }}>
            <p>&copy; 2024 ÁNVAR 93. Todos los derechos reservados.</p>
            <p className="mt-2">
              <a href="/politica-datos" className="transition-colors" style={{ color: '#8e8066' }} onMouseEnter={(e) => e.target.style.color = '#a69373'} onMouseLeave={(e) => e.target.style.color = '#8e8066'}>
                Política de Tratamiento de Datos
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="relative max-w-md w-full mx-4">
            <div
              className="rounded-3xl p-8 text-center shadow-2xl border animate-bounce"
              style={{ backgroundColor: '#8e8066', borderColor: 'rgba(39, 49, 45, 0.3)' }}
            >
              <div className="text-6xl mb-4">
                <IoCheckmarkCircle style={{ color: '#27312d' }} />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#27312d' }}>
                ¡Registro Exitoso!
              </h3>
              <p className="mb-6 leading-relaxed" style={{ color: '#27312d', opacity: 0.8 }}>
                Gracias por tu interés en ÁNVAR 93. Hemos recibido tu información y nos pondremos en contacto contigo muy pronto con detalles exclusivos del proyecto.
              </p>
              <button
                onClick={() => setShowSuccessPopup(false)}
                className="px-8 py-3 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg"
                style={{ backgroundColor: '#27312d', color: '#8e8066' }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#3a4540';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#27312d';
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
