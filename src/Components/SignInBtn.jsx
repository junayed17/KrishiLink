import React from 'react';
import { Link } from 'react-router';

const SignInBtn = () => {
  return (
    <Link
      to="/signIn"
      className="headingFont px-4 py-2 rounded-xl bg-green-500 hover:bg-green-600 hover:text-white font-bold transition-all"
    >
      SignIn
    </Link>
  );
};

export default SignInBtn;