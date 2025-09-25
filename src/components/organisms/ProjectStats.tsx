import React from 'react';
import { StatCard } from '@/components/ui/StatCard';
import { PROJECT_STATS } from '@/lib/constants';

export const ProjectStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 max-w-5xl w-full px-4 mb-8 sm:mb-12">
      {PROJECT_STATS.map((stat, index) => (
        <StatCard key={index} stat={stat} />
      ))}
    </div>
  );
};