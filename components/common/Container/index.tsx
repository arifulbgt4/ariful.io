import { IContainer } from './Types';
import { Wrapper } from './styles';

const Container = ({ children }: IContainer) => <Wrapper>{children}</Wrapper>;

export default Container;
