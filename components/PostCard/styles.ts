import styled from 'styled-components';

export const PostWrapper = styled.div`
  margin: 10px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 4px;
  padding: 16px 12px;
  margin: 12px;
  text-decoration: none;
  z-index: 0;
  overflow: hidden;
  border: 1px solid #fff;
  position: relative;
  transition: all 0.2s ease-out;
  cursor: pointer;
  svg {
    transition: all 0.2s ease-out;
    width: 22px;
    color: #000;
  }

  &:hover {
    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
    /* top: -4px; */
    border: 1px solid #cccccc;
    background-color: white;
    svg {
      width: 25px;
    }
  }

  /* &:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 12px;
    right: -10px;
    background: #000;
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(3.15);
    transform-origin: -33% 50%;
    transition: transform-origin 0.2s ease-out;
  }

  &:hover:before {
    transform-origin: 50% 50%;
  } */
`;

export const PostTitle = styled.h3`
  color: #000;
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.a};
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;
