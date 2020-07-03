import * as React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from './src/style';

const GlobalStyle = createGlobalStyle`
  a {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

interface Props {
  element: React.ReactNode;
}

export const wrapWithProvider = ({ element }: Props): React.FC<Props> => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <ToastProvider>{element}</ToastProvider>
  </ThemeProvider>
);
