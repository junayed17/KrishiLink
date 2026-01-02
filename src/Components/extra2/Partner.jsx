import React from "react";
import Marquee from "react-fast-marquee";

const Partners = () => {
  // Array of partner logos
  const partnerLogos = [
    {
      id: 1,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhPhORsNOO2wYXrhNLSiGUCJ0v_03Ee6OjFQ&s",
      alt: "Partner 1",
    },
    {
      id: 2,
      src: "https://cdn.vectorstock.com/i/500p/30/14/chicken-farm-logo-poultry-emblem-vector-49393014.jpg",
      alt: "Partner 2",
    },
    {
      id: 3,
      src: "https://img.freepik.com/free-vector/supermarket-logo-template-theme_23-2148452347.jpg?semt=ais_hybrid&w=740&q=80",
      alt: "Partner 3",
    },
    {
      id: 4,
      src: "https://static.vecteezy.com/system/resources/thumbnails/019/030/973/small/fresh-harvest-logo-with-a-combination-of-fresh-lettering-and-plants-for-any-business-vector.jpg",
      alt: "Partner 4",
    },
    {
      id: 5,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBMXu5FutGWGs4Q97dyd8dDRF7INiB2UGcEw&s",
      alt: "Partner 5",
    },
    {
      id: 6,
      src: "https://marketplace.canva.com/EAFzNPymYfI/1/0/1600w/canva-green-vintage-agriculture-and-farming-logo-YfsNrlXg9_8.jpg",
      alt: "Partner 6",
    },
  ];

  return (
    <section className="py-8">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-3">
          <img
            src="https://script.viserlab.com/agrivest/assets/images/logo_icon/favicon.png"
            alt="icon"
            className="hidden sm:block sm:h-10"
          />
          <h2 className="headingFont text-3xl sm:text-5xl font-extrabold mb-1 tracking-tight">
            Our
            <span className="text-green-600 ml-2">Partners</span>
          </h2>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto text-[1rem] sm:text-lg">
          We collaborate with trusted organizations and marketplaces to bring
          you the best.
        </p>
      </div>

      <div className="text-center">
        <div className="text-center py-4">
          <Marquee
            pauseOnHover={true}
            speed={50}
            gradient={true}
            gradientWidth={50}
            loop={0}
            autoFill={true}
          >
            {partnerLogos.map((partner) => (
              <div key={partner.id} className="mx-10">
                {" "}
                {/* mx-10 diye gap dilam */}
                <img
                  src={partner.src}
                  alt={partner.alt}
                  // h-20 diye height fix korlam jate shob logo ekshoman lage
                  className="h-25 w-auto object-contain transform transition-transform duration-300 hover:scale-110 cursor-pointer"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Partners;
