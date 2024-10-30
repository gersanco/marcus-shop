import React from "react";
import cn from "@/libs/cn";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

const Radio = React.forwardRef<HTMLInputElement, Props>(
  ({ label, checked, className, ...props }, ref) => {
    const classList = cn("radio", className);

    return (
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">{label}</span>
          <input
            type="radio"
            className={classList}
            defaultChecked={checked}
            ref={ref}
            {...props}
          />
        </label>
      </div>
    );
  }
);

Radio.displayName = "Radio";

export default Radio;
