import UserIcon from './UserIcon';
import { HeaderWrapper, UserWrapper, Column, Text } from './styles';

const Header = () => (
  <HeaderWrapper>
    <Column>
      <UserWrapper>
        <UserIcon />
        <Text>Ariful islam</Text>
      </UserWrapper>
    </Column>
  </HeaderWrapper>
);

export default Header;
