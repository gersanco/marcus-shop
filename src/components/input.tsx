import React from "react";
import cn from "@/libs/cn";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ className, label, type, ...props }, ref) => {
    const classList = cn("input input-bordered w-full max-w-md", className);

    return (
      <label className="form-control w-full max-w-md">
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
        <input className={classList} type={type} ref={ref} {...props} />
      </label>
    );
  }
);

Input.displayName = "Input";

export default Input;
