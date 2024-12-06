import React from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({ children, className }) => {
  return (
    <span
      className={cn(
        "inline-block text-transparent bg-clip-text",
        "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500",
        "animate-text-gradient bg-[length:200%_auto]",
        className
      )}
    >
      {children}
    </span>
  );
};

export default GradientText;
