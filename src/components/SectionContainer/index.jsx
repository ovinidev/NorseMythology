import P from 'prop-types';
import * as Styled from './styles';

export const SectionContainer = ({ children }) => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  );
};

LogoLink.propTypes = {
  children: P.node.isRequired,
};
