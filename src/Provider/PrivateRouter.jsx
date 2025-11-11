import React, { use } from "react";
import { AuthContext } from "./ContextProvider";
import Loader from "../Components/Loader/Loader";
import { Navigate, useLocation } from "react-router";

const PrivateRouter = ({ children }) => {
  const { user } = use(AuthContext);
  console.log(user);



  const desiredLocation=useLocation()
  console.log(desiredLocation);
  
  

  if (!user) {
    return <Navigate to="/signIn" state={desiredLocation} />;
  }
  return <div>{children}</div>;
};

export default PrivateRouter;
