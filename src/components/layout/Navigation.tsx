import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { scrollToTop } from '@/lib/utils';

export const Navigation: React.FC = () => {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center px-4 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-2 sm:py-3 md:py-3 lg:py-3 xl:py-3 2xl:py-4 backdrop-blur-sm border-b"
      style={{
        backgroundColor: 'rgba(39, 49, 45, 0.95)',
        borderBottomColor: 'rgba(142, 128, 102, 0.2)'
      }}
    >
      <div className="flex items-center space-x-4">
        <Button
          href="#contacto"
          className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-xl"
          variant="primary"
        >
          Lanzamiento
        </Button>
      </div>
      <div className="flex-1"></div>
      <a
        href="https://www.equanime.co/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-all hover:scale-105 flex-shrink-0"
        onClick={scrollToTop}
      >
        <Image
          src="/equanime-logo-new.png"
          alt="Equánime"
          width={180}
          height={54}
          className="h-6 sm:h-8 md:h-9 lg:h-10 xl:h-11 2xl:h-12 w-auto object-contain cursor-pointer"
          style={{ maxWidth: '180px' }}
        />
      </a>
    </nav>
  );
};