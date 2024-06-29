import React from "react";
import { Button, ButtonWithGradient } from "../../ui/Button";
import CoffeeMug from "/coffee-cup.png";
type NavProps = {};

const Nav: React.FC<NavProps> = () => {
  return (
    <nav
      style={{ animationDelay: "2s" }}
      className="flex h-20 w-full animate-slideInFromTop items-center justify-between bg-transparent opacity-0"
    >
      <a href="/" className="cursor-pointer">
        <span className="ml-10 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-[50px] text-transparent">
          SnipIt.
        </span>
      </a>

      <div className="mr-10 flex gap-3">
        <Button className="font-medium" size="sm">
          Create New Room
        </Button>
        <a href="https://buymeacoffee.com/seeitsmanish" target="_blank">
          <ButtonWithGradient variant="outline" size="sm">
            <div className="flex h-full w-full items-center gap-2">
              <span>Buy Me Coffee</span>
              <img
                src={CoffeeMug}
                className="h-[20px] w-[20px]"
                alt="Coffee_Pic"
              ></img>
            </div>
          </ButtonWithGradient>
        </a>
      </div>
    </nav>
  );
};
export default Nav;
