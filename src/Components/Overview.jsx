import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { FaUsers, FaUserTie, FaClipboardList } from "react-icons/fa"; // react-icons install kora thakle

const Overview = () => {

  // Demo Data (Backend theke fetch korle bhalo hoy)
  const [stats, setStats] = useState({});


    useEffect(() => {
      fetch(`http://localhost:3000/site-stats`)
        .then((res) => res.json())
        .then((result) => setStats(result))
        .catch((err) => console.log(err));
    }, []);


  // 

  return (
    <div className="my-12 bg-white rounded-[2rem] border border-green-100 shadow-sm py-12 px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-green-700 mb-4 headingFont">
          Platform Statistics
        </h2>
        <p className="text-gray-500 text-lg bodyFont max-w-2xl mx-auto">
          Driving digital transformation in agriculture. Connecting thousands of
          farmers and buyers daily.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* 1. Total Users */}
        <div className="group bg-green-50/50 p-8 rounded-3xl border-2 border-transparent hover:border-green-500 hover:bg-white transition-all duration-300">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-white rounded-2xl shadow-sm text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all">
              <FaUsers size={32} />
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-gray-800 mb-1">
              <CountUp
                end={stats.totalusers}
                duration={3}
                enableScrollSpy={true}
              />
              +
            </div>
            <div className="text-green-700 font-bold uppercase tracking-wider text-sm">
              Total Community
            </div>
          </div>
        </div>

        {/* 2. Total Sellers */}
        <div className="group bg-blue-50/50 p-8 rounded-3xl border-2 border-transparent hover:border-blue-500 hover:bg-white transition-all duration-300">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-white rounded-2xl shadow-sm text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <FaUserTie size={32} />
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-gray-800 mb-1">
              <CountUp
                end={stats.totalSellers}
                duration={3}
                enableScrollSpy={true}
              />
              +
            </div>
            <div className="text-blue-700 font-bold uppercase tracking-wider text-sm">
              Active Sellers
            </div>
          </div>
        </div>

        {/* 3. Total Posts */}
        <div className="group bg-amber-50/50 p-8 rounded-3xl border-2 border-transparent hover:border-amber-500 hover:bg-white transition-all duration-300">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-white rounded-2xl shadow-sm text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all">
              <FaClipboardList size={32} />
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-gray-800 mb-1">
              <CountUp
                end={stats.totalPosts}
                duration={3}
                enableScrollSpy={true}
              />
            </div>
            <div className="text-amber-700 font-bold uppercase tracking-wider text-sm">
              Crops Posted
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
