import { Field, FieldAttributes } from "formik";
import { FormInputStyled } from "../styled/FormInput.styled";

interface Props extends FieldAttributes<any> {
  label: string;
  children: string | JSX.Element | JSX.Element[];
}

export const FormSelect = ({
  label,
  children,
  placeholder,
  value,
  ...props
}: Props) => {
  return (
    <FormInputStyled>
      <p>{label}</p>
      <img
        src={"/icon/dropdown.png"}
        alt={"dropdown arrow"}
        className="dropdown-arrow"
      />
      <Field as="select" {...props} className={"test"}>
        <option className="option-placeholder" value={""} disabled hidden>
          {placeholder}
        </option>
        {children}
      </Field>
    </FormInputStyled>
  );
};
