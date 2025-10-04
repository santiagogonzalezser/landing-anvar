import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { scrollToTop } from '@/lib/utils';

export const Navigation: React.FC = () => {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center px-2 sm:px-3 md:px-4 py-2 sm:py-4 backdrop-blur-sm border-b"
      style={{
        backgroundColor: 'rgba(39, 49, 45, 0.95)',
        borderBottomColor: 'rgba(142, 128, 102, 0.2)'
      }}
    >
      <div className="flex items-center space-x-2">
        <Button
          href="#contacto"
          className="text-[10px] sm:text-xs md:text-xs lg:text-sm px-2 py-0.5 sm:px-3 sm:py-0.5"
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
        className="flex-shrink-0"
        onClick={scrollToTop}
      >
        <Image
          src="/equanime-logo-new.png"
          alt="Equánime"
          width={180}
          height={54}
          className="h-5 sm:h-6 md:h-7 lg:h-8 w-auto object-contain cursor-pointer"
          style={{ maxWidth: '170px' }}
        />
      </a>
    </nav>
  );
};