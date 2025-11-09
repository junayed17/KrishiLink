import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../Pages/Home';
import SignIn from '../Components/SignIn/SignIn';
import HomeContent from '../Components/HomeContent/HomeContent';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {

        index:true,
        element:<HomeContent/>
      },
      {
        path: "/signIn",
        element:<SignIn/>
      },
    ],
  },
]);


export default router;