import Link from 'next/link';
import { ArrowIcons } from 'components/icons';

import { IPostCard } from './Types';
import { PostWrapper, PostTitle } from './styles';

const PostCard = ({ title, id }: IPostCard) => (
  <Link href={`/p/${id}`}>
    <PostWrapper>
      <PostTitle>{title}</PostTitle>
      <ArrowIcons />
    </PostWrapper>
  </Link>
);

export default PostCard;
