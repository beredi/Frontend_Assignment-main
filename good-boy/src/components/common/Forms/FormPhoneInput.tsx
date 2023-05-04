import { FormPhoneInputStyled } from "../styled/FormPhoneInput.styled";
import { FormInput } from "./FormInput";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { CustomDropdown } from "./CustomDropdown";

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}

export const FormPhoneInput = ({ label, ...props }: Props) => {
  return (
    <FormPhoneInputStyled>
      <CustomDropdown />
      <FormInput label={label} {...props} />
    </FormPhoneInputStyled>
  );
};
