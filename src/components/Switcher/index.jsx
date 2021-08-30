import P from 'prop-types';

import { useContext } from 'react';

import { ThemeContext } from 'styled-components';
import { Container, Input } from './styles';

export const Switcher = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);

  return (
    <Container>
      {title === 'dark'
        ? (<Input type="image" alt="image" src="https://image.flaticon.com/icons/png/512/979/979585.png" width="25" height="15" onClick={toggleTheme} />)
        : (<Input type="image" alt="image" src="https://image.flaticon.com/icons/png/512/2949/2949009.png" width="25" height="15" onClick={toggleTheme} />)}

    </Container>
  );
};

Switcher.propTypes = {
  toggleTheme: P.func.isRequired,
};
