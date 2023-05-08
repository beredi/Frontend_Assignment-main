import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { CheckboxStyled } from "../styled/Checkbox.styled";
import { Field } from "formik";
import { ErrorMessageStyled } from "../styled/ErrorMessage.styled";

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}
export const Checkbox = ({ label, ...props }: Props) => {
  return (
    <>
      <CheckboxStyled>
        <Field type="checkbox" {...props} />
        <span>{label}</span>
      </CheckboxStyled>{" "}
      {props.name && (
        <ErrorMessageStyled
          name={props.name}
          component="div"
          className="error-message"
        />
      )}
    </>
  );
};
