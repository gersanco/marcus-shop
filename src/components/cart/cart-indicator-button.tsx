import Link from "next/link";
import React from "react";
import { LuShoppingCart } from "react-icons/lu";
import { getTotalLineItems } from "@/functions/line-items";

export default function CartIndicatorButton() {
  const lineItems = getTotalLineItems();

  return (
    <Link href="/cart" className="indicator hidden md:block">
      {lineItems > 0 && (
        <span className="indicator-item badge badge-secondary">
          {lineItems}
        </span>
      )}

      <LuShoppingCart className="h-6 w-6" />
    </Link>
  );
}
