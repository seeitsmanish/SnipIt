import React from "react";
import { ButtonWithGradient } from "../../ui/Button";
import CoffeeMug from "/coffee-cup.png";
import cn from "../../lib/cn";
import { getRandomRoomSlug } from "../../utils";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { useRoom } from "../../context/RoomContext";
import { useUsers } from "../../context/UsersContext";
import { UserCircle2Icon } from "lucide-react";
type NavProps = {};

const Nav: React.FC<NavProps> = () => {
  const isHome = window.location.pathname === "/";
  const { isRoom } = useRoom();
  const { users } = useUsers();
  return (
    <nav
      style={{ animationDelay: "1.5s" }}
      className={cn(
        "flex h-20 w-full items-center justify-between opacity-0",
        isHome ? "animate-slideInFromTop" : "opacity-100",
        isRoom && "bg-gray-900 shadow-lg"
      )}
    >
      <div className="mx-2 flex w-full items-center justify-between md:mx-10">
        <a href="/" className="cursor-pointer">
          <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-[10vw] text-transparent md:text-[50px]">
            SnipIt.
          </span>
        </a>

        <div className="flex items-center gap-3">
          {
            isRoom ?
              <div className="flex items-center gap-3 md:gap-10">
                <div className=" flex items-center gap-1 text-white h-fit w-fit">
                  <div className="relative">
                    <UserCircle2Icon className="size-8 md:size-10 font" strokeWidth='1' />
                    <div className="size-2 md:size-3 absolute right-1 bottom-0 bg-green-600 rounded-full" />
                  </div>
                  <span className="text-sm md:text-base">{users}</span>
                </div>
                <LanguageSelector />
              </div>
              :
              (
                <ButtonWithGradient
                  variant="primary"
                  className="hidden md:block md:h-[50px] font-bold px-1"
                  size="sm"
                  onClick={() => {
                    const roomSlug = getRandomRoomSlug();
                    window.open(`/${roomSlug}`, '_blank');
                  }}
                >
                  Create New Room
                </ButtonWithGradient>
              )
          }
          <a href="https://buymeacoffee.com/seeitsmanish" target="_blank">
            <ButtonWithGradient
              variant="outline"
              size="sm"
              className={cn('h-[50px]',
                isRoom && 'hidden md:block'
              )}
            >
              <div className="flex h-[2vh] items-center gap-2 md:h-full">
                <span>Buy Me Coffee</span>
                <img
                  src={CoffeeMug}
                  className="hidden h-[20px] w-[20px] md:block"
                  alt="Coffee_Pic"
                />
              </div>
            </ButtonWithGradient>
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
