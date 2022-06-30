import styled from 'styled-components';
import Col from 'components/common/Col';

export const HeaderWrapper = styled.header`
  display: block;
  border-bottom: 1px solid #ddd;
  max-width: 80%;
  margin: 40px auto;
`;

export const Column = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const UserIconWrapper = styled.div`
  margin: 5px;
  width: 36px;
  height: 36px;
  background: #ddd;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 25px;
  }
`;
export const SocialWrapper = styled.div`
  display: flex;
  margin-right: 40px;
  .glassIco {
    color: #fff;
    background: #000;
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
    width: 36px;
    /* height: 28px; */
    padding: 7px;
    margin: 5px 4px;
    transition: all 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background: #686868;
    }
    svg {
      width: 20px;
    }
  }
`;
export const BannerWrapper = styled.div`
  display: flex;
`;

export const Text = styled.p`
  font-size: 18px;
  margin: 0 10px 5px;
`;
