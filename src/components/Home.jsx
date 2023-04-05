import React from "react";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="min-h-[calc(100ch-140px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
