"use client";
import React, { PropsWithChildren } from "react";
import { createOrder } from "@/actions/checkout";

type Props = PropsWithChildren & {
  title: string;
};
export default function PaymentForm({ title, children }: Props) {
  return (
    <div
      className={`card bg-base-100 shadow-xl cursor-pointer transition-all hover:shadow-2xl`}
      role="button"
      aria-label={title}
      onClick={() => createOrder()}
    >
      {children}
    </div>
  );
}
