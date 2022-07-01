import { useContext } from 'react';
import { Moon, Sun } from 'components/icons';
import { ThemeContext } from 'theme';
import { Wrapper } from './styles';

const ThemeToggler = () => {
  const context: any = useContext(ThemeContext);
  const { toggleTheme, theme } = context;
  console.log('🚀 ~ file: index.tsx ~ line 9 ~ ThemeToggler ~ theme', theme);

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
          <input
            id="toggle"
            name="toggle"
            type="checkbox"
            checked={theme === 'light'}
            onClick={toggleState}
          />
        </div>
      </label>
    </Wrapper>
  );
};

export default ThemeToggler;
