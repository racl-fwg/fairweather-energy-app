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
  groupImage1?: string;
  groupImage2?: string;
  background?: string;
  reverseLayout?: boolean; // New prop to control layout direction
}

export const ProductCarouselSectionProp = ({
  title,
  description1,
  description2,
  offerButtonClass = "",
  carouselImages,
  background,
  reverseLayout = false, // Default is false (image on the right)
}: Props): JSX.Element => {
  return (
    <div className="max-w-[1600px] mx-12 px-4 lg:px-6 py-6 bg-white rounded-2xl shadow-lg flex flex-col lg:flex-row lg:h-[600px] my-12">
      {/* Conditional layout: reverseLayout controls the order of elements */}
      <div
        className={`w-full lg:w-[40%] flex flex-col justify-between space-y-4 h-full ${
          reverseLayout ? "lg:order-2 lg:pl-[2%]" : "lg:pr-[2%]"
        }`}
      >
        {/* Top: Title and Descriptions */}
        <div className="flex-grow">
          <h2 className="text-3xl lg:text-4xl font-semibold text-nature mb-4">
            {title}
          </h2>

          <p className="text-sm lg:text-sm text-darkNature mb-4">{description1}</p>
          <p className="text-sm lg:text-sm text-darkNature mb-8">{description2}</p>

          {/* Buttons for Technical Information */}
          <div className="flex flex-col sm:flex-row sm:gap-4 gap-2 justify-center sm:justify-start mb-4">
            <TechnicalButton text="Datablad" size="small" href="/datablad" />
            <TechnicalButton text="Produktinformation" size="small" href="/product-info" />
          </div>
        </div>

        {/* Bottom: Quote Button at the bottom for larger screens */}
        <div className="hidden md:block mt-auto">
          <QuoteButton invertColors />
        </div>
      </div>

      {/* Right Side: Carousel with reserved space for Quote Button on smaller screens */}
      <div className="w-full lg:w-[60%] p-6 h-full">
        <ProductsCarousel images={carouselImages} />

        {/* Quote Button for smaller screens (moved below the carousel) */}
        <div className="mt-8 md:hidden flex justify-center">
          <QuoteButton invertColors />
        </div>
      </div>
    </div>
  );
};

export default ProductCarouselSectionProp;
