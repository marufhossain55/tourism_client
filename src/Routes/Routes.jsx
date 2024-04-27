import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../Layouts/ErrorPage';
import Root from '../Layouts/Root';
import Home from '../components/Home';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

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
      {
        path: '/singIn',
        element: <SignIn></SignIn>,
      },
      {
        path: '/singUp',
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
