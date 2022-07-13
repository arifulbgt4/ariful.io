import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.theme.bg};
  width: 30px;
  height: 30px;
  display: flex;
  justifuy-align: center;
  justify-items: center;
  align-items: center;
  border-radius: 100%;
  cursor: pointer;
  svg {
    fill: ${({ theme }) => theme.theme.fill};
    height: 17px;
    width: 17px;
    z-index: 0;
    margin: auto;
  }
`;
