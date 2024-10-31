import React, { useState } from "react";
import { FaBicycle, FaCog, FaPalette } from "react-icons/fa";
import { PartType, Product } from "../schemas/product-schema";

type Part = {
  id: string;
  name: string;
  icon: React.ReactNode;
};

const bikeParts: Part[] = [
  {
    id: "frameType",
    name: "Frame Type",
    icon: <FaBicycle className="w-6 h-6" />,
  },
  {
    id: "frameFinish",
    name: "Frame Finish",
    icon: <FaPalette className="w-6 h-6" />,
  },
  {
    id: "wheel",
    name: "Wheels",
    icon: <FaCog className="w-6 h-6" />,
  },
  {
    id: "rim",
    name: "Rim",
    icon: <FaPalette className="w-6 h-6" />,
  },
  {
    id: "chain",
    name: "Chain",
    icon: <FaCog className="w-6 h-6" />,
  },
];

export default function useBikeConfiguration(partProducts: Product[]) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedParts, setSelectedParts] = useState<Record<PartType, string>>({
    chain: "",
    frameFinish: "",
    frameType: "",
    rim: "",
    wheel: "",
  });

  const handleNext = () => {
    if (currentStep < bikeParts.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isLastStep = currentStep === bikeParts.length - 1;

  const currentPart = bikeParts[currentStep];

  const availableParts = partProducts.filter(
    (part) => part.type === currentPart.id
  );

  const handlePartSelection = (typeId: string, partId: string) => {
    setSelectedParts((prev) => ({ ...prev, [typeId]: partId }));
  };

  return {
    bikeParts,
    isLastStep,
    handleNext,
    handlePrevious,
    currentStep,
    selectedParts,
    handlePartSelection,
    currentPart,
    availableParts,
  };
}
