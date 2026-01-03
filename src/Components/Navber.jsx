import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/ContextProvider";
import "./navber.css";
import toast from "react-hot-toast";
import Logo from "./Logo";
import SignInBtn from "./SignInBtn";
import LogOutBtn from "./LogOutBtn";
import Headroom from "react-headroom";
import { LucideHome } from "lucide-react";
import { LuLeaf, LuZap } from "react-icons/lu";

const Navber = () => {
  const { user, handleSignOut } = use(AuthContext);
console.log(user);

  let links = (
    <>
      <NavLink
        className="px-3 py-1  rounded-[10px] hover:bg-green-500 transition-all duration-500 hover:text-white text-xl font-bold headingFont "
        to="/"
      >
        <LucideHome size={18} className="inline" /> Home
      </NavLink>
      <NavLink
        className="px-3 py-1  rounded-[10px] hover:bg-green-500 transition-all duration-500 hover:text-white text-xl font-bold headingFont"
        to="/AllCrops"
      >
        <LuLeaf size={18} className="inline" />
        All crops
      </NavLink>
      <NavLink
        className="px-3 py-1  rounded-[10px] hover:bg-green-500 transition-all duration-500 hover:text-white text-xl font-bold headingFont"
        to="/Features"
      >
        <LuZap size={18} className="inline" />
        Features
      </NavLink>
    </>
  );

  return (
    <Headroom
      // pinStart: koto pixel niche scroll korle kaj shuru korbe
      pinStart={10}
      // downTolerance: ektu niche scroll korlei jeno lukiye jay
      downTolerance={2}
      // upTolerance: ektu upore scroll korlei jeno chole ashe
      upTolerance={0}
      style={{
        transition: "all .3s ease-in-out",
        zIndex: 100,
      }}
    >
      <div
        className="sticky top-0 bg-white/70 backdrop-blur-md"
        style={{ boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}
      >
        <div className="navbar max-w-[1440px] mx-auto px-4">
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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow z-10"
              >
                {links}
              </ul>
            </div>
            <Logo />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 z-10 gap-1">{links}</ul>
          </div>
          <div className="navbar-end">
            {user ? <LogOutBtn /> : <SignInBtn />}
          </div>
        </div>
      </div>
    </Headroom>
  );
};

export default Navber;
