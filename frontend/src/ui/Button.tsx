import { cva } from "cva";
import React, { ButtonHTMLAttributes, ReactNode } from "react";
import cn from "../lib/cn";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";


const createRipples = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
  const btn = e.currentTarget;
  const { clientX, clientY } = e
  const { offsetTop, offsetLeft, clientWidth, clientHeight } = btn;
  const diameter = Math.max(clientWidth, clientHeight);
  const circle = document.createElement('span');

  Object.assign(circle.style, {
    width: `${diameter}px`,
    height: `${diameter}px`,
    left: `${clientX - offsetLeft - diameter / 2}px`,
    top: `${clientY - offsetTop - diameter / 2}px`,
    transform: 'scale(0)',
  });

  circle.className = 'bg-[#ffffffb3] absolute rounded-full animate-ripple';
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

const buttonVariants = cva("rounded-md active:scale-[0.9] duration-500 relative overflow-hidden", {
  variants: {
    variant: {
      primary: "bg-cyan-300 text-black hover:bg-cyan-400",
      secondary: "bg-secondary text-black hover:bg-secondary-hover",
      outline:
        "border-2 border-white bg-transparent text-white hover:bg-opacity-50",
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
});

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

const buttonWithGradientVariants = cva(
  "rounded-md active:scale-[0.9] duration-500 p-[2px] relative overflow-hidden",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-cyan-300 via-blue-300 to-green-300 text-black hover:bg-cyan-200",
        secondary: "bg-secondary text-black hover:bg-secondary-hover",
        outline:
          "bg-gradient-to-r from-cyan-300 via-blue-300 to-green-300 text-white",
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-xl",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export const ButtonWithGradient: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size,
  className,
  ...rest
}) => {
  if (variant === "outline") {
    return (
      <div
        onClick={(e) => {
          createRipples(e);
        }}
        className={cn(buttonWithGradientVariants({ variant, size, className }))}
      >
        <button
          {...rest}
          className="h-full w-full rounded-md bg-gray-950 px-2 py-3"
        >
          {children}
        </button>
      </div>
    );
  }

  return (
    <button
      {...rest}
      className={cn(buttonWithGradientVariants({ variant, size, className }))}
    >
      {children}
    </button>
  );
};
