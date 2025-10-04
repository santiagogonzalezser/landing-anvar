'use client';

import React, { useState, useEffect } from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { HeroSection } from '@/components/organisms/HeroSection';
import { ProjectDetailsSection } from '@/components/organisms/ProjectDetailsSection';
import { ApartamentosSection } from '@/components/organisms/ApartamentosSection';
import { ClubHouseSection } from '@/components/organisms/ClubHouseSection';
import { AmenitiesSection } from '@/components/organisms/AmenitiesSection';
import { ContactSection } from '@/components/organisms/ContactSection';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { useMousePosition } from '@/hooks/useMousePosition';
import { useScrollY } from '@/hooks/useScrollY';
import { theme } from '@/lib/theme';

export const HomePage: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const mousePosition = useMousePosition();
  const scrollY = useScrollY();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className="min-h-screen overflow-x-hidden max-w-full pt-12 sm:pt-16 md:pt-20"
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.text.primary,
        fontFamily: theme.fonts.primary
      }}
    >
      {/* Background animated elements */}
      <div suppressHydrationWarning>
        {mounted && (
          <AnimatedBackground mousePosition={mousePosition} scrollY={scrollY} />
        )}
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Hero Section with Logo and 360° Tour */}
      <HeroSection />

      {/* Project Details Section */}
      <ProjectDetailsSection />

      {/* Apartamentos Section */}
      <ApartamentosSection />

      {/* Club House Section */}
      <ClubHouseSection />

      {/* Amenities Section */}
      <AmenitiesSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
};