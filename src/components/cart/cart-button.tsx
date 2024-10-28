import Link from "next/link";
import React from "react";
import { LuShoppingCart } from "react-icons/lu";

export default function CartButton() {
  return (
    <Link href="/cart" className="indicator hidden md:block">
      <span className="indicator-item badge badge-secondary">9</span>
      <LuShoppingCart className="h-6 w-6" />
    </Link>
  );
}
