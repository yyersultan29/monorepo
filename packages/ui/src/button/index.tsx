"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={() => alert(`Hello from your ${appName} app!`)}
      style={{
        background: "green",
        padding: "10px",
        color: "white",
        borderRadius: "10px",
      }}
    >
      {children}
    </button>
  );
};
