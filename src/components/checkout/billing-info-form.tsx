import React from "react";
import Input from "../input";
import Card from "../card";

export default function BillingInfoForm() {
  return (
    <Card className="shadow-xl">
      <Card.Body>
        <Card.Header>
          <h2>Billing Information</h2>
        </Card.Header>
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
      </Card.Body>
    </Card>
  );
}
