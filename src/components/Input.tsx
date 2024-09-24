import { InputHTMLAttributes, useEffect, useState } from "react";

type Props = {
  label: string;
  name: string;
  formik: any;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = (props: Props) => {
  const { disabled, label, formik, name, ...rest } = props;
  const [openLabel, setOpenLabel] = useState(false);

  const writeLabel = () => {
    setOpenLabel(true);
  }

  const handleOnblur = (event: any) => {
    setOpenLabel(!!formik.values[name]);
    formik.handleBlur(event);
  }

  useEffect(() => {
    setOpenLabel(!!formik.values[name]);
  }, [formik.values[name]])

  return (
    <div className="dl-relative dl-w-full">
      <label
        className={`
          dl-flex
          dl-font-normal
          dl-text-neutral-darkest
          dl-absolute
          dl-left-3
          dl-px-1
          dl-bg-white
          dl-transition-all
          ${disabled ? "dl-text-neutral-dark/75" : ""}
          ${openLabel ? "-dl-top-2 dl-translate-y-0 dl-text-xs" : "dl-top-1/2 -dl-translate-y-1/2 dl-text-base"}
        `}
      >
        {label}
      </label>
      <input
        type="text"
        name={name}
        onChange={formik.handleChange}
        onBlur={handleOnblur}
        value={formik.values[name]}
        onClick={writeLabel}
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
