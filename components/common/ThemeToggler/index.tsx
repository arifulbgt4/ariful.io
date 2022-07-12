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
    <Wrapper>
      <label className="toggle-wrapper" htmlFor="toggle">
        <div className={`toggle ${theme === 'light' ? 'enabled' : 'disabled'}`}>
          <div className="icons">
            <Sun />
            <Moon />
          </div>
        </div>
      </label>
      <input
        id="toggle"
        name="toggle"
        type="checkbox"
        // checked={theme === 'light'}
        onClick={toggleState}
      />
    </Wrapper>
  );
};

export default ThemeToggler;
