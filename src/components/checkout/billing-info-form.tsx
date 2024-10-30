"use client";
import React from "react";
import Input from "../input";
import Card from "../card";
import { useForm } from "react-hook-form";
import { BillingInfo, BillingInfoSchema } from "@/schemas/billing-info-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../button";
import Radio from "../radio";

export default function BillingInfoForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BillingInfo>({
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
    reValidateMode: "onChange",
  });

  const onSubmit = (data: BillingInfo) => console.log("BillingInfo", data);

  return (
    <Card className="shadow-xl">
      <Card.Body>
        <Card.Header>
          <h2>Billing Information</h2>
        </Card.Header>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Input
            label="Email"
            type="email"
            {...register("email")}
            error={errors.email?.message}
          />

          <div>
            <Radio
              label="Particular"
              {...register("clientType")}
              value="particular"
            />
            <Radio
              label="Company"
              {...register("clientType")}
              value="company"
            />
          </div>

          <Input
            label="Company"
            type="text"
            {...register("company")}
            error={errors.company?.message}
          />

          <Input
            label="First Name"
            type="text"
            {...register("firstName")}
            error={errors.firstName?.message}
          />
          <Input
            label="Last Name"
            type="text"
            {...register("lastName")}
            error={errors.lastName?.message}
          />
          <Input
            label="Address"
            type="text"
            {...register("address")}
            error={errors.address?.message}
          />
          <Input
            label="Apartment"
            type="text"
            {...register("apartment")}
            error={errors.apartment?.message}
          />
          <Input
            label="Country"
            type="text"
            {...register("country")}
            error={errors.country?.message}
          />
          <Input
            label="Province"
            type="text"
            {...register("province")}
            error={errors.province?.message}
          />
          <Input
            label="Postal code"
            type="text"
            {...register("postalCode")}
            error={errors.postalCode?.message}
          />
          <Input
            label="Phone"
            type="text"
            {...register("phone")}
            error={errors.phone?.message}
          />
          <Input
            label="Tax Number"
            type="text"
            {...register("taxNumber")}
            error={errors.taxNumber?.message}
          />
          <Button color="neutral" type="submit">
            Submit
          </Button>
        </form>
      </Card.Body>
    </Card>
  );
}
