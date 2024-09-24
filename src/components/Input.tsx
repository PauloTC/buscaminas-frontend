import { InputHTMLAttributes } from "react";

type Props = {
  label: string;
  name: string;
  formik: any;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = (props: Props) => {
  const { disabled, label, formik, name, ...rest } = props;

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
        name={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
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
      {formik.touched[name] && formik.errors[name] ? (
        <div className="dl-text-xs dl-text-support-negative-medium">
          {formik.errors[name]}
        </div>
      ) : null}
    </div>
  );
};

export default Input;
