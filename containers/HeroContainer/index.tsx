import Container from 'components/common/Container';
import Row from 'components/common/Row';
import IntroCard from 'components/IntroCard';

import PostList from 'containers/PostList';

import { Wrapper, LeftColumn, RightColumn } from './styles';

const data: Array<{ id: number; title: string }> = [
  {
    id: 1,
    title: 'title 1',
  },
  {
    id: 2,
    title: 'title 2',
  },
  {
    id: 3,
    title: 'title 3',
  },
  {
    id: 4,
    title: 'title 4',
  },
];

const HeroContainer = () => (
  <Wrapper>
    <Container>
      <Row>
        <LeftColumn>
          <PostList data={data} />
        </LeftColumn>
        <RightColumn>
          <IntroCard />
        </RightColumn>
      </Row>
    </Container>
  </Wrapper>
);

export default HeroContainer;
