import React from "react";

const Partners = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 headingFont">Our Partners</h2>
        <p className="text-gray-500 mb-12">
          We collaborate with trusted organizations and marketplaces to bring
          you the best.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-center">
          {/* Partner Logos */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhPhORsNOO2wYXrhNLSiGUCJ0v_03Ee6OjFQ&s"
            alt="Partner 1"
            className="mx-auto transform transition-transform duration-300 hover:scale-105"
          />
          <img
            src="https://cdn.vectorstock.com/i/500p/30/14/chicken-farm-logo-poultry-emblem-vector-49393014.jpg"
            alt="Partner 2"
            className="mx-auto transform transition-transform duration-300 hover:scale-105"
          />
          <img
            src="https://img.freepik.com/free-vector/supermarket-logo-template-theme_23-2148452347.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Partner 3"
            className="mx-auto transform transition-transform duration-300 hover:scale-105"
          />
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/019/030/973/small/fresh-harvest-logo-with-a-combination-of-fresh-lettering-and-plants-for-any-business-vector.jpg"
            alt="Partner 4"
            className="mx-auto transform transition-transform duration-300 hover:scale-105"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBMXu5FutGWGs4Q97dyd8dDRF7INiB2UGcEw&s"
            alt="Partner 5"
            className="mx-auto transform transition-transform duration-300 hover:scale-105"
          />
          <img
            src="https://marketplace.canva.com/EAFzNPymYfI/1/0/1600w/canva-green-vintage-agriculture-and-farming-logo-YfsNrlXg9_8.jpg"
            alt="Partner 6"
            className="mx-auto transform transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;
