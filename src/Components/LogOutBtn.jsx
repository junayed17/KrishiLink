import React, { use } from "react";
import { AuthContext } from "../Provider/ContextProvider";
import toast from "react-hot-toast";
import { NavLink } from "react-router";
import { User, PlusCircle, LayoutGrid, Heart, LogOut } from "lucide-react"; // Icons add korlam

const LogOutBtn = () => {
  const { user, handleSignOut } = use(AuthContext);

  const signOut = () => {
    handleSignOut()
      .then(() => toast.success("Successfully logged out"))
      .catch(() => toast.error("Logout failed. Try again."));
  };

  const closeDropdown = () => document.activeElement.blur();

  return (
    <div className="dropdown dropdown-bottom dropdown-end group">
      {/* Trigger Button */}
      <div
        tabIndex={0}
        role="button"
        className="flex items-center gap-3 p-1 rounded-full hover:bg-gray-100 transition-all duration-300"
      >
        <div className="text-end hidden sm:block">
          <h4 className="headingFont text-sm font-bold text-gray-800 leading-none mb-1">
            {user?.displayName?.split(" ")[0] || "User"}
          </h4>
          <p className="text-[10px] text-green-600 font-bold uppercase tracking-tighter">
            Farmer Account
          </p>
        </div>
        <img
          src={user?.photoURL}
          alt="profile"
          className="h-10 w-10 rounded-full border-2 border-green-500 p-[2px] object-cover"
        />
      </div>

      {/* Dropdown Menu */}
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-xl z-[50] w-56 mt-3 p-2 shadow-2xl border border-gray-100"
      >
        <li className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
          Manage
        </li>

        <li>
          <NavLink
            onClick={closeDropdown}
            to="/myProfile"
            className="
            headingFont
            flex items-center gap-3 py-3 rounded-lg hover:bg-green-500 hover:text-white font-semibold transition-all"
          >
            <User size={18} /> Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={closeDropdown}
            to="/addCrop"
            className="
            headingFont flex items-center gap-3 py-3 rounded-lg hover:bg-green-500 hover:text-white font-semibold transition-all"
          >
            <PlusCircle size={18} /> Add crops
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={closeDropdown}
            to="/myPost"
            className="
            headingFont
            flex items-center gap-3 py-3 rounded-lg hover:bg-green-500 hover:text-white font-semibold transition-all"
          >
            <LayoutGrid size={18} /> My posts
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={closeDropdown}
            to="/MyInterests"
            className="
            headingFont
            flex items-center gap-3 py-3 rounded-lg hover:bg-green-500 hover:text-white font-semibold transition-all"
          >
            <Heart size={18} /> My interests
          </NavLink>
        </li>

        <div className="divider my-1"></div>

        <li>
          <button
            onClick={() => {
              signOut();
              closeDropdown();
            }}
            className="headingFont flex items-center gap-3 py-3 rounded-lg text-red-500 hover:bg-red-50 font-bold transition-all"
          >
            <LogOut size={18} /> Log Out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default LogOutBtn;
