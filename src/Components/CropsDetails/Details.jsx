import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaTag,
  FaRulerCombined,
  FaUser,
  FaEnvelope,
  FaFeatherAlt,
} from "react-icons/fa";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const cropData = {
  name: "Tomato",
  type: "Vegetable",
  pricePerUnit: 55,
  quantity: 400,
  description:
    "Fresh organic tomatoes, field-ripened, excellent for salads and cooking. Harvested last week.",
  location: "Bogura",
  image:
    "https://cdn.britannica.com/16/187216-050-CB57A09B/tomatoes-tomato-plant-Fruit-vegetable.jpg",
  owner: {
    ownerEmail: "owner@gmail.com",
    ownerName: "Mr Owner",
  },
};

const Details = () => {


  const {
    name,
    type,
    pricePerUnit,
    quantity,
    description,
    location,
    image,
    owner,
  } = cropData;

  return (
    <div className="p-4 sm:p-8 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden border border-green-200">
        <div className="relative">
          <img className="w-full h-80 object-cover" src={image} alt={name} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex items-end">
            <h1 className="text-4xl font-extrabold text-white leading-tight">
              {name} Listing
              <span className="block text-lg font-medium text-green-300 mt-1">
                ({type})
              </span>
            </h1>
          </div>
        </div>

        <div className="p-6 md:p-8 space-y-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center border-b pb-6 border-gray-100">
            <div className="bg-green-50 p-4 rounded-lg shadow-sm">
              <p className="text-3xl font-bold text-green-700 flex items-center justify-center">
                <FaBangladeshiTakaSign/>{pricePerUnit}
              </p>
              <p className="text-sm text-gray-600 mt-1">Price per Kg</p>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg shadow-sm">
              <p className="text-3xl font-bold text-yellow-700">
                {quantity} Kg
              </p>
              <p className="text-sm text-gray-600 mt-1">Available Stock</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg shadow-sm col-span-2 text-3xl ">
              <FaMapMarkerAlt className="inline mr-2 text-blue-600" />
              <p className="text-3xl font-bold text-blue-800 inline">
                {location}
              </p>
              <p className="text-sm text-gray-600 mt-1">Farming Location</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaFeatherAlt className="mr-3 text-green-600" /> Description
            </h2>
            <p className="text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-lg border border-gray-200">
              {description}
            </p>
          </div>

          <div className="pt-4 border-t border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              <FaUser className="inline mr-2 text-green-600" /> Seller
              Information
            </h2>
            <div className="space-y-3 p-4 border rounded-lg bg-green-50">
              <p className="flex items-center text-gray-700">
                <FaUser className="mr-3 text-lg text-green-700" />
                <span className="font-semibold">{owner.ownerName}</span> (Owner)
              </p>
              <p className="flex items-center text-gray-700">
                <FaEnvelope className="mr-3 text-lg text-green-700" />
                <a
                  href={`mailto:${owner.ownerEmail}`}
                  className="text-blue-600 hover:underline"
                >
                  {owner.ownerEmail}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
