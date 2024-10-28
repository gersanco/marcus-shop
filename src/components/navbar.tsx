import Link from "next/link";
import React from "react";
import { LuBike, LuMenu, LuShoppingCart } from "react-icons/lu";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-base-100 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <LuBike className="h-6 w-6" />
          <span className="font-bold">Marcus Shop</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/bikes"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            All Bikes
          </Link>
          <Link
            href="/bikes/road"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Road Bikes
          </Link>
          <Link
            href="/bikes/mountain"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Mountain Bikes
          </Link>
          <Link
            href="/bikes/electric"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Electric Bikes
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/cart" className="hidden md:block">
            <LuShoppingCart className="h-6 w-6" />
          </Link>
          <button className="btn btn-outline md:hidden">
            <LuMenu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
