import React, { use, useEffect, useState } from "react";
import { FaCheckCircle, FaTimesCircle, FaClock } from "react-icons/fa";
import { AuthContext } from "../../Provider/ContextProvider";
import Loader from "../Loader/Loader";
import SingleInteresdts from "./SingleInteresdts";
import toast from "react-hot-toast";

const MyInterests = () => {
  const [interestssss, setInterestssss] = useState(null);
  const [myInterestsInfo, setMyInterestsInfo] = useState(null);

  const { user } = use(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:3000/myInterestedPosts/${user.email}`)
      .then((res) => res.json())
      .then((result) => {
        setInterestssss(result);
      });
  }, [user.email]);

  useEffect(() => {
    if (!interestssss) {
      return;
    }

    const myInterests = interestssss.filter((ele) => ele.email == user.email);
    setMyInterestsInfo(myInterests);
  }, [interestssss]);

  // useEffect(() => {
  //   let interestInfo = interestssss?.interests.filter(
  //     (ele) => ele.email === user.email
  //   );
  //   setMyInterestsInfo(interestInfo);
  // }, [interestssss, user.email]);

  if (!interestssss) {
    return <Loader />;
  }

  function sortByName() {
    const sortByName = interestssss.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    toast.success("Sorted sucessfully");

    setInterestssss([...sortByName]);
  }

  console.log(interestssss);

  return (
    <section className="max-w-[1440px] mx-auto px-4 py-10">
      <title>KrisiLink | MyInterests</title>
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-3">
          <img
            src="https://script.viserlab.com/agrivest/assets/images/logo_icon/favicon.png"
            alt=""
            className="hidden sm:block sm:h-10"
          />
          <h2 className="headingFont text-3xl sm:text-5xl font-extrabold mb-1 tracking-tight">
            Your Interested
            <span className="text-green-600  ml-2">Posts</span>
          </h2>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto text-[1rem] sm:text-lg">
          Explore the crops you’ve marked interest in.
        </p>
      </div>
      <button
        className="block cursor-pointer px-6 py-3 rounded-2xl bg-green-500 max-w-[180px] mx-auto mb-10 font-bold shadow-2xl"
        onClick={sortByName}
      >
        <p className="text-black">Shot by Name</p>
      </button>
      <div className="min-h-[50vh]">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-green-100 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-green-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider headingFont">
                  Crop Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider headingFont">
                  Owner
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider headingFont">
                  Requested Quantity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider headingFont">
                  My Message
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider headingFont">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {interestssss.length > 0 ? (
                interestssss.map((item) => <SingleInteresdts item={item} />)
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="px-6 py-4 text-center text-gray-500 headingFont"
                  >
                    You have no interested post.
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
