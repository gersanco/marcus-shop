import React from "react";
import Button from "../button";
import { LuX } from "react-icons/lu";

type Props = {
  itemId: string;
};

export default function RemoveFromCartButton({}: Props) {
  return (
    <Button variant="outline" aria-label="Remove item from cart">
      <LuX className="h-4 w-4" />
    </Button>
  );
}
