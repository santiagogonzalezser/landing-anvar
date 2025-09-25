import React from 'react';
import { FaCircle } from 'react-icons/fa';
import { Country } from '@/types';
import { Input } from './Input';

interface CountrySelectorProps {
  selectedCountry: string;
  showDropdown: boolean;
  countries: Country[];
  onCountrySelect: (country: Country) => void;
  onCountryCodeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onClose: () => void;
}

export const CountrySelector: React.FC<CountrySelectorProps> = ({
  selectedCountry,
  showDropdown,
  countries,
  onCountrySelect,
  onCountryCodeChange,
  onFocus,
}) => {
  return (
    <div className="relative country-selector" style={{ width: '80px', minWidth: '80px' }}>
      <Input
        type="text"
        value={selectedCountry}
        onChange={onCountryCodeChange}
        onFocus={onFocus}
        placeholder="+57"
        className="w-full text-center"
      />
      <div suppressHydrationWarning>
        {showDropdown && (
          <div
            className="absolute top-full left-0 mt-1 rounded-lg sm:rounded-xl border shadow-lg z-20 max-h-60 overflow-y-auto"
            style={{
              backgroundColor: 'rgba(39, 49, 45, 0.95)',
              borderColor: 'rgba(39, 49, 45, 0.5)',
              width: '160px'
            }}
          >
            {countries.map((country) => (
              <div
                key={country.code}
                onClick={() => onCountrySelect(country)}
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
    </div>
  );
};