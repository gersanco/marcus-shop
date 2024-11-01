import { ElementType, PropsWithChildren } from "react";
import PaymentForm from "./payment-form";

type Props = PropsWithChildren & {
  title: string;
  description: string;
  icon: ElementType;
};

export default function PaymentCard({ description, title, icon: Icon }: Props) {
  return (
    <PaymentForm title={title}>
      <div className="card-body items-center text-center">
        <Icon className="w-16 h-16 text-primary" />
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </PaymentForm>
  );
}
