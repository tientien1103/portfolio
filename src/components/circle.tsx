import clsx from "clsx";
import React from "react";

interface CircleProps {
  className?: string;
  color?: "pink" | "white" | "blue";
}

function Circle({ className, color = "pink" }: CircleProps) {
  return (
    <div
      className={clsx("", {
        [`${className}`]: !!className,
      })}
    >
      <div
        className={clsx("w-1 rounded-full border border-primary p-0.5", {
          "border-white": color === "white",
          "border-second": color === "blue",
        })}
      />
    </div>
  );
}

export default Circle;
