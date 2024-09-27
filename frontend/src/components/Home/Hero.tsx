import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../../ui/Button";
import { getRandomRoomSlug } from "../../utils";
type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-10 md:mt-[5vh] md:h-[40vh] md:flex-row md:gap-10 md:px-2">
      <div className="h-[200px] w-full overflow-hidden rounded-xl md:h-[40vh] md:w-1/2">
        <img
          src="https://cdn.usegalileo.ai/stability/5f605f96-18c8-4661-b989-20a2fd0f2926.png"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex w-full flex-col justify-center gap-4 md:h-[40vh] md:w-1/2 md:gap-5">
        {/* Mobile Site */}
        <h1 className="text-center font-sans text-4xl font-medium text-white md:hidden">
          Real Time Code Collaboration for Developers
        </h1>
        <p className="text-center font-serif text-gray-300 md:hidden">
          Write code together in real time. Code, Share and Collaborate with
          your teammates.
        </p>
        {/* Ipad and Desktop Site */}
        <div className="hidden flex-row flex-wrap gap-0 md:flex md:flex-col">
          <h1 className="font-sans text-3xl font-medium text-white md:mr-5 md:text-4xl">
            Real-time
          </h1>
          <h1 className="font-sans text-3xl font-medium text-white md:mr-5 md:text-4xl">
            Collaboration
          </h1>
          <h1 className="font-sans text-3xl font-medium text-white md:mr-5 md:text-4xl">
            for Developers
          </h1>
        </div>
        <div className="hidden flex-row flex-wrap gap-0 md:flex md:flex-col">
          <p className="font-serif text-gray-300">
            Write code together in real time.
          </p>
          <p className="font-serif text-gray-300">
            Code, Share and Collaborate with your teammates.
          </p>
        </div>
        <Button
          onClick={() => {
            const roomSlug = getRandomRoomSlug();
            window.open(`/${roomSlug}`, "_blank");
          }}
          className="flex w-full items-center justify-center gap-4 p-3 duration-300"
        >
          <span>Start Coding</span>
          <ArrowRight className="animate-arrow-motion" />
        </Button>
      </div>
    </div>
  );
};
export default Hero;
