import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../Layouts/ErrorPage';
import Root from '../Layouts/Root';
import Home from '../components/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
    ],
  },
]);
