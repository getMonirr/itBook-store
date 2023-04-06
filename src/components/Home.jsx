import React from "react";
import { Header } from "./Header";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import Loading from "./Loading";

const Home = () => {
  const { state } = useNavigation();

  if (state === "loading") {
    return <Loading />;
  }
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
