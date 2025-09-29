'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sidebar } from '@/components/ui/Sidebar';
import { ApartmentDisplay } from '@/components/organisms/ApartmentDisplay';
import { useApartmentSidebar } from '@/hooks/useApartmentSidebar';
import { APARTMENT_CATEGORIES } from '@/lib/constants';
import { theme } from '@/lib/theme';
import { RiArrowLeftLine, RiMenuLine } from 'react-icons/ri';

export const ApartmentosPage: React.FC = () => {
  const {
    isOpen,
    expandedCategory,
    selectedModel,
    toggleSidebar,
    toggleCategory,
    selectModel,
    getSelectedCategoryName,
  } = useApartmentSidebar(APARTMENT_CATEGORIES);

  const handleSelectCategory = (categoryId: string, modelId: string) => {
    // First expand the category
    toggleCategory(categoryId);
    // Then find and select the model
    const category = APARTMENT_CATEGORIES.find(cat => cat.id === categoryId);
    const model = category?.models.find(model => model.id === modelId);
    if (model) {
      selectModel(model);
    }
  };

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.text.primary,
        fontFamily: theme.fonts.primary
      }}
    >
      {/* Header */}
      <header
        className={`fixed top-0 right-0 z-50 border-b transition-all duration-300 ease-in-out ${
          isOpen ? 'left-[280px]' : 'left-0'
        } ${isOpen ? 'shadow-2xl' : 'shadow-sm'} lg:shadow-sm`}
        style={{
          backgroundColor: theme.colors.nav,
          borderColor: 'rgba(142, 128, 102, 0.2)'
        }}
      >
        <div className="px-4 lg:px-6 py-2 sm:py-3">
          <div className="flex items-center justify-between w-full">
            <Link
              href="/"
              className="flex items-center space-x-2 text-base font-medium hover:opacity-70 transition-opacity flex-shrink-0"
              style={{ color: theme.colors.text.primary }}
            >
              <RiArrowLeftLine size={20} />
              <span className="hidden sm:inline">Volver al inicio</span>
            </Link>

            <a
              href="https://www.equanime.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:scale-105 flex-shrink-0"
            >
              <Image
                src="/equanime-logo-new.png"
                alt="Un Proyecto de Equánime"
                width={180}
                height={54}
                className="h-6 sm:h-8 md:h-9 lg:h-10 xl:h-11 2xl:h-12 object-contain cursor-pointer"
              />
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <Sidebar
        categories={APARTMENT_CATEGORIES}
        isOpen={isOpen}
        expandedCategory={expandedCategory}
        selectedModel={selectedModel?.id || null}
        onToggleSidebar={toggleSidebar}
        onToggleCategory={toggleCategory}
        onSelectModel={selectModel}
      />

      {/* Main Content */}
      <div
        className={`min-h-screen pt-12 transition-all duration-300 ease-in-out flex flex-col ${
          isOpen ? 'ml-[280px]' : 'ml-0'
        }`}
      >
        {/* Sidebar Toggle Button */}
        <button
          onClick={toggleSidebar}
          className={`fixed top-20 z-40 p-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300 ease-in-out ${
            isOpen ? 'left-[300px]' : 'left-4'
          }`}
          style={{ backgroundColor: '#8e8066', color: '#27312d' }}
        >
          <RiMenuLine size={20} />
        </button>

        <div className="flex-1 flex flex-col justify-center min-h-0">
          <ApartmentDisplay
            selectedModel={selectedModel}
            categoryName={getSelectedCategoryName()}
            categories={APARTMENT_CATEGORIES}
            onSelectCategory={handleSelectCategory}
          />
        </div>
      </div>
    </div>
  );
};