import { useState } from 'react';
import { Country } from '@/types';
import { validateEmail } from '@/lib/utils';

export const useContactForm = () => {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showValidationMessage, setShowValidationMessage] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('+57');
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

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

  const handleEmailValidation = (e: React.FocusEvent<HTMLInputElement>) => {
    const email = e.target.value;

    if (email && !validateEmail(email)) {
      e.target.setCustomValidity('Por favor ingresa un correo electrónico válido');
    } else {
      e.target.setCustomValidity('');
    }
  };

  const handleCountrySelect = (country: Country) => {
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

  return {
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
  };
};