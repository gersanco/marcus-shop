import React from "react";
import cn from "@/libs/cn";
import ErrorMessage from "./error-message";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ className, label, type, error, ...props }, ref) => {
    const classList = cn("input input-bordered", className, {
      "input-error": Boolean(error),
    });

    return (
      <label className="form-control">
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
        <input
          className={classList}
          type={type}
          ref={ref}
          {...props}
          aria-invalid={Boolean(error)}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </label>
    );
  }
);

Input.displayName = "Input";

export default Input;
