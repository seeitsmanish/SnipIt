import React from "react";
import { Button } from "../../ui/Button";

type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  return (
    <div>
      <div className="mt-[100px]">
        <div className="flex items-center justify-center gap-8">
          <h1 className="animate-slideInFromBottom bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-center text-9xl font-bold text-transparent opacity-0">
            Code
          </h1>
          <h1
            style={{ animationDelay: "500ms" }}
            className="animate-slideInFromBottom bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text text-center text-9xl font-bold text-transparent opacity-0"
          >
            Share
          </h1>
        </div>
        <div className="flex justify-center">
          <h1
            style={{ animationDelay: "1000ms" }}
            className="animate-slideInFromBottom mt-4 bg-gradient-to-r from-cyan-300 via-blue-300 to-green-300 bg-clip-text text-center text-9xl font-bold text-transparent opacity-0"
          >
            Collaborate
          </h1>
        </div>
      </div>
      <div className="mt-10 text-center">
        <Button
          variant="primary"
          size="lg"
          className="animate-slideInFromBottom font-medium opacity-0"
          style={{ animationDelay: "1500ms" }}
        >
          Create New Room
        </Button>
      </div>
    </div>
  );
};
export default Hero;
