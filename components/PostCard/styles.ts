import styled from 'styled-components';

export const PostWrapper = styled.div`
  margin: 10px;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.postCard.bg};
  border-radius: 4px;
  padding: 16px 12px;
  margin: 12px;
  text-decoration: none;
  z-index: 0;
  overflow: hidden;
  border: ${({ theme }) => theme.postCard.border};
  position: relative;
  transition: all 0.2s ease-out;
  cursor: pointer;
  svg {
    transition: all 0.2s ease-out;
    width: 22px;
    color: ${({ theme }) => theme.postCard.textColor};
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.postCard.hoverShadow};
    /* top: -4px; */
    border: ${({ theme }) => theme.postCard.hoverBorder};
    background-color: ${({ theme }) => theme.postCard.hoverBg};
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
  color: ${({ theme }) => theme.postCard.textColor};
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.a};
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;
