import React from "react";
import { Button } from "../ui/Button";
import { Link } from "react-router-dom";
import { getRandomRoomSlug } from "../utils";

const NotFound: React.FC = () => {
  return (
    <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-5">
      <h1 className="bg-gradient-to-r from-purple-200 to-purple-400 bg-clip-text text-[35vw] font-bold leading-[120px] text-transparent md:text-[250px] md:leading-[200px]">
        404
      </h1>
      <h1 className="text-[7vw] uppercase text-gray-300 md:text-[45px]">
        Page Not Found
      </h1>
      <div className="text-center font-sans text-base font-thin text-gray-300 md:text-2xl">
        <p>Sorry! The page you are looking for doesn't exist</p>
        <p>May be you have entered wrong room name</p>
      </div>
      <div className="bottom-5 flex flex-col gap-5 md:static md:flex-row">
        <Link to="/">
          <Button variant="ghost" className="px-20 py-3">
            Home
          </Button>
        </Link>
        <Button
          onClick={() => {
            const roomSlug = getRandomRoomSlug();
            window.open(`/${roomSlug}`, "_blank");
          }}
          className="px-5 py-3"
          variant="primary"
        >
          Create New Room
        </Button>
      </div>
    </div>
  );
};
export default NotFound;
