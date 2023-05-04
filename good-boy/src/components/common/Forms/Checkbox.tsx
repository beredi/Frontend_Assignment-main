import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { CheckboxStyled } from "../styled/Checkbox.styled";
import { Field } from "formik";

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
      <Field type="checkbox" {...props} />
      <span>{label}</span>
    </CheckboxStyled>
  );
};
