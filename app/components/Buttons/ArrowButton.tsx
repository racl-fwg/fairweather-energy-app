import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ArrowButtonProps {
  text?: string; // Optional text property
  size?: 'small' | 'medium' | 'large'; // Optional size property
  href?: string; // Optional href prop for navigation
  openInNewTab?: boolean; // New prop to open the link in a new tab
  children?: React.ReactNode; // Optional: Children will be passed as the button content
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ text, children, size = 'medium', href, openInNewTab = false }) => {
  // Define size-based styles using TailwindCSS classes
  const sizeStyles = {
    small: 'py-1 px-3 text-sm',
    medium: 'py-2 px-5 text-base',
    large: 'py-3 px-7 text-lg',
  };

  const buttonContent = (
    <div
      className={`inline-flex bg-energy text-darkNature rounded-full items-center justify-center space-x-2 transition-all duration-300 ease-in-out hover:bg-energy hover:text-darkNature hover:shadow-lg hover:scale-105 ${sizeStyles[size]}`}
    >
      <span>{text || children}</span> {/* Use text if provided, fallback to children */}
      {/* Arrow icon placed next to text */}
      <Image src="/icons/Arrow_diagonal.png" alt="Arrow" width={28} height={28} />
    </div>
  );

  // Conditionally wrap in Link if href is provided, and handle openInNewTab
  return href ? (
    <Link href={href} target={openInNewTab ? '_blank' : '_self'} rel={openInNewTab ? 'noopener noreferrer' : undefined}>
      {buttonContent}
    </Link>
  ) : (
    <button>{buttonContent}</button>
  );
};

export default ArrowButton;
