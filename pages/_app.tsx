import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';

import ThemeProvider from 'theme';
import Header from 'containers/Header';

const GlobalStyle = createGlobalStyle<any>`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.text};
    
  }

  a {
    color: ${({ theme }) => theme.color.text};
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
  main{
    height: calc(100vh - 100px);
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
