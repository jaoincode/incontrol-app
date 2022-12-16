import React from "react";
import StyledInputField from "./styles";

interface Props {
  type: "text" | "email" | "password" | "number";
  placeholder: string;
  name: string;
  id: string;
  className?: string;
  value: string | number;
  onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

const Input: React.FC<Props> = ({
  type,
  placeholder,
  name,
  id,
  className,
  value,
  onChange,
  label,
}) => {
  return (
    <StyledInputField>
      <label htmlFor={id}>{label ? label : name}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        value={value}
        onChange={onChange}
      />
    </StyledInputField>
  );
};

export default Input;
