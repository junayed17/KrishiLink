import React, { useEffect, useState } from "react";
import Crop from "../Crops/Crop";
import Loader from "../Loader/Loader";

const AllCrops = () => {


const [allPost,setAllPost]=useState([])


useEffect(()=>{
fetch("http://localhost:3000/allPosts")
  .then((res) => res.json())
  .then((result) => setAllPost(result));
},[])




if (allPost.length===0) {
  return <Loader/>
}



  return (
    <section className="max-w-[1440px] mx-auto px-4">
      <div className="flex items-center justify-center gap-4 pt-20 pb-10">
        <img
          src="https://script.viserlab.com/agrivest/assets/images/logo_icon/favicon.png"
          alt=""
        />{" "}
        <h2 className="headingFont text-5xl font-bold ">All Post</h2>
        <img
          src="https://script.viserlab.com/agrivest/assets/images/logo_icon/favicon.png"
          alt=""
        />{" "}
      </div>

      <div>
        <div class="flex items-center justify-center py-5">
          <div class="rounded-lg">
            <div class="flex">
              <div class="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  class="pointer-events-none absolute w-5 fill-gray-500 transition"
                >
                  <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                </svg>
              </div>
              <input
                type="text"
                class="w-full max-w-[160px] bg-white pl-2 text-base font-semibold outline-0"
                placeholder="Search App..."
                id=""
              />
              <input
                type="button"
                value="Search"
                class="bg-green-400 p-2 rounded-tr-lg rounded-br-lg text-black font-semibold hover:bg-green-500 transition-colors"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {allPost.map((post) => (
          <Crop post={post} />
        ))}
      </div>
    </section>
  );
};

export default AllCrops;
