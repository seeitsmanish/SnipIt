import React from "react";
import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="mx-auto w-[70%] max-w-[1008px]">
      <Hero />
      <Features />
    </div>
  );
};
export default Home;
