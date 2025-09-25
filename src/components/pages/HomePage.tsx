'use client';

import React, { useState, useEffect } from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { HeroSection } from '@/components/organisms/HeroSection';
import { ProjectStats } from '@/components/organisms/ProjectStats';
import { ProjectDetailsSection } from '@/components/organisms/ProjectDetailsSection';
import { AmenitiesSection } from '@/components/organisms/AmenitiesSection';
import { ContactSection } from '@/components/organisms/ContactSection';
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
      className="min-h-screen overflow-x-hidden max-w-full"
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.text.primary,
        paddingTop: '80px',
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

      {/* Key Stats */}
      <section className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 py-4 sm:py-6">
        <ProjectStats />
      </section>

      {/* Project Details Section */}
      <ProjectDetailsSection />

      {/* Amenities Section */}
      <AmenitiesSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};