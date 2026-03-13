'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: "#1c4a2d", // Deep foliage green
    },
    secondary: {
      main: "#e55b3c", // Tomato red / Carrot orange blend
    },
    background: {
      default: "#fcf9f2", // Creamy off-white
      paper: "#ffffff",
    },
    text: {
      primary: "#1A4322",
      secondary: "#4a5d23",
    }
  },
  typography: {
    // Standard body text uses Roboto
    fontFamily: 'var(--font-roboto), sans-serif',
    // All headings use the elegant Lora font
    h1: { fontFamily: 'var(--font-lora), serif', fontWeight: 700 },
    h2: { fontFamily: 'var(--font-lora), serif', fontWeight: 600 },
    h3: { fontFamily: 'var(--font-lora), serif', fontWeight: 600 },
    h4: { fontFamily: 'var(--font-lora), serif', fontWeight: 600 },
    h5: { fontFamily: 'var(--font-lora), serif', fontWeight: 500 },
    h6: { fontFamily: 'var(--font-lora), serif', fontWeight: 500 },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Keeps it friendly and "fun" rather than corporate
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;