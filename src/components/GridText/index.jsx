import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Header } from '../Header';
import { TextComponent } from '../TextComponent';

export const GridText = ({
  title, description, grid, background = false, 
}) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Header size="huge" uppercase colorDark={!background}>
          {title}
        </Header>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((el) => (
            <Styled.GridElement key={el.title}>
              <Header size="medium" colorDark={!background}>
                {el.title}
              </Header>
              <TextComponent>{el.description}</TextComponent>
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

GridText.propTypes = {
  background: P.bool,
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      description: P.string.isRequired,
    }),
  ).isRequired,
};
