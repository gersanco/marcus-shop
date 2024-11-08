import React from "react";
import { Product } from "@/schemas/product-schema";
import Card from "../card";
import Button from "../button";
import Image from "next/image";
import { DEFAULT_IMAGE } from "@/libs/constants";
import Link from "next/link";

type Props = Product;
export default function BikeCard({ title, price, image, slug }: Props) {
  return (
    <Card className="shadow-xl bg-base-100 max-w-96">
      <Image
        src={image || DEFAULT_IMAGE}
        alt={title}
        width={400}
        height={300}
        className="object-cover"
      />
      <Card.Body className="space-y-1">
        <Card.Header className="font-bold">{title}</Card.Header>
        <p className="text-gray-400">{price} €</p>
        <Card.Actions>
          <Link href={`/${slug}`}>
            <Button color="neutral" block>
              View more
            </Button>
          </Link>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
}
