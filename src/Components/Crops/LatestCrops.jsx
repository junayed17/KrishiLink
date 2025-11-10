import React from "react";
import Crop from "./Crop";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

let posts = [1, 2, 3, 4, 5, 6];
const LatestCrops = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center gap-4">
        <img
          src="https://script.viserlab.com/agrivest/assets/images/logo_icon/favicon.png"
          alt=""
        />{" "}
        <h2 className="headingFont text-5xl font-bold py-20">Latest Post</h2>
        <img
          src="https://script.viserlab.com/agrivest/assets/images/logo_icon/favicon.png"
          alt=""
        />{" "}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Crop post={post} />
        ))}
      </div>

      <div className="text-center  my-10">
        <Link
          to="/AllCrops"
          className="text-[20px] font-semibold px-3 py-2 hover:bg-green-500 rounded-2xl duration-300 bg-green-400  hover:scale-[1.3] text-center inline-flex items-center justify-center"
        >
          See All <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default LatestCrops;
