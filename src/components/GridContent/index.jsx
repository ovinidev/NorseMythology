import P from 'prop-types';
import { Header } from '../Header';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import * as Styled from './styles';

export const GridContent = ({ title, html, background = false }) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Header uppercase colorDark={!background} as="h2">
          {title}
        </Header>
        <Styled.Html>
          <TextComponent>{html}</TextComponent>
        </Styled.Html>
      </Styled.Container>
    </SectionBackground>

  );
};

GridContent.propTypes = {
  children: P.string.isRequired,

};
