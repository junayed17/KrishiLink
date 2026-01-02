import React from 'react';
import { Link } from 'react-router';

const Logo = () => {
  return (
    <Link className="flex items-center justify-center" to="/">
      <div className="w-10 h-10">
        <img
          src="https://i.ibb.co.com/9k3nCJ9Y/logo-removebg-preview.png"
          alt=""
        />
      </div>
      <div className="flex items-center text-3xl font-bold logoHidden headingFont">
        <span className="text-[#009432]">Krishi</span>
        <span className="text-black">Link</span>
      </div>
    </Link>
  );
};

export default Logo;