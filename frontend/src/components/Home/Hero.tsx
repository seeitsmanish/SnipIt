import React from "react";
import { ImageExampleCard3D } from "../ImageExampleCard3D/ImageExampleCard3D";
import { CircleCheck } from "lucide-react";
import { Button } from "../../ui/Button";
import { getRandomRoomSlug } from "../../utils";
type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="max-h-[80vh] flex flex-col h-fit items-center relative w-full">
      <div className="w-fit flex flex-col md:flex-row md:gap-10">
        <div className="md:w-[40%] flex flex-col items-center justify-center">
          <div className="w-fit">
            <div className="flex items-center justify-center md:flex-row gap-[11px] md:gap-[14px]">
              <h1 className="animate-slideInFromBottom bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-center text-[15vw] font-bold leading-tight text-transparent opacity-0 lg:text-7xl md:text-6xl">
                Code
              </h1>
              <h1
                style={{ animationDelay: "500ms" }}
                className="animate-slideInFromBottom bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text text-center text-[15vw] font-bold leading-tight text-transparent opacity-0 lg:text-7xl md:text-6xl"
              >
                Share
              </h1>
            </div>
            <div className="flex justify-center">
              <h1
                style={{ animationDelay: "1000ms" }}
                className="animate-slideInFromBottom bg-gradient-to-r from-cyan-300 via-blue-300 to-green-300 bg-clip-text text-center text-[15vw] font-bold leading-tight text-transparent opacity-0 md:mt-4 lg:text-7xl md:text-6xl"
              >
                Collaborate
              </h1>
            </div>
            <div className="mt-5 md:mt-10 flex flex-col items-center gap-4 w-full">
              <p className="text-gray-300 flex items-center justify-normal gap-2 w-0 text-nowrap animate-writingText overflow-hidden text-xs md:text-base" style={{
                animationDelay: '1500ms'
              }}> <CircleCheck className="text-green-500 size-4 md:size-6" /> <span>Create New Room with random room slug</span>
              </p>
              <p className="text-gray-300 flex items-center justify-normal gap-2 w-0 text-nowrap animate-writingText overflow-hidden text-xs md:text-base" style={{
                animationDelay: '2000ms'
              }}> <CircleCheck className="text-green-500 size-4 md:size-6" /> <span> Choose your favourite language </span>
              </p>
              <p className="text-gray-300 flex items-center justify-normal gap-2 w-0 text-nowrap animate-writingText overflow-hidden text-xs md:text-base" style={{
                animationDelay: '2500ms'
              }}> <CircleCheck className="text-green-500 size-4 md:size-6" /> <span> Share Room Slug with Friends </span>
              </p>
              <Button
                className="text-base font-bold w-full md:hidden opacity-0 animate-slideInFromBottom"
                style={{ animationDelay: '3000ms' }}
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
        <div style={{ animationDelay: '1s' }} className="h-full hidden md:flex md:w-[60%] items-center justify-end opacity-0 animate-slideInFromRight">
          <ImageExampleCard3D />
        </div>
      </div>
    </div>
  );
};
export default Hero;
