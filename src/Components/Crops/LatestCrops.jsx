import React, { use, useEffect, useState } from "react";
import Crop from "./Crop";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../../Provider/ContextProvider";
import Loader from "../Loader/Loader";

const LatestCrops = () => {
  const [latestCrop, setLatestCrop] = useState(null);

  useEffect(() => {
    fetch(`https://krishilink-two.vercel.app/latestPosts`)
      .then((res) => res.json())
      .then((result) => setLatestCrop(result))
      .catch((err) => console.log(err));
  }, []);

  console.log(latestCrop);

  if (!latestCrop) {
    return <Loader />;
  }

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {latestCrop.map((post) => (
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
