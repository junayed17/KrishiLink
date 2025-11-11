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
        element: (
          <PrivateRouter>
            <HomeContent />
          </PrivateRouter>
        ),
      },
      {
        path: "/crop/cropDetails",
        element: <CropDetails />,
      },
      {
        path: "/AllCrops",
        element: <AllCrops />,
      },
      {
        path: "/myProfile",
        element: <Profile />,
      },
      {
        path: "/addCrop",
        element: <AddCrop />,
      },
      {
        path: "/myPost",
        element: <MyPost />,
      },
      {
        path: "/MyInterests",
        element: <MyInterests />,
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
