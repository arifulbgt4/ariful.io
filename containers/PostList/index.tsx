import React from 'react';
import PostCard from 'components/PostCard';
import Row from 'components/common/Row';

import { PostListWrapper, Column } from './styles';

const PostList = () => (
  <PostListWrapper>
    <Row>
      <Column>
        <PostCard title="title 1" />
      </Column>
      <Column>
        <PostCard title="title 2" />
      </Column>
      <Column>
        <PostCard title="title 3" />
      </Column>
      <Column>
        <PostCard title="title 4" />
      </Column>
    </Row>
  </PostListWrapper>
);

export default PostList;
