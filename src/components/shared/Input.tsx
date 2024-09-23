const Input = (props: any, ref: any) => {
  const { icon, placeholder, status, message, onIcon, color, ...rest } = props;

  return (
    <div>
      <div className="dl-relative">
        <input
          required
          placeholder={placeholder}
          ref={ref}
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
            ${!status ? "dl-border-neutral-dark" : ""}
            ${
              status === "success"
                ? "dl-shadow-success dl-border-positive-medium"
                : ""
            }
            ${
              status === "error"
                ? "dl-shadow-error dl-border-negative-medium"
                : ""
            }
          `}
          {...rest}
        />
        {/* <Icon
          name={icon}
          onClick={onIcon}
          color={color}
          className={cn(
            "dl-absolute dl-top-1/2 -dl-translate-y-1/2 dl-right-4",
            {
              "dl-cursor-pointer": !!onIcon,
            }
          )}
        /> */}
      </div>
      {status && (
        <p className="dl-text-xs dl-mt-0.5 dl-text-negative-medium">
          {message}
        </p>
      )}
    </div>
  );
};

export default Input;
