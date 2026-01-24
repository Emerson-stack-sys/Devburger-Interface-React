import { StrictMode } from 'react';
import AppProvider from './hooks/INDEX.JSX';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { router } from './routers';

import { RouterProvider } from 'react-router-dom';

import GlobalStyles from './styles/globalStyles';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
      <GlobalStyles />
      <ToastContainer autoClose={2000} theme='dark' />
    </AppProvider>
  </StrictMode>
);
