import React from 'react';
import { FaBangladeshiTakaSign, FaLocationDot, FaStar } from 'react-icons/fa6';
import { LuArrowRight, LuLock } from "react-icons/lu"; 
import { Link } from 'react-router';

const Crop = ({ post }) => {
  // Check if stock is available
const totalRequested = post?.interests
  ? post.interests.reduce((sum, item) => sum + Number(item.quantity || 0), 0)
  : 0;

  console.log(totalRequested,Number(post.quantity));
  

  const isOutOfStock = totalRequested >= Number(post.quantity);

  
  return (
    <div
      className={`group h-full flex flex-col bg-white text-black dark:bg-zinc-900 dark:text-white border border-gray-200 dark:border-zinc-800 rounded-2xl shadow-sm transition-all duration-300 overflow-hidden font-[Poppins] 
      ${isOutOfStock ? "opacity-60 grayscale-[0.5]" : "hover:shadow-xl"}`}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden shrink-0">
        <img
          src={post.image}
          alt={post.name}
          className={`h-[220px] w-full object-cover transform duration-500 ${
            !isOutOfStock && "group-hover:scale-110"
          }`}
        />

        {/* Out of Stock Overlay */}
        {isOutOfStock && (
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] flex items-center justify-center">
            <span className="bg-red-600 text-white font-bold px-4 py-2 rounded-lg uppercase tracking-tighter text-sm shadow-2xl border border-red-400">
              Out of Stock
            </span>
          </div>
        )}

        {/* Category Badge (Only show if in stock or keep it subtle) */}
        {!isOutOfStock && (
          <div className="absolute top-3 left-3 bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded-lg uppercase tracking-wider">
            {post.type}
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-grow">
        {/* Title & Rating */}
        <div className="mb-3">
          <div className="flex justify-between items-start gap-2">
            <h2
              className={`text-lg font-bold tracking-tight line-clamp-1 transition-colors ${
                !isOutOfStock && "group-hover:text-green-600"
              }`}
            >
              {post.name}
            </h2>
            <div className="flex items-center gap-1 text-amber-500 text-xs mt-1 shrink-0">
              <FaStar /> <span className="text-gray-400 font-medium">4.5</span>
            </div>
          </div>
          <p className="flex items-center gap-1 text-gray-400 text-xs mt-1 italic">
            <FaLocationDot className="text-green-600/70" /> {post.location}
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-2 flex-grow">
          {post.description?.split(" ").slice(0, 10).join(" ")}
          {post.description?.split(" ").length > 10? "..." : ""}
        </p>

        {/* Price Grid */}
        <div className="grid grid-cols-2 gap-0 border-y border-gray-100 dark:border-zinc-800 py-3 mb-5">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">
              Price
            </span>
            <div
              className={`flex items-center font-black text-lg ${
                isOutOfStock ? "text-gray-500" : "text-green-600"
              }`}
            >
              {post.pricePerUnit}{" "}
              <FaBangladeshiTakaSign className="text-xs ml-0.5" />
              <span className="text-gray-400 font-normal text-xs ml-1">
                /{post.unit}
              </span>
            </div>
          </div>
          <div className="flex flex-col border-l pl-4 border-gray-100 dark:border-zinc-800 text-right">
            <span className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">
              Stock
            </span>
            <div
              className={`font-bold ${
                isOutOfStock
                  ? "text-red-500"
                  : "text-gray-700 dark:text-gray-200"
              }`}
            >
              {isOutOfStock ? "Sold Out" : `${post.quantity} ${post.unit}`}
            </div>
          </div>
        </div>

        {/* Action Button */}
        {isOutOfStock ? (
          <button
            disabled
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gray-200 dark:bg-zinc-800 text-gray-500 font-bold cursor-not-allowed border border-dashed border-gray-400"
          >
            <LuLock size={16} /> Unavailable
          </button>
        ) : (
          <Link
            to={`/crop/cropDetails/${post._id}`}
            className="group/btn flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-black font-bold hover:bg-green-600 dark:hover:bg-green-500 hover:text-white transition-all duration-300"
          >
            View Details
            <LuArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Crop;