/* eslint-disable react/jsx-no-constructed-context-values */
import { useState, useMemo, createContext, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';

import { lightStyle, darkStyle } from './styles';
import { ITheme } from './ITheme';

export const ThemeContext = createContext({});

const Theme = ({ children }: ITheme) => {
  const [theme, setTheme] = useState('dark');

  const themeProvider = useMemo(() => {
    if (theme === 'dark') {
      return darkStyle;
    }
    return lightStyle;
  }, [theme]);

  const toggleTheme = useCallback(() => {
    if (typeof window !== 'undefined') {
      const themeColor = localStorage.getItem('theme');

      if (themeColor === 'light') {
        setTheme('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        setTheme('light');
        localStorage.setItem('theme', 'light');
      }
    }
  }, []);

  const contextValue = { toggleTheme, theme };

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={themeProvider}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default Theme;
