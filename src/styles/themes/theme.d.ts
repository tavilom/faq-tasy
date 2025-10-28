import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      bgGradient: string;
    };
  }
  // Permite configurar o tema via createTheme
  interface ThemeOptions {
    custom?: {
      bgGradient?: string;
    };
  }
}
