import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../Pages/Home';
import SignIn from '../Components/SignIn/SignIn';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/signIn",
        element:<SignIn/>
      },
    ],
  },
]);


export default router;