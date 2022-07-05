import styled from 'styled-components';

export const Wrapper = styled.header`
  .toggle-wrapper {
    width: 80px;
    display: block;
    margin: auto; /* Centering for demo */
  }

  .toggle {
    height: 33px;
    width: 80px;
    background: #333333;
    border-radius: 40px;
    padding: 4px 6px;
    position: relative;
    transition: background 0.5s ease;
    cursor: pointer;
  }

  .toggle::before {
    content: '';
    display: block;
    height: 25px;
    width: 25px;
    border-radius: 30px;
    background: #f5f5f5;
    position: absolute;
    z-index: 2;
    transform: translate(0);
    transition: transform 0.5s ease, background 0.5s ease;
  }

  .toggle.enabled::before {
    transform: translateX(42px);
  }

  .toggle input {
    opacity: 0;
    position: absolute;
    top: 0;
  }

  .toggle .icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    margin: 0 5px;
  }

  .toggle .icons svg {
    fill: #f5f5f5;
    height: 20px;
    width: 20px;
    z-index: 0;
  }
`;
