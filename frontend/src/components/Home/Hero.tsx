import React from "react";
import { Button } from "../../ui/Button";
import { getRandomRoomSlug } from "../../utils";
type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <div className="">
        <div className="flex flex-col items-center justify-center md:flex-row md:gap-8">
          <h1 className="animate-slideInFromBottom bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-center text-[15vw] font-bold leading-tight text-transparent opacity-0 md:text-9xl">
            Code
          </h1>
          <h1
            style={{ animationDelay: "500ms" }}
            className="animate-slideInFromBottom bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text text-center text-[15vw] font-bold leading-tight text-transparent opacity-0 md:text-9xl"
          >
            Share
          </h1>
        </div>
        <div className="flex justify-center">
          <h1
            style={{ animationDelay: "1000ms" }}
            className="animate-slideInFromBottom bg-gradient-to-r from-cyan-300 via-blue-300 to-green-300 bg-clip-text text-center text-[15vw] font-bold leading-tight text-transparent opacity-0 md:mt-4 md:text-9xl"
          >
            Collaborate
          </h1>
        </div>
        <div className="mt-5 text-center md:mt-10">
          <Button
            variant="primary"
            size="lg"
            className="animate-slideInFromBottom text-md px-3 font-medium opacity-0 md:px-9 md:text-xl"
            style={{ animationDelay: "1500ms" }}
            onClick={() => {
              const roomSlug = getRandomRoomSlug();
              window.open(`/${roomSlug}`, '_blank');
            }}
          >
            Create New Room
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
