import React from 'react';
import { Card } from './Card';
import { ProjectStats } from '@/types';

interface StatCardProps {
  stat: ProjectStats;
}

export const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  return (
    <Card variant="stat" className="p-4 sm:p-5 text-center">
      <p className="font-medium mb-2 text-sm sm:text-base" style={{ color: '#8e8066', opacity: 0.8 }}>
        {stat.description}
      </p>
      <div className="text-xl sm:text-2xl md:text-3xl font-bold" style={{ color: '#8e8066' }}>
        {stat.value}
      </div>
    </Card>
  );
};