import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface DropdownWrapperProps {
  isOpen: boolean;
  children: React.ReactNode;
  onAnimationComplete?: () => void;
}

const DropdownWrapper: React.FC<DropdownWrapperProps> = ({ isOpen, children, onAnimationComplete }) => {
  const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({});
  const [isAnimating, setIsAnimating] = useState(false);
  const [visible, setVisible] = useState(isOpen);

  useEffect(() => {
    const headerElement = document.querySelector('header');
    if (headerElement) {
      const headerRect = headerElement.getBoundingClientRect();
      setDropdownStyle({
        position: 'fixed',
        top: `${headerRect.bottom}px`,
        left: `${headerRect.left}px`,
        width: `${headerRect.width}px`,
        zIndex: 50,
        overflow: 'hidden',
        transition: 'max-height 0.5s ease, opacity 0.5s ease',
        borderRadius: isOpen ? '0 0 24px 24px' : '0 0 0 0',
        maxHeight: isOpen ? '400px' : '0',
        opacity: isOpen ? 1 : 0,
      });
      setIsAnimating(true);
      setVisible(true);
    }
  }, [isOpen]);

  if (!visible && !isAnimating) return null;

  return ReactDOM.createPortal(
    <div
      className="bg-lightNeon shadow-lg transition-all duration-500 ease-in-out"
      style={dropdownStyle}
      onTransitionEnd={() => {
        setIsAnimating(false);
        if (!isOpen) setVisible(false); // Hide the dropdown completely after the animation
        if (onAnimationComplete) onAnimationComplete(); // Callback to signal the end of animation
      }}
    >
      {children}
    </div>,
    document.body
  );
};

export default DropdownWrapper;
