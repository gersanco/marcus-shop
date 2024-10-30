import React from "react";
import Card from "../card";
import Button from "../button";
import Image from "next/image";
import { DEFAULT_IMAGE } from "@/libs/constants";
import Link from "next/link";
import { Category } from "@/types/category";

type Props = {
  category: Category;
  image?: string;
};
export default function CategoryCard({ category, image }: Props) {
  return (
    <Card className="shadow-xl bg-base-100 max-w-96">
      <Image
        src={image || DEFAULT_IMAGE}
        alt={category}
        width={400}
        height={300}
        className="object-cover"
      />
      <Card.Body className="space-y-1">
        <Card.Header className="font-bold capitalize">{category}</Card.Header>
        <Card.Actions>
          <Link href={`/bikes/${category}`}>
            <Button color="neutral" block>
              View more
            </Button>
          </Link>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
}
