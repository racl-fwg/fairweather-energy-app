"use client";
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

interface ProductsCarouselProps {
  images: string[];
}

export const ProductsCarousel: React.FC<ProductsCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;
  const [isSwiping, setIsSwiping] = useState(false);

  // Handle swipe left and right with react-swipeable
  const handlers = useSwipeable({
    onSwipedLeft: () => handleNextSlide(),
    onSwipedRight: () => handlePrevSlide(),
    onSwipeStart: () => setIsSwiping(true),
    onSwiped: () => setIsSwiping(false), // Reset swiping state after the swipe ends
    trackMouse: true,
  });

  // Function to go to the next slide
  const handleNextSlide = () => {
    setCurrentIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  };

  // Function to go to the previous slide
  const handlePrevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  return (
    <div
      {...handlers} // Apply swipeable handlers
      className="relative w-full h-full overflow-hidden rounded-lg"
    >
      {/* Image Container */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{
          transform: `translateX(${-currentIndex * 100}%)`,
          gap: isSwiping ? "20px" : "0px", // Show gap only when swiping
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
          </div>
        ))}
      </div>

      {/* Custom Navigation Arrows (Visible on larger screens only) */}
      <div className="hidden lg:flex absolute bottom-4 left-4 gap-2 z-10">
        {/* Left Arrow */}
        <button onClick={handlePrevSlide} className="bg-transparent p-2 rounded-full">
          <img
            src="/icons/Arrow_in_filled_circle_nature.png"
            alt="Previous"
            className="w-14 h-14" // 50% larger arrows for larger screens
          />
        </button>

        {/* Right Arrow */}
        <button onClick={handleNextSlide} className="bg-transparent p-2 rounded-full">
          <img
            src="/icons/Arrow_in_filled_circle_nature.png"
            alt="Next"
            className="w-14 h-14 transform rotate-180"
          />
        </button>
      </div>

      {/* Swipe indicator for mobile devices */}
      <div className="lg:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-darkNature">
        Swipe for more
      </div>
    </div>
  );
};

export default ProductsCarousel;
