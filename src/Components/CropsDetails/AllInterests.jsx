import React from "react";
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
    <section className="max-w-[1440px] mx-auto py-10 shadow-sm border border-green-100 rounded-xl">
      <div className="text-center">
        <h2 className="headingFont text-3xl sm:text-5xl font-extrabold mb-1 tracking-tight">
          All interest of
          <span className="text-green-600 ml-2">this Post</span>
        </h2>
        <div className="bg-white p-6 rounded-xl overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-green-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider headingFont">
                  Buyer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider headingFont">
                  Requested Quantity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider headingFont">
                  buyer Message
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider headingFont">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider text-center headingFont">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {postDetails.interests.length > 0 ? (
                postDetails.interests.map((item) => (
                  <SingleInterest item={item} postId={postDetails._id} />
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
