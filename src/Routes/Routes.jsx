import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../Layouts/ErrorPage';
import Root from '../Layouts/Root';
import Home from '../components/Home';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import AllTouristsSpot from '../components/AllTouristsSpot';
import AddTouristsSpot from '../components/AddTouristsSpot';
import MyList from '../components/MyList';

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
        path: '/allTouristsSpot',
        element: <AllTouristsSpot></AllTouristsSpot>,
      },
      {
        path: '/addTouristsSpot',
        element: <AddTouristsSpot></AddTouristsSpot>,
      },
      {
        path: '/myList',
        element: <MyList></MyList>,
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
