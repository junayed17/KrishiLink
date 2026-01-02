import React from 'react';
import { Link } from 'react-router';

const SignInBtn = () => {
  return (
    <Link
      to="/signIn"
      className="text-[20px] font-medium px-3 py-2 hover:bg-green-500 rounded-2xl duration-300 bg-green-400  hover:scale-[1.3] text-center inline-flex items-center justify-center"
    >
      SignIn
    </Link>
  );
};

export default SignInBtn;