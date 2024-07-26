import React from "react";
import { Button, ButtonWithGradient } from "../../ui/Button";
import CoffeeMug from "/coffee-cup.png";
import cn from "../../lib/cn";
import { getRandomRoomSlug } from "../../utils";
type NavProps = {};

const Nav: React.FC<NavProps> = () => {
  const isHome = window.location.pathname === "/";
  const isRoom = !isHome && window.location.pathname !== "/not-found";
  return (
    <nav
      style={{ animationDelay: "1.5s" }}
      className={cn(
        "flex h-20 w-full items-center justify-between bg-gray-900 opacity-0 shadow-lg",
        isHome ? "animate-slideInFromTop absolute top-0" : "opacity-100",
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
            !isRoom && (
              <Button
                className="hidden font-medium md:block md:h-[50px]"
                size="sm"
                onClick={() => {
                  const roomSlug = getRandomRoomSlug();
                  window.open(`/${roomSlug}`, '_blank');
                }}
              >
                Create New Room
              </Button>
            )
          }
          <a href="https://buymeacoffee.com/seeitsmanish" target="_blank">
            <ButtonWithGradient
              variant="outline"
              size="sm"
              className="h-[50px]"
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
