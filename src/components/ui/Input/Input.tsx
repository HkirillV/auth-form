import { ChangeEvent } from "react";
import classNames from "classnames";

import "./Input.scss";

interface IInputProps {
  className: string;
  type: string;
  name: string;
  value: string;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input = (props: IInputProps) => {
  const {
    className,
    type,
    name,
    value,
    onChange,
    disabled,
    placeholder } = props;

  return (
    <input
      className={classNames("input", className)}
      type={type}
      name={name}
      value={value}
      disabled={disabled}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;