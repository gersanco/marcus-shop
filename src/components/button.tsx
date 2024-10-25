import { ReactNode } from "react";
import cn from "@/libs/cn";
import { Color, Size } from "@/types/daisyui";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  className?: string;
  color?: Color | "ghost";
  size?: Size;
  variant?: "outline" | "link";
};

export default function Button({
  children,
  className,
  color,
  size,
  variant,
  ...props
}: Props) {
  const classList = cn("btn", className, {
    "btn-neutral": color === "neutral",
    "btn-primary": color === "primary",
    "btn-secondary": color === "secondary",
    "btn-accent": color === "accent",
    "btn-info": color === "info",
    "btn-success": color === "success",
    "btn-warning": color === "warning",
    "btn-error": color === "error",
    "btn-ghost": color === "ghost",
    "btn-xs": size === "xs",
    "btn-sm": size === "sm",
    "btn-md": size === "md",
    "btn-lg": size === "lg",
    "btn-outline": variant === "outline",
    "btn-link": variant === "link",
  });

  return (
    <button className={classList} {...props}>
      {children}
    </button>
  );
}
