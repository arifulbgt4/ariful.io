export interface IStyles {
  color: {
    text: string;
    background: string;
    primary: string;
    secondary: string;
  };
  postCard: {
    textColor: string;
    bg: string;
    hoverBg: string;
    shadow: string;
    hoverShadow: string;
    border: string;
    hoverBorder: string;
  };
  fonts: {
    a: string;
  };
  fontWeight: {
    light: number;
    regular: number;
    medium: number;
    semiBold: number;
    bold: number;
  };
  theme: {
    bg: string;
    fill: string;
  };
}
