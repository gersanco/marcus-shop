"use client";

import { useState, useMemo } from "react";
import {
  FaBicycle,
  FaCog,
  FaPalette,
  FaDollarSign,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

type PartOption = {
  name: string;
  basePrice: number;
  availableFor?: string[];
  priceModifier?: (selectedParts: Record<string, PartOption>) => number;
};

type Part = {
  id: string;
  name: string;
  options: PartOption[];
  icon: React.ReactNode;
};

const bikeParts: Part[] = [
  {
    id: "frame",
    name: "Frame",
    icon: <FaBicycle className="w-6 h-6" />,
    options: [
      { name: "Aluminum", basePrice: 300 },
      { name: "Carbon Fiber", basePrice: 800 },
      { name: "Steel", basePrice: 250 },
    ],
  },
  {
    id: "suspension",
    name: "Suspension",
    icon: <FaPalette className="w-6 h-6" />,
    options: [
      { name: "Hardtail", basePrice: 300 },
      { name: "Full Suspension", basePrice: 800 },
      { name: "Rigid", basePrice: 100 },
    ],
  },
  {
    id: "wheels",
    name: "Wheels",
    icon: <FaCog className="w-6 h-6" />,
    options: [
      { name: '26"', basePrice: 150, availableFor: ["Hardtail", "Rigid"] },
      { name: '27.5"', basePrice: 200 },
      {
        name: '29"',
        basePrice: 250,
        availableFor: ["Hardtail", "Full Suspension"],
      },
    ],
  },
  {
    id: "drivetrain",
    name: "Drivetrain",
    icon: <FaCog className="w-6 h-6" />,
    options: [
      { name: "1x11 Speed", basePrice: 250 },
      { name: "2x10 Speed", basePrice: 300 },
      { name: "3x9 Speed", basePrice: 200 },
    ],
  },
  {
    id: "brakes",
    name: "Brakes",
    icon: <FaCog className="w-6 h-6" />,
    options: [
      { name: "Hydraulic Disc", basePrice: 200 },
      { name: "Mechanical Disc", basePrice: 150 },
      { name: "Rim", basePrice: 100, availableFor: ["Rigid"] },
    ],
  },
  {
    id: "finish",
    name: "Frame Finish",
    icon: <FaPalette className="w-6 h-6" />,
    options: [
      {
        name: "Matte",
        basePrice: 0,
        priceModifier: (selectedParts) =>
          selectedParts.suspension?.name === "Full Suspension" ? 50 : 35,
      },
      { name: "Gloss", basePrice: 50 },
      { name: "Chrome", basePrice: 100 },
    ],
  },
];

export default function BikeParts() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedParts, setSelectedParts] = useState<
    Record<string, PartOption>
  >({});

  const handlePartSelection = (partId: string, option: PartOption) => {
    setSelectedParts((prev) => ({ ...prev, [partId]: option }));
  };

  const isOptionAvailable = (option: PartOption) => {
    if (!option.availableFor) return true;
    const suspensionType = selectedParts.suspension?.name;
    return suspensionType ? option.availableFor.includes(suspensionType) : true;
  };

  const calculateOptionPrice = (option: PartOption) => {
    const basePrice = option.basePrice;
    const modifier = option.priceModifier
      ? option.priceModifier(selectedParts)
      : 0;
    return basePrice + modifier;
  };

  const totalPrice = useMemo(() => {
    return Object.values(selectedParts).reduce(
      (sum, part) => sum + calculateOptionPrice(part),
      0
    );
  }, [selectedParts]);

  const currentPart = bikeParts[currentStep];

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
            {currentPart.options.map((option) => (
              <button
                key={option.name}
                className={`btn ${
                  selectedParts[currentPart.id]?.name === option.name
                    ? "btn-primary"
                    : "btn-outline"
                } ${
                  !isOptionAvailable(option) ? "btn-disabled opacity-50" : ""
                }`}
                onClick={() => handlePartSelection(currentPart.id, option)}
                disabled={!isOptionAvailable(option)}
              >
                {option.name} - ${calculateOptionPrice(option)}
              </button>
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
              disabled={!selectedParts[currentPart.id] || isLastStep}
            >
              {isLastStep ? "Finish" : "Next"}{" "}
              <FaChevronRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 shadow-xl mt-8">
        <div className="card-body">
          <h2 className="card-title">Your Bike Configuration</h2>
          {Object.entries(selectedParts).length > 0 ? (
            <ul className="list-disc list-inside space-y-2">
              {Object.entries(selectedParts).map(([partId, option]) => (
                <li key={partId} className="text-lg">
                  <span className="font-semibold">
                    {bikeParts.find((p) => p.id === partId)?.name}:
                  </span>{" "}
                  {option.name} - ${calculateOptionPrice(option)}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">
              Start selecting parts to see your configuration
            </p>
          )}
          <div className="mt-4 space-y-4">
            <div className="text-2xl font-bold flex items-center justify-between">
              <span>Total Price:</span>
              <span className="flex items-center">
                <FaDollarSign className="w-6 h-6 mr-1" />
                {totalPrice}
              </span>
            </div>
            {isLastStep &&
              Object.keys(selectedParts).length === bikeParts.length && (
                <button className="btn btn-primary btn-block">
                  Order Your Custom Bike
                </button>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
