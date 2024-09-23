import { SelectHTMLAttributes } from 'react';

type Props = {
  label: string;
} & SelectHTMLAttributes<HTMLSelectElement>

const Select = (props: Props) => {
  const { disabled, label, ...rest} = props;

  return (
    <div className='dl-relative dl-w-full'>
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
      >
        <option selected>Bodega</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
      </select>
    </div>
  );
};

export default Select;