import React from "react";
import heartImgSrc from "/heart.png";
import linkedinImgSrc from "/linkedin.png";
import instagramImgSrc from "/instagram.png";
import twitterImgSrc from "/twitter.png";
type FooterProps = {};

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer
      style={{ animationDelay: "1.5s" }}
      className="text-grey absolute bottom-10 w-full animate-slideInFromBottom opacity-0"
    >
      <div className="flex flex-col-reverse items-center gap-5 md:mx-10 md:flex-row md:justify-between">
        <div className="flex gap-5">
          <a href="https://www.linkedin.com/in/seeitsmanish/" target="_blank">
            <img
              src={linkedinImgSrc}
              className="size-[30px] cursor-pointer grayscale duration-300 hover:grayscale-0 md:size-[40px]"
            />
          </a>
          <a href="https://www.instagram.com/seeitsmanish/" target="_blank">
            <img
              src={instagramImgSrc}
              className="size-[30px] cursor-pointer grayscale duration-300 hover:grayscale-0 md:size-[40px]"
            />
          </a>
          <a href="https://x.com/seeitsmanish" target="_blank">
            <img
              src={twitterImgSrc}
              className="size-[30px] cursor-pointer grayscale duration-300 hover:grayscale-0 md:size-[40px]"
            />
          </a>
        </div>
        <div className="flex cursor-pointer items-center gap-2 text-gray-400 grayscale duration-300 hover:text-white hover:grayscale-0">
          <span className="md:text-xl">Made with </span>
          <img src={heartImgSrc} className="size-[20px] md:size-[40px]" />
          <span className="text-xl"> by Manish</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
