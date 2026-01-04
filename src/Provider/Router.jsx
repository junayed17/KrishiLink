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
import Error from "../Components/error/Error";
import MypostEdit from "../Components/MyPosts/MypostEdit";
import Features from "../Pages/features/Features";
import AllCropsDemoPagination from "../Components/AllCrops/AllCropsPagination";
import Overview from "../Components/overview/OverviewDashboard";

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
        path: "/crop/cropDetails/:id",
        element: <CropDetails />,
      },
      {
        path: "/AllCrops",
        element: <AllCrops />,
      },
      {
        path: "/Features",
        element: <Features />,
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
        path: "/post/edit/:id",
        element: (
          <PrivateRouter>
            {" "}
            <MypostEdit />
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
      {
        path: "/dashboard/overview",
        element:<Overview/>
      }

    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default router;
