import React, { useEffect, useState } from "react";
import {
  FaCheck,
  FaCheckCircle,
  FaClock,
  FaTimes,
  FaTimesCircle,
} from "react-icons/fa";
import Loader from "../Loader/Loader";
import toast from "react-hot-toast";

const SingleInterest = ({ item, postId }) => {
  const [obj, setObj] = useState(item);
  const [isBtnDisable, setIsBtnDisable] = useState(" ");

  useEffect(() => {
    if (item.status == "Accepted") {
      setIsBtnDisable(true);
    } else {
      setIsBtnDisable(false);
    }
  }, [item.status]);

  if (isBtnDisable.length < 1) {
    return <Loader />;
  }

  console.log(obj);

  function handleAccept(id) {
    const query = {
      status: "Accepted",
    };

    fetch(`https://krishilink-two.vercel.app/interestStatus/${postId}/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(query),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success("Interest Accepted");
        setObj((prev) => ({
          ...prev,
          status: "Accepted",
        }));

        setIsBtnDisable(true);
      });
  }

  function handleRejected(id) {
    const query = {
      status: "Rejected",
    };

    fetch(`https://krishilink-two.vercel.app/interestStatus/${postId}/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(query),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.error("Interest Rejected");
        setObj((prev) => ({
          ...prev,
          status: "Rejected",
        }));
        setIsBtnDisable(true);
      });
  }

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
    <tr key={obj._id} className="hover:bg-gray-50 text-left">
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {obj.userName}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
        {obj.quantity}{obj.unit}
      </td>
      <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
        {obj.message}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-center">
        <span
          className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border ${getStatusClass(
            obj.status
          )}`}
        >
          {obj.status === "Accepted" && (
            <FaCheckCircle className="mr-1 mt-0.5" />
          )}
          {obj.status === "Rejected" && (
            <FaTimesCircle className="mr-1 mt-0.5" />
          )}
          {obj.status === "Pending" && <FaClock className="mr-1 mt-0.5" />}
          {obj.status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900 flex items-center justify-start gap-2">
        <button
          className={`bg-green-100 text-green-700 border-green-400 flex items-center justify-center gap-1 p-1 rounded-2xl border acceptReject  ${
            isBtnDisable || obj.status != "Pending"
              ? "cursor-not-allowed opacity-50"
              : "hover:bg-green-600"
          }`}
          onClick={() => handleAccept(obj._id)}
          disabled={isBtnDisable}
        >
          <FaCheck />
          <span>Accept</span>
        </button>
        <button
          className={`bg-red-100 p-1 rounded-2xl text-red-700 border-red-400 flex items-center justify-center gap-1 border acceptReject ${
            isBtnDisable || obj.status != "Pending"
              ? "cursor-not-allowed opacity-50"
              : "hover:bg-green-600"
          }`}
          onClick={() => handleRejected(obj._id)}
          disabled={isBtnDisable}
        >
          <FaTimes />
          <span>Reject</span>
        </button>
      </td>
    </tr>
  );
};

export default SingleInterest;
