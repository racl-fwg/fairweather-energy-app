import React from 'react';
import Link from 'next/link';

interface OutlinedButtonProps {
  text: string;
  href: string;
  size?: 'small' | 'medium' | 'large';
}

const sizeClasses = {
  small: 'py-2 px-4 text-base',
  medium: 'py-3 px-6 text-lg',
  large: 'py-4 px-8 text-xl',
};

const OutlinedButton: React.FC<OutlinedButtonProps> = ({ text, href, size = 'medium' }) => {
  return (
    <Link href={href} passHref>
      <div
        className={`inline-flex items-center justify-center font-semibold border-2 border-darkNature rounded-full text-darkNature transition-all duration-300 hover:bg-darkNature hover:text-lightNeon ${sizeClasses[size]}`}
      >
        {text}
      </div>
    </Link>
  );
};

export default OutlinedButton; // Ensure this is a default export
