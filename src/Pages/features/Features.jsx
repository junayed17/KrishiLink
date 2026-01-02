import React, { useState } from "react";
import {
  ShieldCheck,
  ShoppingBasket,
  ShoppingCart,
  Smartphone,
} from "lucide-react";

const Features = () => {
  const [activeStep, setActiveStep] = useState(0);

  const features = [
    {
      label: "Secure Auth",
      fullLabel: "Secure Authentication",
      icon: <ShieldCheck size={20} />,
      desc: "Sign up/login safely with Google or Email. Your data is always protected.",
    },
    {
      label: "Marketplace",
      fullLabel: "Easy Buying & Selling",
      icon: <ShoppingBasket size={20} />,
      desc: "Connect directly with local farmers. List your harvest in under a minute.",
    },
    {
      label: "Order & Cart",
      fullLabel: "Smart Order Management",
      icon: <ShoppingCart size={20} />,
      desc: "Buyers can manage carts and track order staus, while Sellers can view and process incoming crop orders in real-time.",
    },
    {
      label: "Optimized",
      fullLabel: "Responsive Design",
      icon: <Smartphone size={20} />,
      desc: "Access our Mandi from anywhere—works perfectly on the cheapest smartphones.",
    },
  ];

  const getStepColor = (index) => {
    if (index < activeStep) return "bg-green-600 hover:bg-green-700";
    if (index === activeStep) return "bg-black";
    return "bg-gray-300 hover:bg-gray-400";
  };

  return (
    <section className="bg-slate-50 text-black py-6 sm:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            One Platform for{" "}
            <span className="text-green-600 block md:inline headingFont">
              Krishi Commerce
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Empowering farmers with modern technology. Buy fresh, sell fast, and
            grow together.
          </p>
        </div>

        {/* --- Responsive Stepper --- */}
        <div className="flex items-center w-full rounded-xl font-sans font-bold mb-12 shadow-sm border border-gray-200 bg-white overflow-hidden gap-2">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`relative flex-1 flex flex-col md:flex-row items-center justify-center py-4 md:h-20 text-white transition-all duration-300 outline-none ${getStepColor(
                index
              )}`}
              style={{
                clipPath:
                  index === 0
                    ? "polygon(0% 0%, 92% 0%, 100% 50%, 92% 100%, 0% 100%)"
                    : index === features.length - 1
                    ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 8% 50%)"
                    : "polygon(0% 0%, 92% 0%, 100% 50%, 92% 100%, 0% 100%, 8% 50%)",
                marginLeft: index === 0 ? "0" : "-15px",
                zIndex: features.length - index,
              }}
            >
              <span className="mb-1 md:mb-0 md:mr-2">{feature.icon}</span>
              <span className="text-[9px] md:text-xs uppercase tracking-tighter md:tracking-widest">
                {feature.label}
              </span>
            </button>
          ))}
        </div>

        {/* --- Focused Feature Detail --- */}
        <div className="bg-white rounded-xl p-8 md:p-12  hover:shadow-xl border border-gray-100 transition-all duration-500">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1">
              <span className="text-green-600 font-bold uppercase text-sm tracking-widest mb-2 block">
                Feature {activeStep + 1}
              </span>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 headingFont">
                {features[activeStep].fullLabel}
              </h3>
              <p className="text-gray-600 text-xl leading-relaxed italic">
                "{features[activeStep].desc}"
              </p>
            </div>
            <div className="hidden md:block bg-green-50 p-8 rounded-full text-green-600">
              {React.cloneElement(features[activeStep].icon, { size: 80 })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
