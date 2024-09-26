import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../../ui/Button";
import { getRandomRoomSlug } from "../../utils";
type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-10 md:mt-14 md:flex-row md:gap-10 md:px-2">
      <div className="h-[200px] w-full overflow-hidden rounded-xl md:h-[300px] md:w-1/2">
        <img
          src="https://cdn.usegalileo.ai/stability/5f605f96-18c8-4661-b989-20a2fd0f2926.png"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex h-[200px] w-full flex-col justify-between md:h-[300px] md:w-1/2">
        <h1 className="font-sans text-3xl font-medium text-white md:mr-5 md:text-5xl">
          Real-time collaboration for developers
        </h1>
        <p className="font-serif text-gray-300">
          Write code together in real time. Code, Share and Collaborate with you
          teammates.
        </p>
        <Button
          onClick={() => {
            const roomSlug = getRandomRoomSlug();
            window.open(`/${roomSlug}`, "_blank");
          }}
          className="flex w-full items-center justify-center gap-4 p-3 duration-300 hover:gap-5"
        >
          <span>Start Coding</span>
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
};
export default Hero;
