import React from "react";
import Nav from "../components/Home/Nav";
import Footer from "../components/Home/Footer";
import Hero from "../components/Home/Hero";
type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="min-h-screen w-screen bg-zinc-950 bg-dots-pattern bg-dots-size">
      <Nav />
      <Hero />
      <Footer />
    </div>
  );
};
export default Home;
