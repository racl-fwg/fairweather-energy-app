// app/components/ModalWrapper/ModalWrapper.tsx
import React from 'react';
import ReactDOM from 'react-dom';

interface ModalWrapperProps {
  children: React.ReactNode;
  onClose: () => void; // Add onClose prop type definition
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({ children, onClose }) => {
  if (typeof document === 'undefined') return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm transition-all duration-300"
      onClick={onClose} // Close the modal if clicked outside the content
    >
      <div
        className="relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing if clicking inside the modal
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default ModalWrapper;
