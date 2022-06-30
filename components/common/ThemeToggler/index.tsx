import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'components/icons';
import { Wrapper } from './styles';

const ThemeToggler = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  // useEffect(() => {
  //   updateTheme(isEnabled);
  // }, [isEnabled]);

  const toggleState = () => {
    setIsEnabled((prevState) => !prevState);
  };
  return (
    <Wrapper>
      <label className="toggle-wrapper" htmlFor="toggle">
        <div className={`toggle ${isEnabled ? 'enabled' : 'disabled'}`}>
          <div className="icons">
            <Sun />
            <Moon />
          </div>
          <input
            id="toggle"
            name="toggle"
            type="checkbox"
            checked={isEnabled}
            onClick={toggleState}
          />
        </div>
      </label>
    </Wrapper>
  );
};

export default ThemeToggler;
