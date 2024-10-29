"use client";
import React from "react";
import Input from "../input";
import Card from "../card";
import { useForm } from "react-hook-form";
import { BillingInfo, BillingInfoSchema } from "@/schemas/billing-info-schema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function BillingInfoForm() {
  const form = useForm<BillingInfo>({
    resolver: zodResolver(BillingInfoSchema),
    defaultValues: {
      email: "",
      clientType: "particular",
      company: "",
      firstName: "",
      lastName: "",
      province: "",
      address: "",
      country: "",
      postalCode: "",
      phone: "",
      apartment: "",
      taxNumber: "",
    },
  });
  return (
    <Card className="shadow-xl">
      <Card.Body>
        <Card.Header>
          <h2>Billing Information</h2>
        </Card.Header>
        <form>
          <Input label="Email" type="email" name="email" />
          <Input label="Company" type="text" name="company" />
          <Input label="First Name" type="text" name="firstName" />
          <Input label="Last Name" type="text" name="lastName" />
          <Input label="Address" type="text" name="address" />
          <Input label="Apartment" type="text" name="apartment" />
          <Input label="Country" type="text" name="country" />
          <Input label="Province" type="text" name="province" />
          <Input label="Postal code" type="text" name="postalCode" />
          <Input label="Phone" type="text" name="phpne" />
          <Input label="Tax Number" type="text" name="taxNumber" />
        </form>
      </Card.Body>
    </Card>
  );
}
