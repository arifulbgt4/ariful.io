import { Facebook, Linkedin, Github } from 'components/icons';
import ThemeToggler from 'components/common/ThemeToggler';
import UserIcon from './UserIcon';

import {
  HeaderWrapper,
  UserWrapper,
  BannerWrapper,
  UserIconWrapper,
  SocialWrapper,
  Column,
  Text,
} from './styles';

const Header = () => (
  <HeaderWrapper>
    <Column>
      <BannerWrapper>Journey to learning</BannerWrapper>
      <UserWrapper>
        <SocialWrapper>
          <a className="glassIco" href="#">
            <Facebook />
          </a>
          <a className="glassIco" href="#">
            <Linkedin />
          </a>
          <a className="glassIco" href="#">
            <Github />
          </a>
        </SocialWrapper>
        <UserIconWrapper>
          <UserIcon />
        </UserIconWrapper>
        <Text>Ariful islam</Text>
        <ThemeToggler />
      </UserWrapper>
    </Column>
  </HeaderWrapper>
);

export default Header;
