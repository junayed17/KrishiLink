import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/ContextProvider";

const Navber = () => {
  const { user, handleSignOut } = use(AuthContext);

  function signOut() {
    handleSignOut()
      .then(() => {
        alert("sucessfully logOut");
      })
      .catch((err) => alert(err));
  }

  let links = (
    <>
      <NavLink
        className="px-5 py-3  rounded-[10px] hover:bg-green-500 mx-4 transition-all duration-500 hover:text-white text-[16px] font-bold"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="px-5 py-3  rounded-[10px] hover:bg-green-500 mx-4 transition-all duration-500 hover:text-white text-[16px] font-bold"
        to="/AllCrops"
      >
        All crops
      </NavLink>

      {user && (
        <>
          <NavLink
            className="px-5 py-3  rounded-[10px] hover:bg-green-500 mx-4 transition-all duration-500 hover:text-white text-[16px] font-bold"
            to="/myProfile"
          >
            Profile
          </NavLink>
          <NavLink
            className="px-5 py-3  rounded-[10px] hover:bg-green-500 mx-4 transition-all duration-500 hover:text-white text-[16px] font-bold"
            to="/addCrop"
          >
            Add crops
          </NavLink>
          <NavLink
            className="px-5 py-3  rounded-[10px] hover:bg-green-500 mx-4 transition-all duration-500 hover:text-white text-[16px] font-bold"
            to="myPost"
          >
            My posts
          </NavLink>
          <NavLink
            className="px-5 py-3  rounded-[10px] hover:bg-green-500 mx-4 transition-all duration-500 hover:text-white text-[16px] font-bold"
            to="/MyInterests"
          >
            My interests
          </NavLink>
        </>
      )}
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
          {user ? (
            <div className="flex items-center justify-center gap-3">
              <img
                src={user.photoURL}
                alt=""
                className="h-10 w-10 rounded-full border-green-300"
                title={user.displayName}
              />
              <button
                onClick={signOut}
                className="text-[20px] font-medium px-3 py-2 hover:bg-green-500 rounded-2xl duration-300 bg-green-400  hover:scale-[1.3] text-center inline-flex items-center justify-center"
              >
                LogOut
              </button>
            </div>
          ) : (
            <Link
              to="/signIn"
              className="text-[20px] font-medium px-3 py-2 hover:bg-green-500 rounded-2xl duration-300 bg-green-400  hover:scale-[1.3] text-center inline-flex items-center justify-center"
            >
              SignIn
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
