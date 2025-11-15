import React, { use, useState } from "react";
import { FaEye } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/ContextProvider";

const SignUp = () => {
  const {
    registerWithEmailPass,
    handleUpdateProfile,
    user,
    setUser,
    handleSignInWithGoogle,
    desiredlocation,
  } = use(AuthContext);

  const [error, setError] = useState("");
  const [passShow, setPassShow] = useState(false);
  const navigate=useNavigate()

  const upperCase = /.*[A-Z].*/;
  const lowercase = /.*[a-z].*/;
  const mustSixCharecter = /^.{6,}$/;

  function handleCorrectPass(e) {
    const pass = e.target.value;
    if (!upperCase.test(pass)) {
      setError("Password Must contain atleast one uppercase Latter");
      return;
    }
    if (!lowercase.test(pass)) {
      setError("Password Must contain atleast one lowercase Latter");
      return;
    }
    if (!mustSixCharecter.test(pass)) {
      setError("Password Must contain atleast 6 Charecter");
      return;
    }
    setError("");
  }

  function handleSignInGoogle() {
    handleSignInWithGoogle()
      .then((result) => {
        alert("sucessfully logged");
        desiredlocation ? navigate(desiredlocation) : navigate("/");
      })
      .catch((err) => {
        alert(err)
      });
  }

  function handleSignUp(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    const userData = {
      displayName: name,
      photoURL: photo,
    };

    registerWithEmailPass(email, password)
      .then((result) => {
        handleUpdateProfile(userData).then((result2) => {
          setUser(result.user);
          alert("Account created successfully!");
           {
            desiredlocation ? navigate(desiredlocation) : navigate("/");
           }
          
        });
      })
      .catch((err) => alert(err.message));
  }
 console.log(desiredlocation);
  return (
    <section className="px-4 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="py-10 w-full">
        {/* Sign Up Form Container */}
        <form
          className="flex flex-col gap-3 bg-white p-8 w-full max-w-lg mx-auto rounded-xl font-sans shadow-2xl"
          onSubmit={handleSignUp}
        >
          {/* Form Title */}
          <h3 className="text-3xl font-extrabold text-center text-gray-900 mb-6 text-green-700 headingFont">
            Create Your Account
          </h3>

          {/* --- Name Field --- */}
          <div className="flex-column flex flex-col">
            <label className="text-sm text-[#151717] font-semibold mb-1">
              Name
            </label>
          </div>
          <div className="inputForm border border-gray-200 rounded-lg h-[50px] flex items-center pl-3 transition-all duration-200 ease-in-out focus-within:border-[#07b553]">
            {/* User Icon SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0 text-gray-500"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <input
              placeholder="Enter your Name"
              className="input ml-2 rounded-lg border-none w-full h-full focus:outline-none placeholder-gray-400 text-sm"
              type="text"
              name="name"
            />
          </div>

          {/* --- Email Field --- */}
          <div className="flex-column flex flex-col mt-2">
            <label className="text-sm text-[#151717] font-semibold mb-1">
              Email
            </label>
          </div>
          <div className="inputForm border border-gray-200 rounded-lg h-[50px] flex items-center pl-3 transition-all duration-200 ease-in-out focus-within:border-[#07b553]">
            {/* Email Icon SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              viewBox="0 0 32 32"
              height="20"
              className="flex-shrink-0 text-gray-500"
            >
              <g data-name="Layer 3" id="Layer_3">
                <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
              </g>
            </svg>
            <input
              placeholder="Enter your Email"
              className="input ml-2 rounded-lg border-none w-full h-full focus:outline-none placeholder-gray-400 text-sm"
              type="email"
              name="email"
            />
          </div>

          {/* --- Profile URL Field --- */}
          <div className="flex-column flex flex-col mt-2">
            <label className="text-sm text-[#151717] font-semibold mb-1">
              Profile URL
            </label>
          </div>
          <div className="inputForm border border-gray-200 rounded-lg h-[50px] flex items-center pl-3 transition-all duration-200 ease-in-out focus-within:border-[#07b553]">
            {/* Link Icon SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0 text-gray-500"
            >
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
            <input
              placeholder="Enter your Profile URL"
              className="input ml-2 rounded-lg border-none w-full h-full focus:outline-none placeholder-gray-400 text-sm"
              type="text"
              name="photo"
            />
          </div>

          {/* --- Password Field --- */}
          <div className="flex-column flex flex-col mt-2">
            <label className="text-sm text-[#151717] font-semibold mb-1">
              Password
            </label>
          </div>
          <div className="inputForm border border-gray-200 rounded-lg h-[50px] flex items-center pl-3 transition-all duration-200 ease-in-out focus-within:border-[#07b553]">
            {/* Lock Icon SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              viewBox="-64 0 512 512"
              height="20"
              className="flex-shrink-0 text-gray-500"
            >
              <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
              <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
            </svg>

            <input
              onChange={handleCorrectPass}
              placeholder="Enter your Password"
              className="input ml-2 rounded-lg border-none w-full h-full focus:outline-none"
              name="password"
              type={passShow ? "text" : "password"}
            />
            <p
              className="text-2xl mr-2"
              onClick={() => {
                setPassShow(!passShow);
              }}
            >
              {!passShow ? <FaEye /> : <LuEyeClosed />}
            </p>
          </div>

          <p
            className={`mt-2 text-sm ${
              error ? "text-red-600" : "text-green-600"
            }`}
          >
            {error}
          </p>

          {/* --- Sign Up Button --- */}
          <button
            type="submit"
            className="button-submit mt-5 mb-2 bg-[#0cdc39] border-none text-white text-base font-medium rounded-lg h-[50px] w-full cursor-pointer hover:bg-[#0bb730] transition duration-150 shadow-md"
          >
            Sign Up
          </button>

          {/* --- Sign In Link --- */}
          <p className="p text-center text-black text-sm m-1">
            Already have an account?
            <Link
              to="/signIn"
              className="span text-sm ml-1 text-[#0cdc39] font-medium cursor-pointer hover:text-[#0bb730] underline"
            >
              Sign In
            </Link>
          </p>

          {/* --- Or With Separator --- */}
          <p className="p text-center text-black text-sm m-1 mt-3 relative after:absolute after:inset-x-0 after:h-px after:bg-gray-200 after:top-1/2 after:-translate-y-1/2">
            <span className="bg-white px-2 relative z-10">Or With</span>
          </p>

          {/* --- Social Buttons --- */}
          <div className="flex-row flex flex-row gap-2">
            <button
              className="btn google mt-2 w-full h-[50px] rounded-lg flex justify-center items-center font-medium gap-2 border border-gray-200 bg-white cursor-pointer transition duration-200 ease-in-out hover:border-[#09bb2f]"
              type="submit"
              onClick={handleSignInGoogle}
            >
              <svg
                xmlSpace="preserve"
                viewBox="0 0 512 512"
                y="0px"
                x="0px"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                width="20"
                version="1.1"
              >
                <path
                  d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
            c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
            C103.821,274.792,107.225,292.797,113.47,309.408z"
                  fill="#FBBB00"
                ></path>
                <path
                  d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
            c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
            c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"
                  fill="#518EF8"
                ></path>
                <path
                  d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
            c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
            c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"
                  fill="#28B446"
                ></path>
                <path
                  d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
            c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
            C318.115,0,375.068,22.126,419.404,58.936z"
                  fill="#F14336"
                ></path>
              </svg>
              Google
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
