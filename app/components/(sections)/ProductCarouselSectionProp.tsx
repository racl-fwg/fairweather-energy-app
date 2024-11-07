import React from "react";
import ProductsCarousel from "../Carousels/ProductsCarousel";
import TechnicalButton from "../Buttons/TechnicalButton";
import QuoteButton from "../Buttons/QuoteButton";
import ContainerWrapper from "../Wrapper/ContainerWrapper";
import { motion } from "framer-motion"; // Import for animation
import { textFadeIn } from "@/components/utils/animations"; // Import animations

interface Props {
  title: string;
  description1: string;
  description2: string;
  carouselImages: string[];
  offerButtonClass?: string;
  reverseLayout?: boolean; // New prop to control layout direction
}

const ProductCarouselSectionProp: React.FC<Props> = ({
  title,
  description1,
  description2,
  offerButtonClass = "",
  carouselImages,
  reverseLayout = false, // Default is false (image on the right)
}) => {
  return (
    <ContainerWrapper container>
      <div className="py-12 px-6 lg:px-12 bg-white rounded-2xl shadow-lg flex flex-col lg:flex-row lg:h-auto my-12">
        {/* Layout Wrapper */}
        <motion.div
          className={`w-full lg:w-[50%] flex flex-col justify-between space-y-4 h-full ${
            reverseLayout ? "lg:order-2 lg:pl-6" : "lg:pr-6"
          }`}
          {...textFadeIn}
        >
          {/* Title and Descriptions */}
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

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row sm:gap-4 gap-2 justify-start mb-4 mt-6">
              <TechnicalButton text="Datablad" size="small" href="/datablad" />
              <TechnicalButton
                text="Produktinformation"
                size="small"
                href="/product-info"
              />
            </div>

            {/* Quote Button */}
            <div className="hidden lg:flex justify-start mt-6">
              <QuoteButton invertColors />
            </div>
          </div>
        </motion.div>

        {/* Carousel Section */}
        <motion.div
          className="w-full lg:w-[50%] h-auto relative"
          {...textFadeIn}
        >
          <ProductsCarousel images={carouselImages} />
        </motion.div>
      </div>
    </ContainerWrapper>
  );
};

export default ProductCarouselSectionProp;
