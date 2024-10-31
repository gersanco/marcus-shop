"use client";
import React from "react";
import { PartType, Product } from "@/schemas/product-schema";
import Button from "../button";

type Props = {
  part: Product;
  handlePartSelection: (typeId: PartType, partId: string) => void;
};
export default function BikeConfigurationOption({
  part,
  handlePartSelection,
}: Props) {
  return (
    <Button
      variant="outline"
      onClick={() =>
        handlePartSelection(part.type as PartType, part.uid as string)
      }
    >
      {part.title} - {part.price} €
    </Button>

    // <button
    //   className={`btn ${
    //     selectedParts[currentPart.id]?.name === option.name
    //       ? "btn-primary"
    //       : "btn-outline"
    //   } ${!isOptionAvailable(option) ? "btn-disabled opacity-50" : ""}`}
    //   onClick={() => handlePartSelection(currentPart.id, option)}
    //   disabled={!isOptionAvailable(option)}
    // >
    //   {option.name} - ${calculateOptionPrice(option)}
    // </button>
  );
}
