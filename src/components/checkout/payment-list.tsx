import React from "react";
import Button from "../button";
import Card from "../card";

export default function PaymentList() {
  return (
    <section className="mt-10 border-t border-base-300">
      <Card>
        <Card.Body>
          <Card.Header>
            <h2 className="text-lg font-medium text-base-content">
              Payment List
            </h2>
          </Card.Header>

          <div className="flex flex-col gap-5">
            <Button color="primary" form="billing-form">
              Google Pay
            </Button>
            <Button color="neutral" form="billing-form">
              Apple Pay
            </Button>
          </div>
        </Card.Body>
      </Card>
    </section>
  );
}
