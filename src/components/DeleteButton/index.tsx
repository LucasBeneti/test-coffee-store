import { Trash } from "@phosphor-icons/react";
import { DeleteButtonWrapper } from "./style";
import { defaultTheme } from "../../styles/theme/default";

interface DeleteButton {
  label: string;
}
export const DeleteButton = ({ label }: DeleteButton) => {
  return (
    <DeleteButtonWrapper>
      <Trash size={24} fill={defaultTheme["purple-400"]} />
      <span>{label}</span>
    </DeleteButtonWrapper>
  );
};
