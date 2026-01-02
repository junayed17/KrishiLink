import React from "react";
import Navber from "../Components/Navber";
import Footer from "../Components/footer/Footer";
import { Outlet } from "react-router";

const Home = () => {
  return (
    <div className="min-h-full">
      <header>
        <Navber />
      </header>
      <main className="mx-2 sm:mx-4 min-h-[60vh]">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
