import { cookies } from "next/headers";
import { BillingInfo } from "@/schemas/billing-info-schema";

const defaultBillingInfo: BillingInfo = {
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
  city: "",
  taxNumber: "",
};

export function getBillingInfo(): BillingInfo {
  const cookiesStore = cookies();

  return JSON.parse(
    cookiesStore.get("billing")?.value || JSON.stringify(defaultBillingInfo)
  );
}

export function setBillingInfo(billingData: BillingInfo) {
  const cookiesStore = cookies();

  cookiesStore.set("billing", JSON.stringify(billingData));
}
