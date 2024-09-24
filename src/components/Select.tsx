import { SelectHTMLAttributes } from "react";

type Option = {
  value: string;
  label: string;
};

type Props = {
  label: string;
  formik: any;
  name: string;
  options: Option[];
} & SelectHTMLAttributes<HTMLSelectElement>;

const Select = (props: Props) => {
  const { disabled, label, options, formik, name, ...rest } = props;

  return (
    <div
      className={`dl-relative dl-w-full ${
        disabled ? "dl-pointer-events-none dl-opacity-70" : ""
      }`}
    >
      <label
        className="
          dl-flex
          dl-text-xs
          dl-font-normal
          dl-text-neutral-darkest
          dl-absolute
          dl-left-3
          dl-px-1
          -dl-top-2
          dl-bg-white
        "
      >
        {label}
      </label>
      <select
        name={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
        className="
          dl-outline-0
          dl-bg-neutral-lightest
          dl-border
          dl-border-neutral-medium
          dl-text-neutral-darkest
          dl-h-12
          dl-w-full
          dl-px-3
          dl-rounded-lg
        "
        {...rest}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {formik.touched[name] && formik.errors[name] ? (
        <div className="dl-text-xs dl-text-support-negative-medium">
          {formik.errors[name]}
        </div>
      ) : null}
    </div>
  );
};

export default Select;
