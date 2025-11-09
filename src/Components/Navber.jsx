import React from "react";
import { Link, NavLink } from "react-router";

const Navber = () => {
  const links = (
    <>
      <NavLink className="hover:px-2.5 hover:py-5 hover:bg-[#009432] mx-4 transition-all duration-500 hover:text-white">
        Home
      </NavLink>
      <NavLink className="hover:px-2.5 hover:py-5 hover:bg-[#009432] mx-4 transition-all duration-500 hover:text-white">
        All crops
      </NavLink>
      <NavLink className="hover:px-2.5 hover:py-5 hover:bg-[#009432] mx-4 transition-all duration-500 hover:text-white">
        Profile
      </NavLink>
      <NavLink className="hover:px-2.5 hover:py-5 hover:bg-[#009432] mx-4 transition-all duration-500 hover:text-white">
        Add crops
      </NavLink>
      <NavLink className="hover:px-2.5 hover:py-5 hover:bg-[#009432] mx-4 transition-all duration-500 hover:text-white">
        My posts
      </NavLink>
      <NavLink className="hover:px-2.5 hover:py-5 hover:bg-[#009432] mx-4 transition-all duration-500 hover:text-white">
        My interests
      </NavLink>
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar max-w-[1440px] mx-auto p-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 font-bold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link className="flex items-center justify-center" to="/">
            <div className="w-10 h-10">
              <img
                src="https://i.ibb.co.com/9k3nCJ9Y/logo-removebg-preview.png"
                alt=""
              />
            </div>
            <div className="flex items-center text-3xl font-bold">
              <span className="text-[#009432]">Krishi</span>
              <span className="text-black">Link</span>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link
            to="/signIn"
            className="btn hover:bg-[#009432] rounded-2xl transition-all duration-500 hover:text-white"
          >
            SignIn
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navber;
