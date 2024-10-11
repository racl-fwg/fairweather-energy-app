"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { headerTextFadeIn, defaultTextFadeIn } from '@/components/utils/animations';

// Define the prop types for each testimonial
type Testimonial = {
  name: string;         // Customer name
  testimonial: string;  // Testimonial content
};

// Define prop types for the TestimonialsCarousel component
type TestimonialsCarouselProps = {
  testimonials: Testimonial[]; // Array of testimonials
  title: string;               // Section title
  description: string;         // Section description
};

const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({ testimonials, title, description }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Calculate the number of testimonials
  const lastIndex = testimonials.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % lastIndex);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? lastIndex - 1 : prevIndex - 1
    );
  };

  // Determine the 4 testimonials to display based on the current index
  const visibleTestimonials = [
    testimonials[currentIndex % lastIndex],
    testimonials[(currentIndex + 1) % lastIndex],
    testimonials[(currentIndex + 2) % lastIndex],
    testimonials[(currentIndex + 3) % lastIndex],
  ];

  return (
    <section className="py-16 bg-lightNeon">
      <div className="container mx-auto px-4">
        {/* Horizontal Line */}
        <motion.hr className="border-t-1 border-darkNature mb-16" {...defaultTextFadeIn} />

        {/* Header Section - 2 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Title */}
          <motion.div {...headerTextFadeIn}>
            <h2 className="text-nature text-4xl font-bold">{title}</h2>
          </motion.div>
          {/* Description */}
          <motion.div {...defaultTextFadeIn}>
            <p className="text-darkNature text-base">{description}</p>
          </motion.div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Map through visible testimonials */}
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-center relative"
              >
                {/* Styled Quotation Marks */}
                <span className="absolute top-2 left-2 text-6xl text-nature font-bold opacity-80">
                  &ldquo;
                </span>
                <h3 className="text-nature text-xl font-semibold">
                  {testimonial.name}
                </h3>
                <p className="text-darkNature text-base mt-4 italic">
                  &ldquo;{testimonial.testimonial}&rdquo;
                </p>
              </div>
            ))}
          </div>

          {/* Carousel Navigation */}
          <div className="flex justify-end mt-8">
            <button
              className="flex items-center justify-center p-2 rounded-full mx-2 transition duration-200"
              onClick={prevSlide}
            >
              <span className="sr-only">Föregående</span>
              <Image
                src="/icons/Arrow_in_circle_green.png"
                alt="Föregående"
                width={36}
                height={36}
                className="transform rotate-180"
              />
            </button>
            <button
              className="flex items-center justify-center p-2 rounded-full mx-2 transition duration-200"
              onClick={nextSlide}
            >
              <span className="sr-only">Nästa</span>
              <Image
                src="/icons/Arrow_in_circle_green.png"
                alt="Nästa"
                width={36}
                height={36}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
