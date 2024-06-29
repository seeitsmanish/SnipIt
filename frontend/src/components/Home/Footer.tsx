import React from "react";
import heartImgSrc from "/heart.png";
import linkedinImgSrc from "/linkedin.png";
import instagramImgSrc from "/instagram.png";
import twitterImgSrc from "/twitter.png";
type FooterProps = {};

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer
      style={{ animationDelay: "2s" }}
      className="animate-slideInFromBottom text-grey absolute bottom-10 w-full opacity-0"
    >
      <div className="mx-10 flex justify-between">
        <div className="flex gap-5">
          <a href="https://www.linkedin.com/in/seeitsmanish/" target="_blank">
            <img
              src={linkedinImgSrc}
              className="h-[40px] w-[40px] cursor-pointer grayscale duration-300 hover:grayscale-0"
            />
          </a>
          <a href="https://www.instagram.com/seeitsmanish/" target="_blank">
            <img
              src={instagramImgSrc}
              className="h-[40px] w-[40px] cursor-pointer grayscale duration-300 hover:grayscale-0"
            />
          </a>
          <a href="https://x.com/seeitsmanish" target="_blank">
            <img
              src={twitterImgSrc}
              className="h-[38px] w-[39px] cursor-pointer grayscale duration-300 hover:grayscale-0"
            />
          </a>
        </div>
        <div className="flex cursor-pointer items-center gap-2 text-gray-400 grayscale duration-300 hover:text-white hover:grayscale-0">
          <span className="text-xl">Made with </span>
          <img src={heartImgSrc} className="h-[40px] w-[40px]" />
          <span className="text-xl"> by Manish</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
