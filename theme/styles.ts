import { IStyles } from './IStyles';

const lightStyle: IStyles = {
  color: {
    text: '#111212',
    background: '#f6ece0',
    primary: '#ddd',
    secondary: '#6D59F0',
  },
  postCard: {
    textColor: '#333',
    bg: '#fff',
    hoverBg: '#fff',
    shadow: 'none',
    hoverShadow: '0px 4px 8px rgb(38 38 38 / 20%)',
    border: '1px solid #fff',
    hoverBorder: '1px solid #cccccc',
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
  postCard: {
    textColor: '#fff',
    bg: '#333',
    hoverBg: '#555',
    shadow: 'none',
    hoverShadow: '0px 4px 8px rgb(38 38 38 / 20%)',
    border: '1px solid #333',
    hoverBorder: '1px solid #555',
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
