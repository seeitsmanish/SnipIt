import React from "react";
import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Hero />
      <Features />
    </>
  );
};
export default Home;
