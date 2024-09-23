import { InputHTMLAttributes } from "react";

type Props = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = (props: Props) => {
  const { disabled, label, ...rest } = props;

  return (
    <div className="dl-relative dl-w-full">
      <label
        className={`
          dl-flex
          dl-text-xs
          dl-font-normal
          dl-text-neutral-darkest
          dl-absolute
          dl-left-3
          dl-px-1
          -dl-top-2
          dl-bg-white
          ${disabled ? "dl-text-neutral-dark/75" : ""}
        `}
      >
        {label}
      </label>
      <input
        type="text"
        {...rest}
        disabled={disabled}
        className="
          dl-outline-0
          dl-bg-neutral-lightest
          dl-border
          dl-border-neutral-medium
          dl-text-neutral-darkest
          dl-h-12
          dl-w-full
          dl-px-4
          dl-rounded-lg
          disabled:dl-bg-neutral-light
          disabled:dl-text-neutral-dark/75
        "
      />
    </div>
  );
};

export default Input;
