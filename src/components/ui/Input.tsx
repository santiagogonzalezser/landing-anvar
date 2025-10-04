import React from 'react';

interface InputProps {
  type?: string;
  name?: string;
  id?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
  style?: React.CSSProperties;
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  name,
  id,
  placeholder,
  required = false,
  value,
  onChange,
  onBlur,
  onFocus,
  className = '',
  style = {},
}) => {
  const defaultStyle = {
    backgroundColor: 'rgba(39, 49, 45, 0.9)',
    borderColor: 'rgba(39, 49, 45, 0.5)',
    color: '#8e8066',
    ...style,
  };

  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      required={required}
      {...(value !== undefined && { value, onChange })}
      onBlur={onBlur}
      onFocus={onFocus}
      className={`px-4 py-3 sm:px-6 sm:py-4 rounded-lg sm:rounded-xl border focus:outline-none focus:ring-2 transition-all text-sm sm:text-base ${className}`}
      style={defaultStyle}
    />
  );
};