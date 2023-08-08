import { InputHTMLAttributes } from "react";
import { QuantityInputButton } from "./style";

interface QuantityInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
}

export const QuantityInput = ({ name, ...rest }: QuantityInputProps) => {
  return (
    <QuantityInputButton type="number" name={name} placeholder="0" {...rest} />
  );
};
