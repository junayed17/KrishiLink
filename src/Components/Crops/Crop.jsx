import React from 'react';
import { FaDollarSign, FaStar } from 'react-icons/fa';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';
import { Link } from 'react-router';

const Crop = ({ post }) => {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white border border-gray-300 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-[1px_1px_10px_#b2bec3] hover:scale-[1.03] duration-300 overflow-hidden font-[Poppins]">
      <img
        src={post.image}
        alt=""
        className="rounded-2xl  transform hover:scale-[1.05] duration-300 h-[300px] w-full object-cover"
      />

      <div className="p-4">
        <h2 className="text-2xl font-bold design-font tracking-wide text-center mb-2">
          {post.name}
        </h2>

        <div className="flex items-center justify-between text-sm mb-4">
          <p className="opacity-80 text-[18px] flex items-center font-bold ">
            Type:{post.type}
          </p>
          <p className="flex items-center opacity-80 font-bold text-[18px] ">
            Price:{post.pricePerUnit} <FaBangladeshiTakaSign />/{post.unit}
          </p>
        </div>

        <Link
          to={`/crop/cropDetails/${post._id}`}
          className="block text-center w-full py-2 mt-1 rounded-xl bg-black text-white dark:bg-white dark:text-black border border-transparent hover:bg-transparent hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white duration-300 font-semibold"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Crop;




    