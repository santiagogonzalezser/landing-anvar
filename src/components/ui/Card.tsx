import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  variant?: 'default' | 'stat' | 'amenity' | 'feature';
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  style = {},
  variant = 'default',
  hover = true,
}) => {
  const baseClasses = 'backdrop-blur-sm border rounded-2xl shadow-lg';
  const hoverClasses = '';

  const variantStyles = {
    default: {
      backgroundColor: 'rgba(142, 128, 102, 0.1)',
      borderColor: 'rgba(142, 128, 102, 0.3)',
    },
    stat: {
      backgroundColor: 'rgba(142, 128, 102, 0.1)',
      borderColor: 'rgba(142, 128, 102, 0.3)',
    },
    amenity: {
      backgroundColor: 'rgba(142, 128, 102, 0.15)',
    },
    feature: {
      backgroundColor: 'rgba(142, 128, 102, 0.1)',
      borderColor: 'rgba(142, 128, 102, 0.3)',
    },
  };

  const combinedStyle = {
    ...variantStyles[variant],
    ...style,
  };

  return (
    <div
      className={`${baseClasses} ${hoverClasses} ${className}`}
      style={combinedStyle}
    >
      {children}
    </div>
  );
};