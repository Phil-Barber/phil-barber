import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/style';

export const wrapWithProvider = ({ element }) => (
  <ThemeProvider theme={theme}>
    <ToastProvider>{element}</ToastProvider>
  </ThemeProvider>
);
