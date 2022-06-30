import Container from 'components/common/Container';
import Row from 'components/common/Row';
import Col from 'components/common/Col';
// import IntroCard from 'components/IntroCard';

import PostList from 'containers/PostList';

import { Wrapper, LeftColumn, RightColumn } from './styles';

const HeroContainer = () => (
  <Wrapper>
    <Container>
      <Row>
        <LeftColumn>
          <PostList />
        </LeftColumn>
        <RightColumn>empty</RightColumn>
      </Row>
    </Container>
  </Wrapper>
);

export default HeroContainer;
