import React from 'react';
import { Link } from 'react-router';

const Error = () => {
  return (
    <div className="relative">
      <title>Error</title>
      <img
        src="https://i.ibb.co.com/wGVgm65/err.jpg"
        alt=""
        className="object-cover w-full h-screen"
      />
      <Link
        to="/"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 - text-[20px] font-bold px-3 py-2 hover:bg-green-500 rounded-2xl duration-300 bg-gray-700 hover:scale-[1.3] text-center inline-flex items-center justify-center text-white"
      >
        Go to home
      </Link>
    </div>
  );
};

export default Error;