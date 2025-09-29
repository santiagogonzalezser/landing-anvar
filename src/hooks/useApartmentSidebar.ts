import { useState } from 'react';
import { ApartmentModel, ApartmentCategory } from '@/types';

export const useApartmentSidebar = (categories: ApartmentCategory[]) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<ApartmentModel | null>(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleCategory = (categoryId: string) => {
    if (expandedCategory === categoryId) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(categoryId);
    }
  };

  const selectModel = (model: ApartmentModel) => {
    setSelectedModel(model);
    // Keep sidebar open when apartment is selected
    setIsOpen(true);
  };

  const getSelectedCategoryName = () => {
    if (!selectedModel) return undefined;

    const category = categories.find(cat =>
      cat.models.some(model => model.id === selectedModel.id)
    );

    return category?.name;
  };

  return {
    isOpen,
    expandedCategory,
    selectedModel,
    toggleSidebar,
    toggleCategory,
    selectModel,
    getSelectedCategoryName,
  };
};