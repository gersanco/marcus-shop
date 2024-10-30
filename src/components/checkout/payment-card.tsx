import { ElementType, PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  title: string;
  description: string;
  icon: ElementType;
};

export default function PaymentCard({ description, title, icon: Icon }: Props) {
  return (
    <div
      className={`card bg-base-100 shadow-xl cursor-pointer transition-all hover:shadow-2xl`}
      role="button"
      aria-label={title}
    >
      <div className="card-body items-center text-center">
        <Icon className="w-16 h-16 text-primary" />
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
