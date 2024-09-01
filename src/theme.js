import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
        primary: {
          main: '#EDFFEFDD',
          faded: '#EDFFEF70',
          unselected: '#6E8970DD',
          overlay: '#18241A',
          light: '#EDFFEFEA',

    },
    secondary: {
        main: '#DDFFED99',
    },
    experience: {
        box: '#CDDDFF0A'
    },
    background: '#0E1B10', //#18251D
    background2: '#2B3C2D',
  },
  typography: {
    h3: {
        fontSize: '2.5rem',
        '@media (max-width:640px)': {
            fontSize: '2.5rem',
          },
    },
    h6: {
        '@media (max-width:640px)': {
            fontSize: '20px'
          },
    },
    subtitle1: {
        lineHeight: '1.5rem',
        '@media (max-width:640px)': {
            fontSize: '18px'
          },
    },
    subtitle2: {
        // color: '#989898',
        fontSize: '14px',
        color: 'rgb(100 116 139/var(--tw-text-opacity))',
        '@media (max-width:640px)': {
            fontSize: '16px'
          },
    },
    timeline: {
        // color: '#989898',
        fontSize: '.75rem',
        lineHeight: '1.25rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '.1em',
        color: 'rgb(100 116 139/var(--tw-text-opacity))',
    },
  },
  breakpoints: {
    values: { // 520-950  below is tablet
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      mobile: 0,
      tablet: 520,
      desktop: 950, // 1024
    //   desktop: 1200,
    },
  },
});

export default theme;