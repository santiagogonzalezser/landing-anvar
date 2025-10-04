import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  style?: React.CSSProperties;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  className = '',
  style = {},
  type = 'button',
  variant = 'primary',
}) => {
  const baseClasses = 'rounded-full font-semibold shadow-2xl';

  const variantStyles = {
    primary: {
      backgroundColor: '#8e8066',
      color: '#27312d',
    },
    secondary: {
      backgroundColor: '#27312d',
      color: '#8e8066',
    },
  };

  const combinedStyle = {
    ...variantStyles[variant],
    ...style,
  };

  if (href) {
    return (
      <a
        href={href}
        className={`${baseClasses} ${className}`}
        style={combinedStyle}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
      style={combinedStyle}
    >
      {children}
    </button>
  );
};