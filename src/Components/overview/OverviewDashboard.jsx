import React, { use, useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  HiOutlineCurrencyBangladeshi,
  HiOutlineCube,
  HiOutlineUsers,
  HiOutlineDocumentText,
} from "react-icons/hi";
import CountUp from "react-countup"; // Library-ta import koro
import { AuthContext } from "../../Provider/ContextProvider";
import { HiOutlineUserPlus } from "react-icons/hi2";

const Overview = () => {
  const [userstate1, setUserstate1] = useState({
    totalPosts: 0,
    totalInterests: 0,
    vegetable: 5,
    fruit: 9,
    grain: 8,
    others: 1,
  });
  const [cropState,setCropState]=useState([

  ])
  const { user } = use(AuthContext);


  // pie charts data
  let colors = ["#22c55e", "#3b82f6", "#feca57", "#ef4444"];

  let pieDataa = [
    { name: "Vegetable", value: userstate1.vegetable },
    { name: "Fruit", value: userstate1.fruit },
    { name: "Grain", value: userstate1.grain },
    { name: "Others", value: userstate1.others },
  ];


  useEffect(() => {
    fetch(`http://localhost:3000/owner-stats?email=${user?.email}`)
      .then((res) => res.json())
      .then((result) => setUserstate1(result));
    fetch(`http://localhost:3000/interest-stats/${user?.email}`)
      .then((res) => res.json())
      .then((result) => setCropState(result));

  }, [user?.email]);

  console.log(userstate1);

  return (
    <div className="py-6 bg-gray-50 min-h-screen font-sans">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 headingFont">
          Dashboard Overview
        </h2>
        <p className="text-gray-500">
          Welcome back <span className="text-lg font-bold text-green-400">{user?.displayName.split(" ")[0]}</span>! Here's
          your crop performance at a glance.
        </p>
      </div>

      {/* --- Stats Cards --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        {/* 1. Total Posts Card (Nnotun add korlam) */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-green-100 flex items-center gap-4">
          <div className="p-4 bg-green-100 text-green-600 rounded-xl">
            <HiOutlineDocumentText size={30} />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">
              Total Posts
            </p>
            <h3 className="text-2xl font-bold">
              <CountUp end={userstate1.totalPosts} duration={2} /> Items
            </h3>
          </div>
        </div>

        {/* 2. Interests Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 flex items-center gap-4">
          <div className="p-4 bg-blue-100 text-blue-600 rounded-xl">
            <HiOutlineUserPlus size={30} />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">
              Total Interests
            </p>
            <h3 className="text-2xl font-bold">
              <CountUp end={userstate1.totalInterests} duration={2.5} />{" "}
              Interests
            </h3>
          </div>
        </div>
      </div>

      {/* --- Charts Section --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {/* Bar Chart */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-bold text-gray-700 mb-6">Stock vs Demand</h3>

          {/* ১. Scroll handle korar jonno eikhane overflow-x-auto use koro */}
          <div className="w-full overflow-x-auto overflow-y-hidden">
            {/* ২. Chart-er jonno ekta fixed width set koro jate scroll kaj kore */}
            {/* width={`${cropState.length * 100}px`} dile dynamic bhabe boro hobe */}
            <div
              style={{
                width:
                  cropState.length > 5 ? `${cropState.length * 120}px` : "100%",
                height: "350px",
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={cropState}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#f0f0f0"
                  />
                  {/* XAxis-e interval={0} dile shob gulo nam porishkar dekha jabe */}
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    interval={0}
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip cursor={{ fill: "#f9fafb" }} />
                  <Legend />
                  <Bar
                    dataKey="stock"
                    fill="#22c55e"
                    name="My Stock"
                    radius={[4, 4, 0, 0]}
                    barSize={40} // Bar gulo ekta nirdishto size-e thakbe
                  />
                  <Bar
                    dataKey="requested"
                    fill="#3b82f6"
                    name="Buyer Request"
                    radius={[4, 4, 0, 0]}
                    barSize={40}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-700 mb-6 text-center">
            Crop Categories
          </h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieDataa} // Ekhane uporer pieData array ta use hobe
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieDataa.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={colors[index % colors.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
