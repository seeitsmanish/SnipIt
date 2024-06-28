import React from "react";
import Button from "../ui/Button";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="h-screen w-screen bg-black bg-dots-pattern bg-dots-size pt-[100px]">
      <div>
        <h1 className="animate-slideInFromTop bg-opacity-30 bg-gradient-to-r from-fuchsia-300 via-blue-200 to-teal-300 bg-clip-text text-center text-9xl font-bold text-transparent opacity-0">
          Code.
        </h1>
        <h1
          style={{ animationDelay: "800ms" }}
          className="mt-4 animate-slideInFromTop bg-gradient-to-r from-fuchsia-300 via-blue-200 to-teal-300 bg-clip-text text-center text-9xl font-bold text-transparent opacity-0"
        >
          Share
        </h1>
        <h1
          style={{ animationDelay: "1600ms" }}
          className="mt-4 animate-slideInFromTop bg-gradient-to-r from-fuchsia-300 via-blue-200 to-teal-300 bg-clip-text text-center text-9xl font-bold text-transparent opacity-0"
        >
          Collaborate.
        </h1>
      </div>

      <div className="mt-5 text-center">
        <Button
          variant="primary"
          size="lg"
          className="animate-slideInFromTop opacity-0"
          style={{ animationDelay: "2.4s" }}
        >
          Create New Room
        </Button>
      </div>
    </div>
  );
};
export default Home;
