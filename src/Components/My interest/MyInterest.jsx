import React, { useState } from "react";
import { FaCheckCircle, FaTimesCircle, FaClock } from "react-icons/fa";

const initialInterests = [
  {
    id: 101,
    cropName: "Boro Dhaan",
    buyerName: "Rahim Khan",
    requestedQuantity: 50,
    unit: "ton",
    message: "Need immediate supply, best price offer.",
    status: "Pending",
  },
  {
    id: 102,
    cropName: "Tomato",
    buyerName: "Sumi Akter",
    requestedQuantity: 10,
    unit: "bag",
    message: "Interested in high quality organic tomatoes.",
    status: "Accepted",
  },
  {
    id: 103,
    cropName: "Mango (Amrupali)",
    buyerName: "Kalam Hossain",
    requestedQuantity: 200,
    unit: "kg",
    message: "Price negotiation possible?",
    status: "Rejected",
  },
];

const MyInterests = () => {
  const [interests, setInterests] = useState(initialInterests);


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
      <div className="min-h-screen">
        <div className="bg-white p-6 rounded-xl shadow-lg overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-green-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Crop Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Owner
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Requested Quantity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  My Message
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {interests.length > 0 ? (
                interests.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                      {item.cropName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.buyerName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {item.requestedQuantity} {item.unit}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                      {item.message}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <span
                        className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border ${getStatusClass(
                          item.status
                        )}`}
                      >
                        {item.status === "Accepted" && (
                          <FaCheckCircle className="mr-1 mt-0.5" />
                        )}
                        {item.status === "Rejected" && (
                          <FaTimesCircle className="mr-1 mt-0.5" />
                        )}
                        {item.status === "Pending" && (
                          <FaClock className="mr-1 mt-0.5" />
                        )}
                        {item.status}
                      </span>
                    </td>
                  </tr>
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

export default MyInterests;
