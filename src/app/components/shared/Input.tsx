const InputField = ({ name, type, placeholder, formik }: any) => {
  return (
    <div>
      <div className="dl-relative">
        <input
          placeholder={placeholder}
          name={name}
          type={type}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[name]}
          className={`
            dl-outline-0
            dl-w-full
            dl-border
            dl-py-2.5
            dl-px-4
            dl-pr-12
            dl-rounded-lg
            dl-font-normal
            placeholder:dl-text-neutral-dark
            ${
              formik.touched[name] && formik.errors[name]
                ? `dl-border-support-negative-medium`
                : ""
            }
          `}
        />
        {formik.touched[name] && formik.errors[name] ? (
          <span className="dl-text-xs dl-text-support-negative-medium">
            {formik.errors[name]}
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default InputField;
