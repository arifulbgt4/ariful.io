import Container from 'components/common/Container';
import Row from 'components/common/Row';
import Col from 'components/common/Col';
import IntroCard from 'components/IntroCard';

import PostList from 'containers/PostList';

import { Wrapper } from './styles';

const HeroContainer = () => (
  <Wrapper>
    <Container>
      <Row>
        <Col>
          <IntroCard title="Hello" description="I am Ariful islam" />
        </Col>
        <Col>
          <PostList />
        </Col>
      </Row>
    </Container>
  </Wrapper>
);

export default HeroContainer;
