import React from "react";
import Navber from "../Components/Navber";
import Footer from "../Components/footer/Footer";
import { Outlet } from "react-router";

const Home = () => {
  return (
    <div>
      <header>
        <Navber />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
