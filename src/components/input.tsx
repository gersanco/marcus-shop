import cn from "@/libs/cn";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};
const Input = ({ className, label, type, ...props }: Props) => {
  const classList = cn("input input-bordered w-full max-w-md", className);

  return (
    <label className="form-control w-full max-w-md">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input className={classList} type={type} {...props} />
    </label>
  );
};

export default Input;
