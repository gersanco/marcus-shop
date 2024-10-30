import React from "react";
import { LuBuilding, LuCreditCard } from "react-icons/lu";
import { BsPaypal } from "react-icons/bs";
import PaymentCard from "./payment-card";

export default function PaymentList() {
  return (
    <>
      <PaymentCard
        icon={LuCreditCard}
        title="Credit Card"
        description="Pay securely with your credit card"
      />

      <PaymentCard
        icon={BsPaypal}
        title="PayPal"
        description="Fast and secure payments with PayPal"
      />

      <PaymentCard
        icon={LuBuilding}
        title="Bank Transfer"
        description="Direct transfer from your bank account"
      />
    </>
  );
}
