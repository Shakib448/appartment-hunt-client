import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import HouseRent from "../HouseRent/HouseRent";
import Service from "../Service/Service";

const Home = () => {
  return (
    <main style={{ backgroundColor: "#f1f6f4" }}>
      <Banner />
      <HouseRent />
      <Service />
      <Footer />
    </main>
  );
};

export default Home;
