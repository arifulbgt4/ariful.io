import styled from 'styled-components';
import Col from 'components/common/Col';

export const PostListWrapper = styled.div`
  width: 100%;
  padding: 0;
  height: calc(100vh - 140px);
  overflow-y: scroll;

  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    /* background: #f1f1f1; */
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 50px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
export const Column = styled(Col)`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
`;
