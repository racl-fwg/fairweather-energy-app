import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ArrowButtonProps {
  text: string; // Text displayed on the button
  size?: 'small' | 'medium' | 'large'; // Optional size property
  href?: string; // Optional href prop for navigation
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ text, size = 'medium', href }) => {
  // Define size-based styles using TailwindCSS classes
  const sizeStyles = {
    small: 'py-1 px-3 text-sm',
    medium: 'py-2 px-5 text-base',
    large: 'py-3 px-7 text-lg',
  };

  const buttonContent = (
    <div
      className={`bg-energy text-darkNature rounded-full flex items-center justify-center space-x-2 transition-all duration-300 ease-in-out hover:bg-energy hover:text-darkNature hover:shadow-lg hover:scale-105 ${sizeStyles[size]}`}
    >
      <span>{text}</span>
      {/* Arrow icon placed next to text */}
      <Image src="/icons/Arrow_diagonal.png" alt="Arrow" width={28} height={28} />
    </div>
  );

  // Conditionally wrap in Link if href is provided
  return href ? <Link href={href}>{buttonContent}</Link> : <button>{buttonContent}</button>;
};

export default ArrowButton;
