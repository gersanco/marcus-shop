"use client";
import React from "react";
import Input from "../input";
import Card from "../card";
import { useForm } from "react-hook-form";
import { BillingInfo, BillingInfoSchema } from "@/schemas/billing-info-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../button";

export default function BillingInfoForm() {
  const { register, handleSubmit } = useForm<BillingInfo>({
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

  const onSubmit = (data: BillingInfo) => console.log("BillingInfo", data);

  return (
    <Card className="shadow-xl">
      <Card.Body>
        <Card.Header>
          <h2>Billing Information</h2>
        </Card.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input label="Email" type="email" {...register("email")} />
          <Input label="Company" type="text" {...register("company")} />

          <Input label="First Name" type="text" {...register("firstName")} />
          <Input label="Last Name" type="text" {...register("lastName")} />
          <Input label="Address" type="text" {...register("address")} />
          <Input label="Apartment" type="text" {...register("apartment")} />
          <Input label="Country" type="text" {...register("country")} />
          <Input label="Province" type="text" {...register("province")} />
          <Input label="Postal code" type="text" {...register("postalCode")} />
          <Input label="Phone" type="text" {...register("phone")} />
          <Input label="Tax Number" type="text" {...register("taxNumber")} />
          <Button color="neutral" type="submit">
            Submit
          </Button>
        </form>
      </Card.Body>
    </Card>
  );
}
