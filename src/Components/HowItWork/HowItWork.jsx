import React from "react";
import { Link } from "react-router";

const HowItWork = () => {
  return (
    <div className="py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <div className="flex items-center justify-center gap-4">
          <img
            src="https://script.viserlab.com/agrivest/assets/images/logo_icon/favicon.png"
            alt=""
          />{" "}
          <h2 className="headingFont text-5xl font-bold">How it Works</h2>
          <img
            src="https://script.viserlab.com/agrivest/assets/images/logo_icon/favicon.png"
            alt=""
          />{" "}
        </div>
        <p className="text-gray-500">
          Follow these simple steps to get started with your journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
        <Link to="/signIn" className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/online-registration-illustration-svg-download-png-6381808.png"
            alt="Create account"
            className="w-48 mb-6 transition-transform duration-300 hover:scale-105"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2 headingFont">
            Create Your Account
          </h3>
          <p className="text-gray-500">
            Sign up easily using your email and start exploring our features.
          </p>

          <div className="absolute -top-7 left-1/2 transform -translate-x-1/2  rounded-full bg-green-400 shadow-lg">
            <h4 className="text-white font-bold px-6 py-4 text-2xl">1</h4>
          </div>
        </Link>

        <Link to="/addCrop" className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/post-content-planning-illustration-svg-download-png-8491110.png"
            alt="Add items"
            className="w-48 mb-6 transition-transform duration-300 hover:scale-105"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2 headingFont">
            Add Your Crops
          </h3>
          <p className="text-gray-500">
            Post what you are growing or selling with complete details.
          </p>
          <div className="absolute -top-7 left-1/2 transform -translate-x-1/2  rounded-full bg-green-400 shadow-lg">
            <h4 className="text-white font-bold px-6 py-4 text-2xl">2</h4>
          </div>
        </Link>
 
        <Link to="/myPost" className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Collaboration_logo_V2.svg/607px-Collaboration_logo_V2.svg.png"
            alt="Connect"
            className="w-48 mb-6 transition-transform duration-300 hover:scale-105"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2 headingFont">
            Connect & Collaborate
          </h3>
          <p className="text-gray-500">
            Engage with other users and collaborate directly on your interests.
          </p>

          <div className="absolute -top-7 left-1/2 transform -translate-x-1/2  rounded-full bg-green-400 shadow-lg">
            <h4 className="text-white font-bold px-6 py-4 text-2xl">3</h4>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HowItWork;
