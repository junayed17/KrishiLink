import React, { useEffect, useState } from "react";
import Crop from "../Crops/Crop";
import Loader from "../Loader/Loader";
import "./allCrops.css";
import PostNotFound from "../error/PostNotFound";

const AllCrops = () => {
  const [allPost, setAllPost] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/allPosts")
      .then((res) => res.json())
      .then((result) => setAllPost(result));
  }, []);
  const [displayData, setDisplayData] = useState(allPost);

  useEffect(() => {
    setDisplayData(allPost);
  }, [allPost]);

  if (!displayData) {
    return <Loader />;
  }

  console.log(allPost);
  
  function handleSearch(e) {
    const searchPost = e.target.value.trim().toLowerCase();

    const filteredPost = allPost.filter((post) => {
      return post.name.toLowerCase().includes(searchPost);
    });

    setDisplayData(filteredPost);
  }

  return (
    <section className="max-w-[1440px] mx-auto mt-8">
      <title>KrisiLink | AllPosts</title>
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-3">
          <img
            src="https://script.viserlab.com/agrivest/assets/images/logo_icon/favicon.png"
            alt=""
            className="hidden sm:block sm:h-10"
          />
          <h2 className="headingFont text-3xl sm:text-5xl font-extrabold mb-1 tracking-tight">
            Fresh from the
            <span className="text-green-600  ml-2">Fields</span>
          </h2>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto text-[1rem] sm:text-lg">
          Empowering farmers with modern technology. Buy fresh, sell fast, and
          grow together.
        </p>
      </div>

      <div>
        <div class="flex items-center justify-center py-5">
          <form class="form">
            <button>
              <svg
                width="20"
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
              placeholder="Search for Rice, Wheat or Mango..."
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
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
