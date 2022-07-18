import React from 'react';
import PostCard from 'components/PostCard';
import Row from 'components/common/Row';

import { IPostList, IPosts } from './Types';
import { PostListWrapper, Column } from './styles';

const PostList = ({ data }: IPosts) => (
  <PostListWrapper>
    <Row>
      <>
        {data &&
          data.map((item) => (
            <Column key={item.id}>
              <PostCard title={item.title} id={item.id} />
            </Column>
          ))}
      </>
    </Row>
  </PostListWrapper>
);
export default PostList;
