import React, { use, useState } from "react";
import { FaEye } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/ContextProvider";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const Navigate = useNavigate();

  const { handleSignInWithEmailPass, handleSignInWithGoogle, setLoading } =
    use(AuthContext);
  const [passShow, setPassShow] = useState(false);

  const { state } = useLocation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  




  function handleSignIn(userData) {
    const email =userData.email.trim();
    const password = userData.password.trim();    
    handleSignInWithEmailPass(email, password)
      .then((result) => {
        toast.success("sucessfully logged");
        setLoading(false);
        state ? Navigate(state) : Navigate("/");
      })
      .catch((err1) => {
        toast.error(err1.code);
      });
  }

  function handleSignInGoogle() {
    handleSignInWithGoogle()
      .then((result) => {
        toast.success("sucessfully logged");
        setLoading(false);
        state ? Navigate(state) : Navigate("/");
      })
      .catch((err) => {
        toast.error("try again");
      });
  }


  return (
    <section className="px-4 ">
      <title>KrisiLink | SignIn</title>
      <div className="py-10">
        <form
          class="flex flex-col gap-2 bg-white p-7 w-full max-w-lg mx-auto rounded-xl font-sans border border-green-100 shadow-sm"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <h3 className="text-3xl font-extrabold text-center text-gray-900 mb-6 text-green-700 headingFont">
            SignIn Your Account
          </h3>
          <div class="flex-column flex flex-col">
            <label class="text-[#151717] font-semibold headingFont">
              Email
            </label>
          </div>
          <div class="inputForm border border-gray-200 rounded-lg h-[50px] flex items-center pl-3 transition-all duration-200 ease-in-out focus-within:border-[#07b553]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              viewBox="0 0 32 32"
              height="20"
              class="flex-shrink-0 text-gray-500"
            >
              <g data-name="Layer 3" id="Layer_3">
                <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
              </g>
            </svg>
            <input
              placeholder="Enter your Email"
              class="input ml-2 rounded-lg border-none w-full h-full focus:outline-none"
              type="text"
              name="email"
              {...register("email", { required: "This field is required" })}
            />
          </div>
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}

          <div class="flex-column flex flex-col mt-2">
            <label class="text-[#151717] font-semibold headingFont">
              Password
            </label>
          </div>
          <div class="inputForm border border-gray-200 rounded-lg h-[50px] flex items-center pl-3 transition-all duration-200 ease-in-out focus-within:border-[#06ae4f]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              viewBox="-64 0 512 512"
              height="20"
              class="flex-shrink-0 text-gray-500"
            >
              <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
              <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
            </svg>
            <input
              placeholder="Enter your Password"
              class="input ml-2 rounded-lg border-none w-full h-full focus:outline-none"
              name="password"
              type={passShow ? "text" : "password"}
              {...register("password", { required: "This field is required" })}
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
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}

          <div class="flex-row flex flex-row items-center justify-between mt-1">
            <span class="span text-sm ml-1 text-[#0fe047] font-medium cursor-pointer hover:text-blue-700">
              Forgot password?
            </span>
          </div>

          <button class="headingFont px-4 py-4 mt-6 rounded-xl bg-green-500 hover:bg-green-600 hover:text-white font-bold transition-all text-xl">
            Sign In
          </button>

          <p class=" text-black text-sm m-1">
            Don't have an account?
            <Link
              to="/signUp"
              class="span text-sm ml-1 text-[#0cdc39] font-medium cursor-pointer hover:text-[#0cdc39]"
            >
              Sign Up
            </Link>
          </p>

          <p class="p text-center text-black text-sm m-1 relative after:absolute after:inset-x-0 after:h-px after:bg-gray-200 after:top-1/2 after:-translate-y-1/2">
            <span class="bg-white px-2 relative z-10">Or With</span>
          </p>

          <div class="flex-row flex flex-row gap-2">
            <button
              class="btn google mt-2 w-full h-[50px] rounded-lg flex justify-center items-center font-medium gap-2 border border-gray-200 bg-white cursor-pointer transition duration-200 ease-in-out hover:border-[#09bb2f] headingFont text-xl font-bold"
              onClick={handleSignInGoogle}
              type="button"
            >
              <svg
                xml:space="preserve"
                viewBox="0 0 512 512"
                y="0px"
                x="0px"
                xmlns:xlink="http://www.w3.org/1999/xlink"
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

export default SignIn;
