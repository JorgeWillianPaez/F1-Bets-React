import { ChangeEvent } from "react";
import { InputElement } from "./styles";

interface IInputProps {
  type: "text" | "number" | "email" | "password";
  label: string;
  value: string | number;
  name: string;
  placeholder: string;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export default function Input({
  type,
  label,
  value,
  name,
  placeholder,
  disabled,
  onChange,
  error,
}: IInputProps) {
  return (
    <>
      <label>{label}</label>
      <InputElement
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
      />
      {error && (
        <span style={{ color: "red", fontWeight: 700, textAlign: "center" }}>
          {error}
        </span>
      )}
    </>
  );
}
