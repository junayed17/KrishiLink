import React, { useState } from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
  FaThinkPeaks,
  FaCheck,
  FaCross,
  FaTimes,
} from "react-icons/fa";
import SingleInterest from "./SingleInterest";



const AllInterests = ({ postDetails }) => {
  // const [interests, setInterests] = useState(initialInterests);

  console.log(postDetails.interests);




  const getStatusClass = (status) => {
    switch (status) {
      case "Accepted":
        return "bg-green-100 text-green-700 border-green-400";
      case "Rejected":
        return "bg-red-100 text-red-700 border-red-400";
      case "Pending":
      default:
        return "bg-yellow-100 text-yellow-700 border-yellow-400";
    }
  };

  return (
    <section className="max-w-[1440px] mx-auto px-4 py-10">
      <div>
        <h3 className="text-3xl font-extrabold text-center text-gray-900 mb-6 text-green-700">
          All Interest of this Crop
        </h3>
        <div className="bg-white p-6 rounded-xl shadow-lg overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-green-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Buyer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Requested Quantity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  buyer Message
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {postDetails.interests.length > 0 ? (
                postDetails.interests.map((item) => (
                  <SingleInterest item={item} postId={postDetails._id}/>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="px-6 py-4 text-center text-gray-500"
                  >
                    No buyer interest requests found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AllInterests;
