import React, { use, useEffect, useState } from "react";
import { FaCheckCircle, FaTimesCircle, FaClock } from "react-icons/fa";
import { AuthContext } from "../../Provider/ContextProvider";
import Loader from "../Loader/Loader";
import SingleInteresdts from "./SingleInteresdts";

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
  const [interestssss, setInterestssss] = useState(null);
  const [myInterestsInfo, setMyInterestsInfo] = useState(null);

  const { user, loading } = use(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:3000/myInterestedPosts/${user.email}`)
      .then((res) => res.json())
      .then((result) => {
        setInterestssss(result);
        console.log(result);
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

  console.log(interestssss);

  // console.log(myInterestsInfo);



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
              {interestssss.length > 0 ? (
                interestssss.map((item) => <SingleInteresdts item={item} />)
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
