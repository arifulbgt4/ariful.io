import { IIntroCard } from './Types';
import { Wrapper, Title, Description } from './styles';

const IntroCard = ({ title, description }: IIntroCard) => (
  <Wrapper>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Wrapper>
);

export default IntroCard;
