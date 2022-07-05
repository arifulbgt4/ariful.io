import { ArrowIcons } from 'components/icons';

import { IPostCard } from './Types';
import { PostWrapper, PostTitle } from './styles';

const PostCard = ({ title }: IPostCard) => (
  <PostWrapper>
    <PostTitle>{title}</PostTitle>
    <ArrowIcons />
  </PostWrapper>
);

export default PostCard;
