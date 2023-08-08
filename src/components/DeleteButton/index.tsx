import { ButtonHTMLAttributes } from "react";
import { Trash } from "@phosphor-icons/react";
import { DeleteButtonWrapper } from "./style";
import { defaultTheme } from "../../styles/theme/default";

interface DeleteButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}
export const DeleteButton = ({ label, ...rest }: DeleteButton) => {
  return (
    <DeleteButtonWrapper {...rest}>
      <Trash size={24} fill={defaultTheme["purple-400"]} />
      <span>{label}</span>
    </DeleteButtonWrapper>
  );
};
