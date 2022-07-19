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
          <a
            className="glassIco"
            target="_blank"
            href="https://www.facebook.com/ariful25278/"
            rel="noreferrer"
          >
            <Facebook />
          </a>
          <a
            className="glassIco"
            target="_blank"
            href="https://www.linkedin.com/in/ariful25278/"
            rel="noreferrer"
          >
            <Linkedin />
          </a>
          <a
            className="glassIco"
            target="_blank"
            href="https://github.com/arifulbgt4"
            rel="noreferrer"
          >
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
