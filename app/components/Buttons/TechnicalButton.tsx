import React from 'react';
import Link from 'next/link';

interface TechnicalButtonProps {
  text: string; // Text displayed on the button
  size?: 'small' | 'medium' | 'large'; // Optional size property
  href: string; // The href prop for navigation
}

const sizeStyles = {
  small: 'py-1 px-3 text-sm',
  medium: 'py-2 px-5 text-base',
  large: 'py-3 px-7 text-lg',
};

const TechnicalButton: React.FC<TechnicalButtonProps> = ({ text, size = 'medium', href }) => {
  if (!href) {
    console.error('Error: href prop is missing in TechnicalButton');
    return null; // Don't render anything if href is missing
  }

  return (
    <Link href={href}>
      <div
        className={`bg-black text-white rounded-full inline-flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-white hover:text-black border border-black hover:scale-105 ${sizeStyles[size]}`}
      >
        <span>{text}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="ml-2 w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L19.5 10.5M19.5 10.5L13.5 16.5M19.5 10.5H4.5"
          />
        </svg>
      </div>
    </Link>
  );
};

export default TechnicalButton;
