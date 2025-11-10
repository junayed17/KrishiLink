import React from "react";
import Crop from "./Crop";

let posts = [1, 2, 3, 4, 5, 6];
const LatestCrops = () => {
  return (
    <div className="pt-20 ">
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
      <div className="grid grid-cols-3 gap-8 items-center justify-between">
        {posts.map((post) => (
          <Crop post={post} />
        ))}
      </div>
    </div>
  );
};

export default LatestCrops;
