import React, { useEffect, useState } from "react";
import Crop from "../Crops/Crop";
import Loader from "../Loader/Loader";
import "./allCrops.css";
import PostNotFound from "../error/PostNotFound";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";

const AllCrops = () => {
  const [allPost, setAllPost] = useState(null);
  const [activeTab, setActiveTab] = useState("");
  const [order, setOrder] = useState("");
  const [totalData, setTotalData] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    const fetchInitialData = async () => {
      const res = await fetch("http://localhost:3000/allPosts");
      const data = await res.json();
      setTotalData(data.length);
    };
    fetchInitialData();
  }, []);

  useEffect(() => {
    fetch(
      `http://localhost:3000/allPosts?sort=${order}&&limit=${8}&&catagory=${activeTab}&&pageIndex=${pageIndex}`
    )
      .then((res) => res.json())
      .then((result) => setAllPost(result));
  }, [activeTab, order, pageIndex]);
  const [displayData, setDisplayData] = useState(allPost);

  useEffect(() => {
    setDisplayData(allPost);
  }, [allPost]);




console.log(pageIndex);



  const closeDropdown = () => document.activeElement.blur();
  if (!displayData) {
    return <Loader />;
  }

  const categories = ["", "Fruit", "Vegetable"];

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

      {/* Search, Tabs, ebong Sort - eita ekta flex container-e thakbe */}

      {/* Search, Category Tabs, ebong Sort - Responsive Container */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-10 bg-white  rounded-2xl border border-green-100 shadow-sm p-4">
        {/* 1. Category Tabs (Left side on Desktop) */}
        <div className="w-full lg:w-auto overflow-x-auto">
          <div className="tabs tabs-boxed bg-green-50/50 p-1 flex justify-center sm:justify-start gap-1 min-w-max">
            {categories.map((cata, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveTab(cata);
                }}
                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${
                  activeTab === cata || (index === 0 && activeTab === "")
                    ? "bg-green-600 text-white shadow-lg shadow-green-200"
                    : "text-green-800 hover:bg-green-100"
                }`}
              >
                {index === 0 ? "All Fields" : cata}
              </button>
            ))}
          </div>
        </div>

        {/* 2. Search & Sort Group (Right side on Desktop) */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
          {/* Search Input */}
          <div className="relative w-full sm:w-72 group">
            <input
              type="text"
              onChange={handleSearch}
              placeholder="Search for crops..."
              className="w-full pl-10 pr-4 py-2.5 border-2 border-green-100 rounded-2xl outline-none focus:border-green-500 transition-all text-sm bg-gray-50/50"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Sort Select Tag */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <select
              className="select select-bordered border-2 border-green-100 focus:outline-none focus:border-green-500 rounded-2xl bg-white text-gray-700 font-bold h-11 w-full sm:w-48 shadow-sm transition-all"
              onChange={(e) => {
                setOrder(e.target.value);
              }}
            >
              <option value="">Sort by Price</option>
              <option value={-1}>High to Low</option>
              <option value={1}>Low to High</option>
            </select>
          </div>
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

      <div className="flex justify-center mt-12 mb-10">
        <ReactPaginate
          pageCount={Math.ceil(totalData / 8)} // Tomar logic onujayi
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          previousLabel="< prev"
          nextLabel="next >"
          breakLabel="..."
          onPageChange={(data) => {
            const selectedPageIndex = data.selected;
            setPageIndex(selectedPageIndex);
            window.scrollTo({ top: 0, behavior: "smooth" }); // Click korle page-er upore jabe
          }}
          // --- STYLING (Pura Button Clickable korar jonno) ---

          containerClassName="flex items-center gap-2 list-none select-none" // Main container
          // Numbers (1, 2, 3...)
          pageClassName="" // Eita khali thakbe
          pageLinkClassName="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 border-2 border-green-100 rounded-2xl bg-white text-gray-700 font-bold hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-300 cursor-pointer"
          // Active Page
          activeLinkClassName="!bg-green-600 !text-white !border-green-600 shadow-lg shadow-green-200"
          // Previous Button
          previousClassName=""
          previousLinkClassName="flex items-center justify-center px-4 h-10 sm:h-12 border-2 border-green-100 rounded-2xl bg-white text-green-700 font-bold hover:bg-green-500 hover:text-white hover:border-green-500 transition-all mr-2 cursor-pointer"
          // Next Button
          nextClassName=""
          nextLinkClassName="flex items-center justify-center px-4 h-10 sm:h-12 border-2 border-green-100 rounded-2xl bg-white text-green-700 font-bold hover:bg-green-500 hover:text-white hover:border-green-500 transition-all ml-2 cursor-pointer"
          // Dots (...)
          breakClassName=""
          breakLinkClassName="flex items-center justify-center w-10 h-10 text-green-600 font-bold"
          // Disabled State
          disabledLinkClassName="opacity-30 cursor-not-allowed pointer-events-none"
        />
      </div>
    </section>
  );
};

export default AllCrops;
