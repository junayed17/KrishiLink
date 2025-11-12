import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import SignIn from "../Components/SignIn/SignIn";
import HomeContent from "../Components/HomeContent/HomeContent";
import CropDetails from "../Components/CropsDetails/CropDetails";
import AllCrops from "../Components/AllCrops/AllCrops";
import Profile from "../Components/Profile/Profile";
import SignUp from "../Components/SignUp/SignUp";
import AddCrop from "../Components/AddCrops/AddCrop";
import MyCrops from "../Components/MyPosts/MyPost";
import MyPost from "../Components/MyPosts/MyPost";
import MyInterests from "../Components/My interest/MyInterest";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <HomeContent />,
      },
      {
        path: "/crop/cropDetails",
        element: (
          <PrivateRouter>
            <CropDetails />
          </PrivateRouter>
        ),
      },
      {
        path: "/AllCrops",
        element: <AllCrops />,
      },
      {
        path: "/myProfile",
        element: (
          <PrivateRouter>
            <Profile />
          </PrivateRouter>
        ),
      },
      {
        path: "/addCrop",
        element: (
          <PrivateRouter>
            <AddCrop />
          </PrivateRouter>
        ),
      },
      {
        path: "/myPost",
        element: (
          <PrivateRouter>
            <MyPost />
          </PrivateRouter>
        ),
      },
      {
        path: "/MyInterests",
        element: (
          <PrivateRouter>
            <MyInterests />
          </PrivateRouter>
        ),
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
