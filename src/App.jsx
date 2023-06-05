import GlobalStyle from './styles/GlobalStyle';
import Router from './Router';
import { ThemeProvider } from 'styled-components';
import initialize from './components/common/initialize';
import theme from './styles/theme';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    initialize();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
};

export default App;
