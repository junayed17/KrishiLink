import React, { useEffect, useState } from "react";
import Crop from "../Crops/Crop";
import Loader from "../Loader/Loader";
import "./allCrops.css"
import PostNotFound from "../error/PostNotFound";

const AllCrops = () => {


const [allPost,setAllPost]=useState(null)


useEffect(()=>{
fetch("http://localhost:3000/allPosts")
  .then((res) => res.json())
  .then((result) => setAllPost(result));
},[])
const [displayData,setDisplayData]=useState(allPost)








useEffect(() => {
  setDisplayData(allPost);
}, [allPost]);



if (!displayData) {
  return <Loader />;
}




function handleSearch(e) {
  const searchPost = e.target.value.trim().toLowerCase();

  const filteredPost = allPost.filter((post) =>{

    
   return post.name.toLowerCase().includes(searchPost)}
  );

  
  setDisplayData(filteredPost);


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
          <form class="form">
            <button>
              <svg
                width="17"
                height="16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-labelledby="search"
              >
                <path
                  d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                  stroke="currentColor"
                  stroke-width="1.333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <input
              class="input"
              placeholder="Type your text"
              required=""
              type="text"
              onChange={handleSearch}
            />

            <button class="reset" type="reset">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>

      {displayData.length ? (
        <div className="grid items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayData.map((post) => (
            <Crop key={post._id} post={post} />
          ))}
        </div>
      ) : (
        <PostNotFound />
      )}
    </section>
  );
};

export default AllCrops;
