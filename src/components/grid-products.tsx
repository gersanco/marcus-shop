import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren;

export default function GridProducts({ children }: Props) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{children}</div>
  );
}
