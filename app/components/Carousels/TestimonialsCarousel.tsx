"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { textFadeIn } from "@/components/utils/animations";
import ContainerWrapper from "../Wrapper/ContainerWrapper";

// Define the prop types for each testimonial
type Testimonial = {
  name: string; // Customer name
  testimonial: string; // Testimonial content
};

// Define prop types for the TestimonialsCarousel component
type TestimonialsCarouselProps = {
  testimonials: Testimonial[]; // Array of testimonials
  title: string; // Section title
  description: string; // Section description
};

const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({
  testimonials,
  title,
  description,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4); // Default to showing 4 items on large screens

  // State to handle hover effect for navigation buttons
  const [prevHover, setPrevHover] = useState(false);
  const [nextHover, setNextHover] = useState(false);

  const lastIndex = testimonials.length;

  // Update the visible count based on the viewport size
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1); // 1 item on small screens
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2); // 2 items on medium screens
      } else {
        setVisibleCount(4); // 4 items on large screens
      }
    };

    updateVisibleCount(); // Call on component mount
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % lastIndex);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? lastIndex - 1 : prevIndex - 1
    );
  };

  // Determine the visible testimonials based on the current index and visible count
  const visibleTestimonials = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleTestimonials.push(testimonials[(currentIndex + i) % lastIndex]);
  }

  return (
    <section className="py-16 bg-lightNeon">
      <ContainerWrapper>
        {/* Horizontal Line */}
        <motion.hr
          className="border-t-1 border-darkNature mb-16"
          {...textFadeIn}
        />

        {/* Header Section */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" {...textFadeIn}>
          {/* Title */}
          <h2 className="text-darkNature text-4xl font-bold text-center md:text-left">
            {title}
          </h2>
          {/* Description */}
          <p className="text-darkNature text-base md:text-lg xl:text-xl text-center md:text-right">
            {description}
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Testimonial Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            {...textFadeIn}
          >
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 text-center relative"
              >
                {/* Styled Quotation Marks */}
                <span className="absolute top-2 left-2 text-6xl text-darkNature font-bold opacity-80">
                  &ldquo;
                </span>
                <h3 className="text-darkNature text-xl font-semibold">
                  {testimonial.name}
                </h3>
                <p className="text-darkNature text-base mt-4 italic">
                  &ldquo;{testimonial.testimonial}&rdquo;
                </p>
              </div>
            ))}
          </motion.div>

          {/* Carousel Navigation */}
          <div className="flex justify-end mt-8">
            <button
              className="flex items-center justify-center p-2 rounded-full mx-2 transition duration-200"
              onClick={prevSlide}
              onMouseEnter={() => setPrevHover(true)}
              onMouseLeave={() => setPrevHover(false)}
            >
              <span className="sr-only">Föregående</span>
              <Image
                src={
                  prevHover
                    ? "/icons/Arrow_in_filled_circle_nature.png"
                    : "/icons/Arrow_in_circle_green.png"
                }
                alt="Föregående"
                width={42}
                height={42}
                className="transform rotate-180"
              />
            </button>
            <button
              className="flex items-center justify-center p-2 rounded-full mx-2 transition duration-200"
              onClick={nextSlide}
              onMouseEnter={() => setNextHover(true)}
              onMouseLeave={() => setNextHover(false)}
            >
              <span className="sr-only">Nästa</span>
              <Image
                src={
                  nextHover
                    ? "/icons/Arrow_in_filled_circle_nature.png"
                    : "/icons/Arrow_in_circle_green.png"
                }
                alt="Nästa"
                width={42}
                height={42}
              />
            </button>
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
};

export default TestimonialsCarousel;
