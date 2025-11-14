import React, { use, useEffect, useState } from "react";
import { FaCheckCircle, FaClock, FaTimesCircle } from "react-icons/fa";
import { AuthContext } from "../../Provider/ContextProvider";
import Loader from "../Loader/Loader";

const SingleInteresdts = ({ item }) => {
  const { user } = use(AuthContext);
  const [myInterestsInfo, setMyInterestsInfo] = useState(null);
 


  useEffect(() => {
    const myInterests = item.interests.filter(
      (element) => element.email == user.email
    );
    setMyInterestsInfo(...myInterests);
  }, [item]);






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

if (!myInterestsInfo) {

  console.log("ami duksi");
  
 return <Loader/>
}


  console.log(myInterestsInfo);
  return (
    <tr key={item._id} className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
        {item.name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {item.owner.ownerName}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
        {myInterestsInfo.quantity} {item.unit}
      </td>
      <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
        {myInterestsInfo.message}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-center">
        <span
          className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border ${getStatusClass(
            myInterestsInfo.status
          )}`}
        >
          {myInterestsInfo.status === "Accepted" && (
            <FaCheckCircle className="mr-1 mt-0.5" />
          )}
          {myInterestsInfo.status === "Rejected" && (
            <FaTimesCircle className="mr-1 mt-0.5" />
          )}
          {myInterestsInfo.status === "Pending" && (
            <FaClock className="mr-1 mt-0.5" />
          )}
          {myInterestsInfo.status}
        </span>
      </td>
    </tr>
  );
};

export default SingleInteresdts;
