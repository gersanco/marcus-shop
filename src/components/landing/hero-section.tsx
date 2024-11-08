import Image from "next/image";
import React from "react";
import Button from "../button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-base-300">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <Image
            src="/assets/landing-image.webp"
            width={800}
            height={400}
            alt="Featured Bike"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Discover Your Perfect Ride
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Explore our wide range of premium bikes and gear. From city
                cruisers to mountain trails, we&apos;ve got you covered.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/bikes">
                <Button size="lg" color="neutral">
                  Shop Now
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
