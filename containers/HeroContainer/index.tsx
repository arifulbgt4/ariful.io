import Container from 'components/common/Container';
import Row from 'components/common/Row';
import Col from 'components/common/Col';
import IntroCard from 'components/IntroCard';

import PostList from 'containers/PostList';

import { Wrapper, Column } from './styles';

const HeroContainer = () => (
  <Wrapper>
    <Container>
      <Row>
        <Column>
          <IntroCard title="Hello" description="I am Ariful islam" />
        </Column>
        <Col>
          <PostList />
        </Col>
      </Row>
    </Container>
  </Wrapper>
);

export default HeroContainer;
