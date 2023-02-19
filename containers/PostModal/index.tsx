import { useRouter } from 'next/router';

import PostPageContents from 'containers/PostPageContents';
import { ModalWrapper, Wrapper } from './styles';

const customStyles = {
  overlay: {
    background: 'rgba(255,255,255, 0.3)',
  },
};

const PostModal = () => {
  const router = useRouter();
  const onClose = () => {
    router.push('/');
  };
  return (
    <ModalWrapper
      isOpen={!!router?.query?.postId}
      onRequestClose={onClose}
      style={customStyles}
    >
      <Wrapper>
        <PostPageContents />
      </Wrapper>
    </ModalWrapper>
  );
};

export default PostModal;
