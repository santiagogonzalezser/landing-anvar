import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { scrollToTop } from '@/lib/utils';

export const Navigation: React.FC = () => {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center px-4 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-3 sm:py-4 md:py-4 lg:py-5 xl:py-5 2xl:py-6 backdrop-blur-sm border-b"
      style={{
        backgroundColor: 'rgba(39, 49, 45, 0.95)',
        borderBottomColor: 'rgba(142, 128, 102, 0.2)'
      }}
    >
      <div className="flex items-center">
        <Button
          href="#contacto"
          className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-xl"
          variant="primary"
        >
          Lanzamiento
        </Button>
      </div>
      <div className="flex-1"></div>
      <div className="flex items-center">
        <a
          href="https://www.equanime.co/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all hover:scale-105"
          onClick={scrollToTop}
        >
          <Image
            src="/equanime-logo-new.png"
            alt="Equánime"
            width={180}
            height={54}
            className="h-8 sm:h-11 md:h-12 lg:h-14 xl:h-16 2xl:h-18 object-contain cursor-pointer"
          />
        </a>
      </div>
    </nav>
  );
};