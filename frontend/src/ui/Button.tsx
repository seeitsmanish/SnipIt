import { cva } from "cva";
import React, { ButtonHTMLAttributes, ReactNode } from "react";
import cn from "../lib/cn";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

const buttonVariants = cva("rounded-md active:scale-[0.9] duration-500", {
  variants: {
    variant: {
      primary: "bg-cyan-300 text-black hover:bg-cyan-200",
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
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={cn(buttonVariants({ variant, size, className }))}
    >
      {children}
    </button>
  );
};

const buttonWithGradientVariants = cva(
  "rounded-md active:scale-[0.9] duration-500 p-[2px]",
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
