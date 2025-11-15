import React, { use, useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { AuthContext } from "../../Provider/ContextProvider";
import { FaCheckCircle } from "react-icons/fa";

const BookedForm = ({ id, postDetails, user }) => {
  const [totalPrice, setTotalPrice] = useState(null);
  const [isBooked,setIsBooked]=useState(" ")

postDetails.interests.forEach(element => {
  if (element.email==user.email) {
    console.log(element.email,user.email)
    return
  }
});



useEffect(() => {
  const Booked = postDetails.interests.some((i) => i.email === user.email);
  setIsBooked(Booked);
}, [postDetails,user]);


if (isBooked.length==1) {
  return <Loader/>
}


console.log(postDetails);


  function handleTotalPrice(e) {
    const total = e.target.value;
    setTotalPrice(total * postDetails.pricePerUnit);
  }

  function handleBooked(e) {
    e.preventDefault();
    const quantity = e.target.quantity.value;
    const message = e.target.message.value;
    const total = e.target.total.value;
    const email = user.email;

    const userName = user.displayName;
    const status = "Pending";

    const bookedInfo = {
      email,
      userName,
      quantity,
      message,
      total,
      status,
    };


    if (quantity<1) {
      alert("Quantity must be atleast 1")
      return
    }



    fetch(`http://localhost:3000/post/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookedInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        alert("sucessfully done");
        setIsBooked(true);
      });
  }

  return (
    <div className="">
      <div className="py-10 shadow-2xl border-green-200">
        {isBooked ? (
          <p className="flex items-center justify-center gap-2 px-3 py-1.5 text-green-800 rounded-full text-3xl font-medium max-w-[500px] mx-auto">
<FaCheckCircle/>
            You’ve already sent an interest
          </p>
        ) : (
          <form
            class="flex flex-col gap-2 bg-white p-7 w-full max-w-lg mx-auto rounded-xl font-sans"
            onSubmit={handleBooked}
          >
            <h3 className="text-3xl font-extrabold text-center text-gray-900 mb-6 text-green-700">
              Post Book form
            </h3>
            <div class="flex-column flex flex-col">
              <label class="text-[#151717] font-semibold">Quantity</label>
            </div>
            <div class="inputForm border border-gray-200 rounded-lg h-[50px] flex items-center pl-3 transition-all duration-200 ease-in-out focus-within:border-[#07b553]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="flex-shrink-0 text-gray-500"
              >
                <path d="M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H10"></path>
                <path d="M12 17V7L17 12"></path>
                <path d="M17 7L12 12"></path>
              </svg>

              <input
                placeholder="Enter quantity"
                class="input ml-2 rounded-lg border-none w-full h-full focus:outline-none"
                type="number"
                name="quantity"
                onChange={handleTotalPrice}
              />
            </div>

            <div class="flex-column flex flex-col mt-2">
              <label class="text-[#151717] font-semibold">Message</label>
            </div>
            <div class="inputForm border border-gray-200 rounded-lg h-[50px] flex items-center pl-3 transition-all duration-200 ease-in-out focus-within:border-[#06ae4f]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="flex-shrink-0 text-gray-500"
              >
                <path d="M21 15V4C21 3.44772 20.5523 3 20 3H4C3.44772 3 3 3.44772 3 4V15C3 15.5523 3.44772 16 4 16H18L21 19V16C21 15.4477 20.5523 15 20 15H16"></path>
                <line x1="8" y1="9" x2="16" y2="9"></line>
                <line x1="8" y1="13" x2="14" y2="13"></line>
              </svg>
              <input
                placeholder="Enter your message"
                class="input ml-2 rounded-lg border-none w-full h-full focus:outline-none"
                name="message"
                type="text"
              />
            </div>

            <div class="flex-column flex flex-col mt-2">
              <label class="text-[#151717] font-semibold">Total Price</label>
            </div>
            <div class="inputForm border border-gray-200 rounded-lg h-[50px] flex items-center pl-3 transition-all duration-200 ease-in-out focus-within:border-[#06ae4f]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="flex-shrink-0 text-gray-500"
              >
                <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"></path>
                <path d="M12 15L12 9"></path>
                <path d="M16 11L12 15L8 11"></path>
              </svg>
              <input
                placeholder="Quantity * unit Price"
                class="input ml-2 rounded-lg border-none w-full h-full focus:outline-none"
                name="total"
                type="number"
                readOnly
                value={totalPrice}
              />
            </div>

            <button class="button-submit mt-5 mb-2 bg-[#0cdc39]  border-none text-white text-base font-medium rounded-lg h-[50px] w-full cursor-pointer hover:bg-[#0bb730]  transition duration-150">
              Book this post
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookedForm;
