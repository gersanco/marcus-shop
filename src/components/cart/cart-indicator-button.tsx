import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";
import { LuShoppingCart } from "react-icons/lu";

export default function CartIndicatorButton() {
  const lineItems = cookies().get("cart")?.value || [];

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
