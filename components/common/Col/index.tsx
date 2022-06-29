import { ICol } from './Types';
import { Wrapper } from './styles';

const Col = ({ children, className }: ICol) => (
  <Wrapper className={className}>{children}</Wrapper>
);

export default Col;
