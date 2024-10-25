import React, { ReactNode } from "react";

type Props = React.HtmlHTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
  className?: string;
};

function Card({ children, className, ...props }: Props) {
  return (
    <article className={className} {...props}>
      {children}
    </article>
  );
}

function CardHeader({ children, className, ...props }: Props) {
  return (
    <header className={className} {...props}>
      {children}
    </header>
  );
}

function CardBody({ children, className, ...props }: Props) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

function CardActions({ children, className, ...props }: Props) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Actions = CardActions;

export default Card;
