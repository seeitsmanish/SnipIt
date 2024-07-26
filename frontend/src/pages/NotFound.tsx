import React from "react";
import { Button, ButtonWithGradient } from "../ui/Button";
import { Link } from "react-router-dom";
import { getRandomRoomSlug } from "../utils";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 md:mt-[30px]">
      <h1 className="mt-[100px] bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text text-[35vw] font-bold leading-[120px] text-transparent md:text-[250px] md:leading-[200px]">
        404
      </h1>
      <h1 className="text-[7vw] uppercase text-cyan-100 md:text-[45px]">
        Page Not Found
      </h1>
      <div className="text-center text-base font-thin text-gray-300 md:text-2xl">
        <p>Sorry! The page you are looking for doesn't exist</p>
        <p>May be you have entered wrong room name</p>
      </div>
      <div className="absolute bottom-5 flex gap-5 md:static">
        <Link to="/">
          <ButtonWithGradient variant="outline" className="w-[170px]">
            Home
          </ButtonWithGradient>
        </Link>
        <Button
          onClick={() => {
            const roomSlug = getRandomRoomSlug();
            window.open(`/${roomSlug}`, '_blank');
          }}
          variant="primary">Create New Room</Button>
      </div>
    </div>
  );
};
export default NotFound;
