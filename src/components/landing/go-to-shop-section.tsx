import React from "react";
import Button from "../button";

export default function GoToShopSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-base-200/90">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Ready to Ride?
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join thousands of satisfied cyclists. Start your journey with us
              today.
            </p>
          </div>
          <Button size="lg" color="neutral" className="mt-4">
            Shop All Bikes
          </Button>
        </div>
      </div>
    </section>
  );
}
