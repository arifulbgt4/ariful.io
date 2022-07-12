import { IStyles } from './IStyles';

const lightStyle: IStyles = {
  color: {
    text: '#111212',
    background: '#f6ece0',
    primary: '#ddd',
    secondary: '#6D59F0',
  },
  fonts: {
    a: "'Source Code Pro', monospace",
    b: "'Anton', sans-serif",
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
};

const darkStyle: IStyles = {
  color: {
    text: '#fff',
    background: '#000',
    primary: '#ddd',
    secondary: '#6D59F0',
  },
  fonts: {
    a: "'Source Code Pro', monospace",
    b: "'Anton', sans-serif",
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
};

export { lightStyle, darkStyle };
