import { useState } from 'react';
import { DropdownState } from '@/types';

export const useDropdown = () => {
  const [openDropdown, setOpenDropdown] = useState<DropdownState>(null);
  const [closingDropdown, setClosingDropdown] = useState<DropdownState>(null);

  const toggleDropdown = (dropdownId: string) => {
    if (openDropdown === dropdownId) {
      // Start closing animation
      setClosingDropdown(dropdownId);
      setOpenDropdown(null);
      // Remove from DOM after animation completes
      setTimeout(() => {
        setClosingDropdown(null);
      }, 400);
    } else {
      setClosingDropdown(null);
      setOpenDropdown(dropdownId);
    }
  };

  return {
    openDropdown,
    closingDropdown,
    toggleDropdown,
  };
};