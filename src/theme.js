import { createTheme } from '@mui/material/styles';

// Import Inter font from Google Fonts
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

// Blue palette design system
export const themeConfig = {
  primary: {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3',
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
  },
  secondary: {
    50: '#f3e5f5',
    100: '#e1bee7',
    200: '#ce93d8',
    300: '#ba68c8',
    400: '#ab47bc',
    500: '#9c27b0',
    600: '#8e24aa',
    700: '#7b1fa2',
    800: '#6a1b9a',
    900: '#4a148c',
  },
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
    secondary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    success: 'linear-gradient(135deg, #4caf50 0%, #8bc34a 100%)',
    error: 'linear-gradient(135deg, #f44336 0%, #e57373 100%)',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  },
  shadows: {
    card: '0 8px 32px rgba(25, 118, 210, 0.15)',
    button: '0 4px 20px rgba(25, 118, 210, 0.3)',
    hover: '0 12px 40px rgba(25, 118, 210, 0.25)',
  }
};

export const theme = createTheme({
  palette: {
    primary: {
      main: themeConfig.primary[700],
      light: themeConfig.primary[300],
      dark: themeConfig.primary[900],
      contrastText: '#ffffff',
    },
    secondary: {
      main: themeConfig.secondary[500],
      light: themeConfig.secondary[300],
      dark: themeConfig.secondary[700],
    },
    background: {
      default: themeConfig.neutral[50],
      paper: '#ffffff',
    },
    text: {
      primary: themeConfig.neutral[900],
      secondary: themeConfig.neutral[600],
    },
    grey: themeConfig.neutral,
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      color: themeConfig.neutral[900],
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
      color: themeConfig.neutral[900],
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      color: themeConfig.neutral[900],
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      color: themeConfig.neutral[800],
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
      color: themeConfig.neutral[800],
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
      color: themeConfig.neutral[700],
    },
    body1: {
      fontSize: '1rem',
      color: themeConfig.neutral[700],
    },
    body2: {
      fontSize: '0.875rem',
      color: themeConfig.neutral[600],
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 12,
          fontWeight: 600,
          padding: '12px 24px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: themeConfig.shadows.button,
          },
        },
        contained: {
          background: themeConfig.gradients.primary,
          '&:hover': {
            background: 'linear-gradient(135deg, #1565c0 0%, #1976d2 100%)',
          },
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
            backgroundColor: 'rgba(25, 118, 210, 0.04)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: themeConfig.shadows.card,
          '&:hover': {
            boxShadow: themeConfig.shadows.hover,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: themeConfig.primary[400],
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: themeConfig.primary[600],
              borderWidth: 2,
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          fontWeight: 500,
        },
      },
    },
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme;
