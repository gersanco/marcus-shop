import React from "react";
import { FaEuroSign } from "react-icons/fa";
import { PartType, Product } from "@/schemas/product-schema";
import Button from "../button";

type Props = {
  isLastStep: boolean;
  bikeParts: Product[];
  selectedParts: Record<PartType, string>;
};

export default function BikeConfigurationOverview({
  isLastStep,
  selectedParts,
  bikeParts,
}: Props) {
  const totalPrice = bikeParts
    .filter((part) => selectedParts[part.type as PartType] === part.uid)
    .reduce((total, part) => total + part.price, 0);

  const entities = Object.entries(selectedParts).filter(
    ([, bikePart]) => bikePart !== ""
  );

  return (
    <div className="card bg-base-100 shadow-xl mt-8">
      <div className="card-body">
        <h2 className="card-title">Your Bike Configuration</h2>
        {entities.length > 0 ? (
          <ul className="list-disc list-inside space-y-2">
            {entities.map(([partType, partUid]) => {
              const part = bikeParts.find((p) => p.uid === partUid);
              return (
                <li key={partType} className="text-lg">
                  <span className="font-semibold">{part?.title}:</span>{" "}
                  {part?.description} - {part?.price} €
                </li>
              );
            })}
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
              {totalPrice.toFixed(2)}
              <FaEuroSign className="w-6 h-6 mr-1" />
            </span>
          </div>
          {isLastStep && (
            <Button className="btn-block" color="primary">
              Order Your Custom Bike
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
