import { cookies } from "next/headers";
import { BillingInfo } from "@/schemas/billing-info-schema";

export function getBillingInfo() {
  const cookiesStore = cookies();

  return JSON.parse(cookiesStore.get("billing")?.value || "{}");
}

export function setBillingInfo(billingData: BillingInfo) {
  const cookiesStore = cookies();

  cookiesStore.set("billing", JSON.stringify(billingData));
}
