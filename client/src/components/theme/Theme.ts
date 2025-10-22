import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#008292',
      dark: '#abdee4',
    },
    secondary: {
      main: '#ecd4c8',
      dark: '#828789',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Amperzand, Arial',
      fontSize: 80,
    },
    h2: {
      fontFamily: 'Raleway',
    },
    h3: {
      fontFamily: 'Whitney',
    },
    h4: {},
    h5: {
      fontFamily: 'Raleway, Arial',
      fontSize: 26,
    },
    h6: {
      fontFamily: 'Raleway, Arial',
      fontSize: 24,
    },
    subtitle1: {
      fontFamily: 'Amperzand, Arial',
      fontSize: 40,
    },
    subtitle2: {
      fontFamily: 'Raleway, Arial',
      fontSize: 40,
    },
    body1: {
      fontFamily: 'Raleway, Arial',
      fontSize: 20,
    },
    body2: {
      fontFamily: 'Opensans, Arial',
      fontSize: 22,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 610,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
