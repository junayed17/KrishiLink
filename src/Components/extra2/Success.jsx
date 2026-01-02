import React from "react";

const Success = () => {
  return (
    <section className="my-8 max-w-[1440px] mx-auto">
      <div className=" px-4">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-3">
            <img
              src="https://script.viserlab.com/agrivest/assets/images/logo_icon/favicon.png"
              alt="icon"
              className="hidden sm:block sm:h-10"
            />
            <h2 className="headingFont text-3xl sm:text-5xl font-extrabold mb-1 tracking-tight">
              Success
              <span className="text-green-600 ml-2">Stories</span>
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-[1rem] sm:text-lg">
            Hear from our community members how KrishiLink has transformed their
            business
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow-lg border transform transition-transform duration-300 hover:scale-105">
            <img
              src="https://as2.ftcdn.net/v2/jpg/05/95/55/89/1000_F_595558921_z1JnF4ieH75XlWoDPuh1Os97QkPnb4dx.jpg"
              alt="Success 1"
              className="w-full h-48 object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
            />
            <h3 className="text-xl font-semibold mt-4 headingFont">
              Rafi — Farmer, Mymensingh
            </h3>
            <p className="text-gray-600 mt-2">
              “KrishiLink helped me find buyers directly. No middleman, more
              profit!”
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow-lg border transform transition-transform duration-300 hover:scale-105">
            <img
              src="https://media.istockphoto.com/id/1409903972/photo/african-woman-agriculture-farmer-examining-corn-plant-in-field-agricultural-activity-at.jpg?s=612x612&w=0&k=20&c=gyEhwye2NxBwmcp7Tul0oBQ4knchydqF5fcR_UwqppQ="
              alt="Success 2"
              className="w-full h-48 object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
            />
            <h3 className="text-xl font-semibold mt-4 headingFont">
              Sonia — Vegetable Trader
            </h3>
            <p className="text-gray-600 mt-2">
              “I could post my crops and instantly got contacts from nearby
              farmers.”
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow-lg border transform transition-transform duration-300 hover:scale-105">
            <img
              src="https://media.istockphoto.com/id/1325516395/photo/african-man-farmer-show-mango-fruit-in-organic-farm-agriculture-or-cultivation-concept.jpg?s=612x612&w=0&k=20&c=Q3Ji50pK0Y11mAOwOe6sbQFak94LtLxt-oCl8UhmHRc="
              alt="Success 3"
              className="w-full h-48 object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
            />
            <h3 className="text-xl font-semibold mt-4 headingFont">
              Kamrul — Mango Seller
            </h3>
            <p className="text-gray-600 mt-2">
              “My mango sales doubled after using KrishiLink’s posting system.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;
