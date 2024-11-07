import React from "react";

interface ContainerWrapperProps {
  children: React.ReactNode;
  container?: boolean; // Optional prop to apply Tailwind's `container` class
  className?: string; // Optional prop for additional classes
  center?: boolean; // New prop to center content horizontally and vertically
}

export default function ContainerWrapper({
  children,
  container = false, // Default is false
  className = "",
  center = false, // Default is false
}: ContainerWrapperProps) {
  return (
    <div
      className={`
        ${container ? "container mx-auto" : "px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl"} 
        ${center ? "flex justify-center items-center text-center" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
