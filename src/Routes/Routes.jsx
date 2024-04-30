import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../Layouts/ErrorPage';
import Root from '../Layouts/Root';
import Home from '../components/Home';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import AllTouristsSpot from '../components/AllTouristsSpot';
import AddTouristsSpot from '../components/AddTouristsSpot';
import MyList from '../components/MyList';
import TouristsSpots from '../components/TouristsSpots';
import TouristSpotDetails from '../components/TouristSpotDetails';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import UpdateTouristSpot from '../components/UpdateTouristSpot';
import Countries from '../components/Countries';
import SortByCountry from '../components/SortByCountry';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () =>
          fetch(
            'https://tourism-assignment-server-lilac.vercel.app/touristsSpots'
          ),
      },
      {
        path: '/allTouristsSpot',
        element: <AllTouristsSpot></AllTouristsSpot>,
        loader: () =>
          fetch(
            'https://tourism-assignment-server-lilac.vercel.app/touristsSpots'
          ),
      },
      {
        path: '/addTouristsSpot',
        element: (
          <PrivateRoute>
            <AddTouristsSpot></AddTouristsSpot>
          </PrivateRoute>
        ),
      },
      {
        path: '/myList',
        element: (
          <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        ),
      },
      {
        path: '/singIn',
        element: <SignIn></SignIn>,
      },
      {
        path: '/singUp',
        element: <SignUp></SignUp>,
      },
      {
        path: '/touristsSpots',
        element: <TouristsSpots></TouristsSpots>,
        loader: () =>
          fetch(
            'https://tourism-assignment-server-lilac.vercel.app/touristsSpots'
          ),
      },
      {
        path: '/touristSpotCards/:id',
        element: <TouristSpotDetails></TouristSpotDetails>,
        loader: ({ params }) =>
          fetch(
            `https://tourism-assignment-server-lilac.vercel.app/touristsSpots/${params.id}`
          ),
      },
      {
        path: '/updateTouristSpot/:id',
        element: <UpdateTouristSpot></UpdateTouristSpot>,
        // loader: ({ params }) =>
        //   fetch(`https://tourism-assignment-server-lilac.vercel.app/updateTouristSpot/${params.id}`),
      },
      // {
      //   path: '/countries',
      //   element: <Countries></Countries>,
      //   loader: () => fetch('https://tourism-assignment-server-lilac.vercel.app/countries'),
      // },
      {
        path: '/sortByCountry/:country_name',
        element: <SortByCountry></SortByCountry>,
        loader: ({ params }) =>
          fetch(
            `https://tourism-assignment-server-lilac.vercel.app/sortByCountry/${params.country_name}`
          ),
      },
    ],
  },
]);
