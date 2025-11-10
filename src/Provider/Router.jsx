import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../Pages/Home';
import SignIn from '../Components/SignIn/SignIn';
import HomeContent from '../Components/HomeContent/HomeContent';
import CropDetails from '../Components/CropsDetails/CropDetails';

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
        path:"/crop/cropDetails",
        element:<CropDetails/>
      },
      {
        path: "/signIn",
        element:<SignIn/>
      },
    ],
  },
]);


export default router;