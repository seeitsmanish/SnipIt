import React from "react";
import Footer from "../components/Home/Footer";
import Hero from "../components/Home/Hero";
type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Hero />
      <Footer />
    </>
  );
};
export default Home;
