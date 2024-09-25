import { cva } from "cva";
import React, { ButtonHTMLAttributes, ReactNode } from "react";
import cn from "../lib/cn";

type ButtonVariant = "primary" | "secondary" | "outline" | "light" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const createRipples = (
  e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>,
) => {
  const btn = e.currentTarget;
  const btnTextColor = window.getComputedStyle(btn).color;
  const { clientX, clientY } = e;
  const { offsetTop, offsetLeft, clientWidth, clientHeight } = btn;
  const diameter = Math.max(clientWidth, clientHeight);
  const circle = document.createElement("span");

  Object.assign(circle.style, {
    width: `${diameter}px`,
    height: `${diameter}px`,
    left: `${clientX - offsetLeft - diameter / 2}px`,
    top: `${clientY - offsetTop - diameter / 2}px`,
    transform: "scale(0)",
    backgroundColor: btnTextColor,
    opacity: "0.5",
  });

  circle.className = " absolute rounded-full animate-ripple";
  btn.appendChild(circle);
  setTimeout(() => circle.remove(), 700);
};
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

const buttonVariants = cva(
  "rounded-xl active:scale-[0.9] duration-500 relative overflow-hidden",
  {
    variants: {
      variant: {
        primary: "bg-purple-400 p-3 font-semibold hover:bg-purple-500",
        secondary: "bg-secondary text-black hover:bg-secondary-hover",
        outline:
          "border-2 border-white bg-transparent text-white hover:bg-opacity-50",
        light:
          "bg-purple-400 text-purple-400 bg-opacity-20 hover:bg-opacity-30 hover:text-purple-300 duration-300 border-none",
        ghost:
          "bg-transparent text-purple-400 hover:bg-purple-400 hover:text-white hover:bg-opacity-20",
      },
      size: {
        sm: "text-sm px-2 py-1",
        md: "text-base px-4 py-2",
        lg: "text-xl px-9 py-3",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size,
  className,
  onClick,
  ...rest
}) => {
  return (
    <button
      {...rest}
      onClick={(e) => {
        createRipples(e);
        if (onClick) onClick(e);
      }}
      className={cn(buttonVariants({ variant, size, className }))}
    >
      {children}
    </button>
  );
};
