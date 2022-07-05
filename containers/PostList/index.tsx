import React from 'react';
import PostCard from 'components/PostCard';
import Row from 'components/common/Row';

import { PostListWrapper, Column } from './styles';

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

const PostList = () => (
  <PostListWrapper>
    <Row>
      <>
        {data &&
          data.map((item) => (
            <Column key={item.id}>
              <PostCard title={item.title} />
            </Column>
          ))}
      </>
    </Row>
  </PostListWrapper>
);
export default PostList;
