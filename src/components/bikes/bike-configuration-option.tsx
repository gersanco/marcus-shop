"use client";
import React from "react";
import { PartType, Product } from "@/schemas/product-schema";
import Button from "../button";

type Props = {
  part: Product;
  handlePartSelection: (typeId: PartType, partId: string) => void;
  checkIsAvailablePart: (partId: string) => boolean;
  isSelectedPart: (partId: string, type: PartType) => boolean;
};
export default function BikeConfigurationOption({
  part,
  handlePartSelection,
  checkIsAvailablePart,
  isSelectedPart,
}: Props) {
  const hasSelected = isSelectedPart(part.uid as string, part.type as PartType);
  const isAvailable = checkIsAvailablePart(part.uid as string);

  return (
    <Button
      variant={!hasSelected ? "outline" : undefined}
      color={hasSelected ? "primary" : "neutral"}
      disabled={!isAvailable}
      onClick={() =>
        handlePartSelection(part.type as PartType, part.uid as string)
      }
    >
      {part.title} - {part.price} €
    </Button>
  );
}
