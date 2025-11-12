import React, { use, useEffect } from "react";
import { AuthContext } from "./ContextProvider";
import Loader from "../Components/Loader/Loader";
import { Navigate, useLocation } from "react-router";

const PrivateRouter = ({ children }) => {
  const { user, setDesiredLocation, desiredLocation, Loading } =
    use(AuthContext);



  const {pathname }=useLocation()

  
  useEffect(() => {
    setDesiredLocation(pathname);
  }, [pathname]);

  if (!user && Loading) {
    return <Loader />;
  }



  if (!user) {
    return <Navigate to="/signIn" state={pathname} />;
  }
  return <div>{children}</div>;
};

export default PrivateRouter;
