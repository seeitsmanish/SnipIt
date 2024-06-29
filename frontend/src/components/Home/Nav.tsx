import React from "react";
import { Button, ButtonWithGradient } from "../../ui/Button";
import CoffeeMug from "/coffee-cup.png";
type NavProps = {};

const Nav: React.FC<NavProps> = () => {
  return (
    <nav
      style={{ animationDelay: "1.5s" }}
      className="flex h-20 w-full animate-slideInFromTop items-center justify-between bg-transparent opacity-0"
    >
      <div className="mx-2 flex w-full items-center justify-between md:mx-10">
        <a href="/" className="cursor-pointer">
          <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-[10vw] text-transparent md:text-[50px]">
            SnipIt.
          </span>
        </a>

        <div className="flex gap-3">
          <Button className="hidden font-medium md:block" size="sm">
            Create New Room
          </Button>
          <a href="https://buymeacoffee.com/seeitsmanish" target="_blank">
            <ButtonWithGradient variant="outline" size="sm">
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
