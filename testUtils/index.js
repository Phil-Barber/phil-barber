import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/style';
import '@testing-library/jest-dom/extend-expect';

const customRender = (ui, options, store) => {
  const AllTheProviders = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
  return render(ui, { wrapper: AllTheProviders, ...options });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
