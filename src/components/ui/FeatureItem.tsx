import React from 'react';

interface FeatureItemProps {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  title: string;
  description: string;
  bgColor: string;
}

export const FeatureItem: React.FC<FeatureItemProps> = ({
  icon: Icon,
  title,
  description,
  bgColor,
}) => {
  return (
    <div
      className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg sm:rounded-xl"
      style={{ backgroundColor: 'rgba(142, 128, 102, 0.15)' }}
    >
      <div
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: bgColor }}
      >
        <Icon className="text-lg sm:text-xl" style={{ color: '#27312d' }} />
      </div>
      <div className="min-w-0 flex-1">
        <h5 className="font-semibold text-sm sm:text-base" style={{ color: '#8e8066' }}>
          {title}
        </h5>
        <p className="text-xs sm:text-sm" style={{ color: '#8e8066', opacity: 0.7 }}>
          {description}
        </p>
      </div>
    </div>
  );
};