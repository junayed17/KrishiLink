import React, { use } from 'react';
import { AuthContext } from './ContextProvider';
import Loader from '../Components/Loader/Loader';

const PrivateRouter = ({children}) => {
  const {user}=use(AuthContext)
  if (!user) {
    return <Loader/>
  }
  return (
    <div>
      {
        children
      }
    </div>
  );
};

export default PrivateRouter;