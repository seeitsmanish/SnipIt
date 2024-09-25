import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../../ui/Button";
import { getRandomRoomSlug } from "../../utils";
type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="mt-14 flex items-center justify-center gap-10 px-2">
      <div className="h-[300px] w-1/2 overflow-hidden rounded-xl">
        <img
          src="https://cdn.usegalileo.ai/stability/5f605f96-18c8-4661-b989-20a2fd0f2926.png"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex h-[300px] w-1/2 flex-col justify-between">
        <h1 className="mr-5 font-sans text-5xl font-medium text-white">
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
