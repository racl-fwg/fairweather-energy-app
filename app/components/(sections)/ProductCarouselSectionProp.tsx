import React from "react";
import ProductsCarousel from "../Carousels/ProductsCarousel";
import TechnicalButton from "../Buttons/TechnicalButton";
import QuoteButton from "../Buttons/QuoteButton";

interface Props {
  title: string;
  description1: string;
  description2: string;
  carouselImages: string[];
  offerButtonClass?: string;
  reverseLayout?: boolean; // New prop to control layout direction
}

export const ProductCarouselSectionProp = ({
  title,
  description1,
  description2,
  offerButtonClass = "",
  carouselImages,
  reverseLayout = false, // Default is false (image on the right)
}: Props): JSX.Element => {
  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 py-6 bg-white rounded-2xl shadow-lg flex flex-col lg:flex-row lg:h-auto my-12 sm:mx-4 lg:mx-12">
      {/* Conditional layout: reverseLayout controls the order of elements */}
      <div
        className={`w-full lg:w-[40%] flex flex-col justify-between space-y-4 h-full ${
          reverseLayout ? "lg:order-2 lg:pl-[2%]" : "lg:pr-[2%]"
        }`}
      >
        {/* Top: Title and Descriptions */}
        <div className="flex-grow">
          <h2 className="text-3xl lg:text-4xl font-semibold text-nature mb-6">
            {title}
          </h2>

          <p className="text-sm sm:text-base text-darkNature mb-8">
            {description1}
          </p>
          <p className="text-sm sm:text-base text-darkNature mb-4">
            {description2}
          </p>

          {/* Buttons for Technical Information */}
          <div className="flex flex-col sm:flex-row sm:gap-4 gap-2 justify-start mb-4 mt-6">
            <TechnicalButton text="Datablad" size="small" href="/datablad" />
            <TechnicalButton
              text="Produktinformation"
              size="small"
              href="/product-info"
            />
            {/* Add Quote Button in the row for mid-size breakpoints */}
            <div className="hidden lg:hidden md:flex md:w-auto md:flex-row items-center">
              <QuoteButton invertColors /> {/* Ensuring it appears in a row */}
            </div>
          </div>

          {/* Quote Button aligned with text and datablad button for larger viewports */}
          <div className="hidden lg:flex justify-start mt-6">
            <QuoteButton invertColors /> {/* Ensuring left alignment */}
          </div>
        </div>
      </div>

      {/* Right Side: Carousel */}
      <div className="w-full lg:w-[60%] h-auto relative">
        <ProductsCarousel images={carouselImages} />

        {/* Quote Button for smaller screens in the top/down layout */}
        <div className="mt-8 flex lg:hidden md:hidden justify-center mb-4">
          <QuoteButton invertColors />
        </div>
      </div>
    </div>
  );
};

export default ProductCarouselSectionProp;
