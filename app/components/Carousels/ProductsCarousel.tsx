"use client";
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

interface ProductsCarouselProps {
  images: string[];
}

export const ProductsCarousel: React.FC<ProductsCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  // Handle swipe interactions
  const handlers = useSwipeable({
    onSwipedLeft: () => handleNextSlide(),
    onSwipedRight: () => handlePrevSlide(),
    trackMouse: true,
  });

  const handleNextSlide = () => {
    setCurrentIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  const handleMarkerClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div
      {...handlers}
      className="relative w-full h-full overflow-hidden rounded-2xl"
    >
      {/* Image Container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(${-currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0"
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows (Visible on large screens) */}
      <div className="hidden lg:flex absolute bottom-4 left-4 gap-2 z-10">
        {/* Previous Arrow */}
        <button
          onClick={handlePrevSlide}
          aria-label="Previous slide"
          className="p-2 rounded-full hover:bg-opacity-50 transition duration-300"
        >
          <img
            src="/icons/Arrow_in_filled_circle_nature.png"
            alt="Previous Slide"
            className="w-14 h-14 transform rotate-180"
          />
        </button>

        {/* Next Arrow */}
        <button
          onClick={handleNextSlide}
          aria-label="Next slide"
          className="p-2 rounded-full hover:bg-opacity-50 transition duration-300"
        >
          <img
            src="/icons/Arrow_in_filled_circle_nature.png"
            alt="Next Slide"
            className="w-14 h-14"
          />
        </button>
      </div>

      {/* Navigation Markers (Visible on smaller screens) */}
      <div className="lg:hidden absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleMarkerClick(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-energy" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ProductsCarousel;
