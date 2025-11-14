import React from "react";

const Blog = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 max-w-[1440px] mx-auto px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <div className="flex items-center justify-center gap-4">
          <img
            src="https://script.viserlab.com/agrivest/assets/images/logo_icon/favicon.png"
            alt=""
            className="w-8 h-8"
          />
          <h2 className="headingFont text-5xl font-bold text-gray-800">
            Latest Blog Posts
          </h2>
          <img
            src="https://script.viserlab.com/agrivest/assets/images/logo_icon/favicon.png"
            alt=""
            className="w-8 h-8"
          />
        </div>
        <p className="text-gray-500 mt-3">
          Explore insights, farming tips, and the latest updates from AgriLink.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
        {/* Blog 1 */}
        <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
          <div className="overflow-hidden">
            <img
              src="https://img.freepik.com/free-photo/agriculture-field_1385-1170.jpg"
              alt="Blog 1"
              className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="p-6 text-left">
            <span className="text-green-500 font-semibold text-sm">
              Agriculture • Nov 10, 2025
            </span>
            <h3 className="text-2xl font-bold text-gray-800 mt-2 mb-3 headingFont group-hover:text-green-600 transition-colors duration-300">
              5 Smart Farming Techniques for 2025
            </h3>
            <p className="text-gray-500">
              Discover modern agricultural innovations helping farmers increase
              productivity while preserving the environment.
            </p>
            <button className="mt-5 text-green-600 font-semibold hover:underline">
              Read More →
            </button>
          </div>
        </div>

        {/* Blog 2 */}
        <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
          <div className="overflow-hidden">
            <img
              src="https://img.freepik.com/free-photo/closeup-shot-cornfield-with-focus-corn-plants_181624-48618.jpg"
              alt="Blog 2"
              className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="p-6 text-left">
            <span className="text-green-500 font-semibold text-sm">
              Crop Management • Nov 5, 2025
            </span>
            <h3 className="text-2xl font-bold text-gray-800 mt-2 mb-3 headingFont group-hover:text-green-600 transition-colors duration-300">
              Best Practices for Sustainable Crop Growth
            </h3>
            <p className="text-gray-500">
              Learn how sustainable practices can boost yield while protecting
              your soil and local ecosystem.
            </p>
            <button className="mt-5 text-green-600 font-semibold hover:underline">
              Read More →
            </button>
          </div>
        </div>

        {/* Blog 3 */}
        <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
          <div className="overflow-hidden">
            <img
              src="https://img.freepik.com/free-photo/farmers-hand-holding-wheat-ear-golden-field_1150-10487.jpg"
              alt="Blog 3"
              className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="p-6 text-left">
            <span className="text-green-500 font-semibold text-sm">
              Community • Oct 30, 2025
            </span>
            <h3 className="text-2xl font-bold text-gray-800 mt-2 mb-3 headingFont group-hover:text-green-600 transition-colors duration-300">
              How Farmers Are Adapting to Climate Change
            </h3>
            <p className="text-gray-500">
              See how local communities are embracing smart solutions to face
              changing climate challenges.
            </p>
            <button className="mt-5 text-green-600 font-semibold hover:underline">
              Read More →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
