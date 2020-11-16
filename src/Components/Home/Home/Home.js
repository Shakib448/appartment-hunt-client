import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import HouseRent from "../HouseRent/HouseRent";
import Service from "../Service/Service";

const Home = () => {
  return (
    <>
      <Banner />
      <HouseRent />
      <Service />
      <Footer />
    </>
  );
};

export default Home;
