import React from "react";
import heartImgSrc from "/heart.png";
import linkedinImgSrc from "/linkedin.png";
import instagramImgSrc from "/instagram.png";
import twitterImgSrc from "/twitter.png";
type FooterProps = {};

const Footer: React.FC<FooterProps> = ({ }) => {
  return (
    <footer
      style={{ animationDelay: "1.5s" }}
      className="text-grey w-full animate-slideInFromBottom opacity-0 mb-5 md:mb-10"
    >
      <div className="flex flex-col-reverse items-center gap-5 md:mx-10 md:flex-row md:justify-between">
        <div className="flex gap-5">
          <a href="https://www.linkedin.com/in/seeitsmanish/" target="_blank">
            <img
              src={linkedinImgSrc}
              className="size-[30px] cursor-pointer duration-300 hover:scale-[1.2] md:size-[40px]"
            />
          </a>
          <a href="https://www.instagram.com/seeitsmanish/" target="_blank">
            <img
              src={instagramImgSrc}
              className="size-[30px] cursor-pointer duration-300 hover:scale-[1.3] md:size-[40px]"
            />
          </a>
          <a href="https://x.com/seeitsmanish" target="_blank">
            <img
              src={twitterImgSrc}
              className="size-[30px] cursor-pointer duration-300 hover:scale-[1.2] md:size-[40px]"
            />
          </a>
        </div>
        <div className="flex cursor-pointer items-center gap-2 text-gray-400 duration-300 hover:text-white">
          <span className="md:text-xl">Made with </span>
          <img
            src={heartImgSrc}
            className="size-[20px] duration-300 hover:scale-[1.2] md:size-[40px]"
          />
          <span className="text-xl"> by Manish</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
