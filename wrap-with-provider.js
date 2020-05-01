import React from 'react';
import { ToastProvider } from 'react-toast-notifications';

export const wrapWithProvider = ({ element }) => (
  <ToastProvider>{element}</ToastProvider>
);
