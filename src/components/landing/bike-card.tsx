import React from "react";
import { Product } from "@/schemas/product-schema";
import Card from "../card";
import Button from "../button";
import Image from "next/image";

type Props = Product;
export default function BikeCard({ title, price, image }: Props) {
  return (
    <Card>
      <Image
        src={image}
        alt={title}
        width={400}
        height={300}
        className="rounded-lg object-cover"
      />
      <Card.Body>
        <Card.Header>{title}</Card.Header>
        <p>{price} €</p>
        <Card.Actions>
          <Button color="neutral">Add to Cart</Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
}
