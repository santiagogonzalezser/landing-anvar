import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 py-8 sm:py-10 md:py-12 px-4 sm:px-6" style={{ backgroundColor: '#27312d' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center" style={{ color: '#8e8066', opacity: 0.7 }}>
          <p className="text-sm sm:text-base">&copy; 2024 ARIA 93. Todos los derechos reservados.</p>
          <p className="mt-2">
            <a
              href="https://politica-datos.vercel.app/"
              className="transition-colors text-sm sm:text-base"
              style={{ color: '#8e8066' }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#a69373'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#8e8066'}
            >
              Política de Tratamiento de Datos
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};