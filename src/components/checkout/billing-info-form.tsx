"use client";
import React from "react";
import Input from "../input";
import Card from "../card";
import { useForm } from "react-hook-form";
import { BillingInfo, BillingInfoSchema } from "@/schemas/billing-info-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Radio from "../radio";
import { addBillingInfoToCookies } from "../../actions/checkout";

type Props = {
  billing: BillingInfo;
};
export default function BillingInfoForm({ billing }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BillingInfo>({
    resolver: zodResolver(BillingInfoSchema),
    defaultValues: billing,
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: BillingInfo) => {
    const error = await addBillingInfoToCookies(data);

    if (error) alert(error);
  };

  return (
    <Card className="shadow-xl">
      <Card.Body>
        <Card.Header>
          <h2>Billing Information</h2>
        </Card.Header>
        <form onSubmit={handleSubmit(onSubmit)} id="billing-form">
          <Input
            label="Email"
            type="email"
            {...register("email")}
            error={errors.email?.message}
          />

          <div className="flex gap-3">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
          </div>

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Input
              label="City"
              type="text"
              {...register("city")}
              error={errors.city?.message}
            />
            <Input
              label="Country"
              type="text"
              {...register("country")}
              error={errors.country?.message}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
          </div>
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
        </form>
      </Card.Body>
    </Card>
  );
}
