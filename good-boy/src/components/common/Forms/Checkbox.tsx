import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { CheckboxStyled } from "../styled/Checkbox.styled";

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}
export const Checkbox = ({ label, ...props }: Props) => {
  return (
    <CheckboxStyled>
      <input type="checkbox" {...props} />
      <span>{label}</span>
    </CheckboxStyled>
  );
};
