import React from "react";
import { Button } from "../../ui/Button";
import CoffeeMug from "/coffee-cup.png";
import cn from "../../lib/cn";
import { getRandomRoomSlug } from "../../utils";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { useRoom } from "../../context/RoomContext";
import { useUsers } from "../../context/UsersContext";
import { UserCircle2Icon } from "lucide-react";
type NavProps = {};

const Nav: React.FC<NavProps> = () => {
  const { isRoom } = useRoom();
  const { users } = useUsers();
  return (
    <nav
      className={cn(
        `mt-5 flex w-full items-center justify-between rounded-xl border border-gray-700 p-3 md:mx-auto md:mt-6 md:p-5 lg:mt-10`,
        isRoom &&
          "mt-2 h-20 rounded-bl-none rounded-br-none border-b-0 p-3 md:mt-1 lg:mt-1",
      )}
    >
      <div className="logo">
        <a href="/">
          <span className="text-3xl text-purple-400">SnipIt</span>
        </a>
      </div>

      {isRoom ? (
        <div className="flex items-center gap-3 md:gap-10">
          <div className="flex h-fit w-fit items-center gap-1 text-white">
            <div className="relative">
              <UserCircle2Icon
                className="font size-8 text-purple-400 md:size-10"
                strokeWidth="1"
              />
              <div className="absolute bottom-0 right-1 size-2 rounded-full bg-green-600 md:size-3" />
            </div>
            <span className="text-sm md:text-base">{users}</span>
          </div>
          <LanguageSelector />
        </div>
      ) : (
        <div className="flex items-center gap-5">
          <Button
            className="hidden bg-purple-400 p-3 font-semibold hover:bg-purple-500 md:block"
            onClick={() => {
              const roomSlug = getRandomRoomSlug();
              window.open(`/${roomSlug}`, "_blank");
            }}
          >
            Code Now
          </Button>

          <a href="https://buymeacoffee.com/seeitsmanish" target="_blank">
            <Button
              variant="light"
              className={cn("p-3 font-semibold", isRoom && "hidden md:block")}
            >
              <div className="flex items-center gap-2">
                <span>Buy Me Coffee</span>
                <img
                  src={CoffeeMug}
                  className="hidden h-[20px] w-[20px] md:block"
                  alt="Coffee_Pic"
                />
              </div>
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
};
export default Nav;
