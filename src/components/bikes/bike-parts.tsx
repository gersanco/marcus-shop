"use client";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import BikeConfigurationOverview from "./bike-configuration-overview";
import { Product } from "@/schemas/product-schema";
import useBikeConfiguration from "@/hooks/use-bike-configuration";
import BikeConfigurationOption from "./bike-configuration-option";

type Props = {
  parts: Product[];
};
export default function BikeParts({ parts }: Props) {
  const {
    currentStep,
    handleNext,
    handlePrevious,
    isLastStep,
    currentPart,
    availableParts,
    handlePartSelection,
    selectedParts,
  } = useBikeConfiguration(parts);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Build Your Custom Bike
      </h1>

      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title flex items-center mb-4">
            {currentPart.icon}
            <span className="ml-2">
              Step {currentStep + 1}: Choose {currentPart.name}
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {availableParts.map((part) => (
              <BikeConfigurationOption
                part={part}
                key={part.uid}
                handlePartSelection={handlePartSelection}
              />
            ))}
          </div>

          <div className="flex justify-between items-center mt-6">
            <button
              className="btn btn-outline"
              onClick={handlePrevious}
              disabled={currentStep === 0}
            >
              <FaChevronLeft className="w-4 h-4 mr-2" /> Previous
            </button>
            <button
              className="btn btn-primary"
              onClick={handleNext}
              disabled={isLastStep}
            >
              {isLastStep ? "Finish" : "Next"}{" "}
              <FaChevronRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>

      <BikeConfigurationOverview
        isLastStep={isLastStep}
        selectedParts={selectedParts}
        bikeParts={parts}
      />
    </div>
  );
}
