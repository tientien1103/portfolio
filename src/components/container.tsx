import clsx from "clsx";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={clsx("container max-w-7xl mx-auto", {
        [`${className}`]: className,
      })}
    >
      {children}
    </div>
  );
}
