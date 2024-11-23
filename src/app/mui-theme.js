'use client';
import { extendTheme } from '@mui/material/styles';

const theme = extendTheme({
  cssVarPrefix: 'mui', // Optional: Defines a prefix for CSS variables
  cssVariables: true,
  colorSchemes: {
    light: {
      palette: {
        mode: 'dark',
        primary: {
          main: '#98fc77',
        },
        secondary: {
          main: '#00989B',
        },
        text: {
          primary: '#ffffff',
        },
      },
    },
    dark: {
      palette: {
        mode: 'dark',
        primary: {
          main: '#98fc77',
        },
        secondary: {
          main: '#7BCD60',
        },
        text: {
          primary: '#ffffff',
        },
      },
    },
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme;