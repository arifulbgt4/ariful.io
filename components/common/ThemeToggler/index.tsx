/* eslint-disable jsx-a11y/label-has-associated-control */
import { useContext } from 'react';
import { Moon, Sun } from 'components/icons';
import { ThemeContext } from 'theme';
import { Wrapper } from './styles';

const ThemeToggler = () => {
  const context: any = useContext(ThemeContext);
  const { toggleTheme, theme } = context;

  const toggleState = () => {
    toggleTheme();
  };

  return (
    <Wrapper onClick={toggleState}>
      <Moon />
    </Wrapper>
  );
};

export default ThemeToggler;
