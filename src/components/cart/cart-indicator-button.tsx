import Link from "next/link";
import React from "react";
import { LuShoppingCart } from "react-icons/lu";
import { getLineItems } from "@/functions/line-items";

export default function CartIndicatorButton() {
  const lineItems = getLineItems();

  return (
    <Link href="/cart" className="indicator hidden md:block">
      {lineItems.length > 0 && (
        <span className="indicator-item badge badge-secondary">
          {lineItems.length}
        </span>
      )}

      <LuShoppingCart className="h-6 w-6" />
    </Link>
  );
}
