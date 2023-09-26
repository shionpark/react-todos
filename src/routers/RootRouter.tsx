import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from '@/App';
import { Home, ErrorPage } from '../pages';

const RootRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);

export default RootRouter;
