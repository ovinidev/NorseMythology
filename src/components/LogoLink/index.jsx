import P from 'prop-types';
import { Header } from '../Header';
import * as Styled from './styles';

export const LogoLink = ({ text, link }) => {
  return (
    <Header size="small" uppercase>
      <Styled.Container href={link}>
        {text}
      </Styled.Container>
    </Header>

  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  link: P.string.isRequired,

};
