import React from "react";
import { Product } from "@/schemas/product-schema";
import Card from "../card";
import Button from "../button";
import Image from "next/image";

type Props = Product;
export default function BikeCard({ title, price, image }: Props) {
  return (
    <Card className="shadow-xl bg-base-100 max-w-96">
      <Image
        src={image}
        alt={title}
        width={400}
        height={300}
        className="object-cover"
      />
      <Card.Body className="space-y-1">
        <Card.Header className="font-bold">{title}</Card.Header>
        <p className="text-gray-400">{price} €</p>
        <Card.Actions>
          <Button color="neutral" block>
            Add to Cart
          </Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
}
