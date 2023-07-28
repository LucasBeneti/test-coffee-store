import { QuantityInputButton } from "./style";

interface QuantityInputProps {
  name?: string;
}

export const QuantityInput = ({ name }: QuantityInputProps) => {
  return <QuantityInputButton type="number" name={name} placeholder="0" />;
};
