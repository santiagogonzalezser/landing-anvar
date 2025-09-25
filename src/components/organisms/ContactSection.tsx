import React, { useEffect } from 'react';
import Script from 'next/script';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { CountrySelector } from '@/components/ui/CountrySelector';
import { useContactForm } from '@/hooks/useContactForm';
import { COUNTRIES, MAILCHIMP_CONFIG } from '@/lib/constants';

export const ContactSection: React.FC = () => {
  const {
    showSuccessPopup,
    setShowSuccessPopup,
    showValidationMessage,
    selectedCountry,
    showCountryDropdown,
    setShowCountryDropdown,
    handleFormSubmit,
    handleEmailValidation,
    handleCountrySelect,
    handleCountryCodeChange,
  } = useContactForm();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.country-selector')) {
        setShowCountryDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [setShowCountryDropdown]);

  return (
    <>
      <section id="contacto" className="relative z-10 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 lg:px-16" style={{ backgroundColor: '#8e8066' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 px-2" style={{ color: '#27312d' }}>
            Accede al Lanzamiento
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-4" style={{ color: '#27312d', opacity: 0.8 }}>
            Sé parte de los primeros en conocer este exclusivo proyecto.
            Regístrate ahora y obtén condiciones preferenciales.
          </p>

          <div className="backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8" style={{ backgroundColor: 'rgba(39, 49, 45, 0.2)' }}>
            <form
              action={MAILCHIMP_CONFIG.actionUrl}
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate space-y-4 sm:space-y-6"
              target="_blank"
              onSubmit={handleFormSubmit}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <Input
                  name="FNAME"
                  id="mce-FNAME"
                  placeholder="Nombre"
                  required
                />
                <Input
                  name="LNAME"
                  id="mce-LNAME"
                  placeholder="Apellidos"
                  required
                />
              </div>

              <Input
                type="email"
                name="EMAIL"
                id="mce-EMAIL"
                placeholder="Correo electrónico"
                required
                onBlur={handleEmailValidation}
                className="w-full"
              />

              <div className="flex gap-2 sm:gap-3">
                <CountrySelector
                  selectedCountry={selectedCountry}
                  showDropdown={showCountryDropdown}
                  countries={COUNTRIES}
                  onCountrySelect={handleCountrySelect}
                  onCountryCodeChange={handleCountryCodeChange}
                  onFocus={() => setShowCountryDropdown(true)}
                  onClose={() => setShowCountryDropdown(false)}
                />
                <Input
                  type="tel"
                  name="PHONE"
                  id="mce-PHONE"
                  placeholder="Número de teléfono"
                  className="flex-1 min-w-0"
                  onFocus={() => setShowCountryDropdown(false)}
                />
              </div>

              <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                <input type="text" name={MAILCHIMP_CONFIG.hiddenField} tabIndex={-1} />
              </div>

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
                  >
                    Política de Tratamiento de Datos Personales
                  </a>
                  {' '}y autorizo el tratamiento de mis datos personales para las finalidades descritas en dicha política.
                </label>
              </div>

              <div suppressHydrationWarning>
                {showValidationMessage && (
                  <div className="p-4 rounded-xl border-2 border-red-400 bg-red-100 text-red-700 text-center animate-pulse">
                    <p className="font-semibold">¡Atención!</p>
                    <p>Debe aceptar la Política de Tratamiento de Datos Personales para continuar.</p>
                  </div>
                )}
              </div>

              <Button
                type="submit"
                variant="secondary"
                className="w-full text-sm sm:text-base md:text-lg font-bold"
              >
                Solicitar Información Exclusiva
              </Button>

              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response" style={{ display: 'none', color: '#ff4444', textAlign: 'center', marginTop: '10px' }}></div>
                <div className="response" id="mce-success-response" style={{ display: 'none', color: '#44ff44', textAlign: 'center', marginTop: '10px' }}></div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Success Popup */}
      <div suppressHydrationWarning>
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
                <Button
                  onClick={() => setShowSuccessPopup(false)}
                  variant="secondary"
                  className="text-sm sm:text-base font-semibold"
                >
                  Continuar
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mailchimp Scripts */}
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
    </>
  );
};