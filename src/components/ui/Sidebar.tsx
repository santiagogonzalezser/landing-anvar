import React from 'react';
import { ApartmentCategory, ApartmentModel } from '@/types';
import { theme } from '@/lib/theme';
import { RiArrowRightSLine, RiArrowDownSLine, RiMenuLine, RiCloseLine } from 'react-icons/ri';

interface SidebarProps {
  categories: ApartmentCategory[];
  isOpen: boolean;
  expandedCategory: string | null;
  selectedModel: string | null;
  onToggleSidebar: () => void;
  onToggleCategory: (categoryId: string) => void;
  onSelectModel: (model: ApartmentModel) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  categories,
  isOpen,
  expandedCategory,
  selectedModel,
  onToggleSidebar,
  onToggleCategory,
  onSelectModel,
}) => {
  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 bottom-0 z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{
          backgroundColor: '#8e8066',
          width: '280px',
          borderRight: '2px solid #27312d'
        }}
      >
        <div className="p-6 pt-16 h-full overflow-y-auto">
          <h2
            className="text-2xl font-bold mb-6 text-center"
            style={{ color: '#27312d' }}
          >
            Modelos
          </h2>

          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category.id}>
                <button
                  onClick={() => onToggleCategory(category.id)}
                  className="w-full flex items-center justify-between p-3 rounded-lg transition-colors"
                  style={{
                    color: '#27312d',
                    backgroundColor: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(39, 49, 45, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <span className="font-medium">{category.name}</span>
                  {expandedCategory === category.id ? (
                    <RiArrowDownSLine size={20} />
                  ) : (
                    <RiArrowRightSLine size={20} />
                  )}
                </button>

                {expandedCategory === category.id && (
                  <div className="ml-4 mt-2 space-y-1">
                    {category.models.map((model) => (
                      <button
                        key={model.id}
                        onClick={() => onSelectModel(model)}
                        className="w-full text-left p-2 rounded-lg transition-colors"
                        style={{
                          color: selectedModel === model.id ? '#8e8066' : '#27312d',
                          backgroundColor: selectedModel === model.id ? '#27312d' : 'transparent',
                          fontWeight: selectedModel === model.id ? '600' : '400'
                        }}
                        onMouseEnter={(e) => {
                          if (selectedModel !== model.id) {
                            e.currentTarget.style.backgroundColor = 'rgba(39, 49, 45, 0.1)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (selectedModel !== model.id) {
                            e.currentTarget.style.backgroundColor = 'transparent';
                          }
                        }}
                      >
                        {model.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};