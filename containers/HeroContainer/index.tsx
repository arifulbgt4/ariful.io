import Container from 'components/common/Container';
import Row from 'components/common/Row';
import IntroCard from 'components/IntroCard';

import PostList from 'containers/PostList';

import { Wrapper, LeftColumn, RightColumn } from './styles';

const HeroContainer = () => (
  <Wrapper>
    <Container>
      <Row>
        <LeftColumn>
          <PostList />
        </LeftColumn>
        <RightColumn>
          <IntroCard />
        </RightColumn>
      </Row>
    </Container>
  </Wrapper>
);

export default HeroContainer;
