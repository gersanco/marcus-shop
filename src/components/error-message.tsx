import { PropsWithChildren } from "react";

type Props = PropsWithChildren;
export default function ErrorMessage({ children }: Props) {
  return <span className="text-error">{children}</span>;
}
