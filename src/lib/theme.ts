export const theme = {
  colors: {
    primary: '#27312d',
    secondary: '#8e8066',
    accent: '#a69373',
    background: '#27312d',
    text: {
      primary: '#8e8066',
      secondary: '#a69373',
      light: 'rgba(142, 128, 102, 0.8)',
      muted: 'rgba(142, 128, 102, 0.7)',
    },
    overlay: {
      light: 'rgba(142, 128, 102, 0.1)',
      medium: 'rgba(142, 128, 102, 0.15)',
      strong: 'rgba(142, 128, 102, 0.2)',
    },
    border: 'rgba(142, 128, 102, 0.3)',
    nav: 'rgba(39, 49, 45, 0.95)',
    form: 'rgba(39, 49, 45, 0.9)',
  },
  fonts: {
    primary: '"Century Gothic", "Lato", sans-serif',
    inter: 'var(--font-inter)',
  },
  animations: {
    slideDown: 'slideDown 0.4s ease-out',
    slideUp: 'slideUp 0.4s ease-in',
  },
} as const;