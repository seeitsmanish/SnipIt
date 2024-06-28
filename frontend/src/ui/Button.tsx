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
        "border-2 border-outline bg-outline text-black hover:bg-outline-hover",
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

const Button: React.FC<ButtonProps> = ({
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

export default Button;
