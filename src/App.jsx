import { styled, ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

import { IcLeftSmall } from './assets/icons';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <St.Wrapper>
        <IcLeftSmall />
        Assemble 선영 현지 효승
      </St.Wrapper>
    </ThemeProvider>
  );
};

export default App;

const St = {
  Wrapper: styled.article`
    background-color: ${({ theme }) => theme.colors.White};
    color: ${({ theme }) => theme.colors.Grey500};
    ${({ theme }) => theme.fonts.Title3};
  `,
};
