export interface Country {
  code: string;
  name: string;
}

export interface MousePosition {
  x: number;
  y: number;
}

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface ProjectStats {
  title: string;
  value: string;
  description: string;
}

export interface Amenity {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  bgColor: string;
}

export interface DropdownSection {
  id: string;
  title: string;
  content: React.ReactNode;
  titleColor: string;
  hoverColor: string;
}

export type DropdownState = string | null;

export interface ApartmentModel {
  id: string;
  name: string;
  image: string;
  images?: string[];
  description?: string;
  area?: string;
  bedrooms?: number;
  bathrooms?: number;
  metraje?: {
    areaConstructed?: string;
    areaPrivate?: string;
    areaExterior?: string;
  };
  apartmentNumbers?: string[];
  models?: string[];
}

export interface ApartmentCategoryInfo {
  description: string;
  metrageRange?: string;
  apartmentNumbers: string[];
  models: string[];
  location?: string;
  features?: string[];
}

export interface ApartmentCategory {
  id: string;
  name: string;
  models: ApartmentModel[];
  info?: ApartmentCategoryInfo;
}

export interface SidebarState {
  isOpen: boolean;
  expandedCategory: string | null;
}