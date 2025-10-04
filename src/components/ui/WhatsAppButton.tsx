'use client';

import React from 'react';
import { RiWhatsappFill } from 'react-icons/ri';

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://t.me/n8n_testeq_bot"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 p-3 sm:p-4 rounded-full shadow-2xl transition-transform hover:scale-110"
      style={{ backgroundColor: '#25D366' }}
      aria-label="Contactar por WhatsApp"
    >
      <RiWhatsappFill className="w-6 h-6 sm:w-8 sm:h-8" color="white" />
    </a>
  );
};
