import { FormInputStyled } from "../styled/FormInput.styled";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { Field } from "formik";
import { ErrorMessageStyled } from "../styled/ErrorMessage.styled";

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
      {props.name && (
        <ErrorMessageStyled
          name={props.name}
          component="div"
          className="error-message"
        />
      )}
    </FormInputStyled>
  );
};
