import { FormInputStyled } from "../styled/FormInput.styled";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { Field } from "formik";

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}

export const FormInput = ({ label, ...props }: Props) => {
  return (
    <FormInputStyled>
      <p>{label}</p>
      <Field type="text" {...props} />
    </FormInputStyled>
  );
};
