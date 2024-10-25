import React, { ReactNode } from "react";
import cn from "@/libs/cn";

type Props = React.HtmlHTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
  className?: string;
};

function Card({ children, className, ...props }: Props) {
  const classList = cn("card", className);
  return (
    <article className={classList} {...props}>
      {children}
    </article>
  );
}

function CardHeader({ children, className, ...props }: Props) {
  const classList = cn("card-title", className);
  return (
    <header className={classList} {...props}>
      {children}
    </header>
  );
}

function CardBody({ children, className, ...props }: Props) {
  const classList = cn("card-body", className);
  return (
    <div className={classList} {...props}>
      {children}
    </div>
  );
}

function CardActions({ children, className, ...props }: Props) {
  const classList = cn("card-actions", className);
  return (
    <div className={classList} {...props}>
      {children}
    </div>
  );
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Actions = CardActions;

export default Card;
