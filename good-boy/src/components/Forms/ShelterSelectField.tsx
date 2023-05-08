import { Field, FieldAttributes, useFormikContext } from "formik";
import React, { useEffect } from "react";
import { useSelectedHelpOption } from "../../hooks/useSelectedHelpOption";
import { FormInputStyled } from "../common/styled/FormInput.styled";
import { ErrorMessageStyled } from "../common/styled/ErrorMessage.styled";
import { useTranslation } from "react-i18next";

interface Props extends FieldAttributes<any> {
  label: string;
  children: string | JSX.Element | JSX.Element[];
}

interface FormValues {
  shelter: string;
  shelter_error: string;
}

export const ShelterSelectField = ({
  label,
  children,
  placeholder,
  value,
  ...props
}: Props) => {
  const { values, setFieldValue, validateForm } =
    useFormikContext<FormValues>();
  const { selectedHelpOption } = useSelectedHelpOption();
  const { t } = useTranslation();

  useEffect(() => {
    validateForm();
  }, [selectedHelpOption, validateForm]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFieldValue("shelter", event.target.value);
    if (selectedHelpOption !== 1) {
      setFieldValue("shelter_error", "");
    }
  };
  return (
    <FormInputStyled value={values.shelter} type={"select"}>
      <p>{label}</p>
      <img
        src={"/icon/dropdown.png"}
        alt={"dropdown arrow"}
        className="dropdown-arrow"
      />
      <span className="required">
        {selectedHelpOption === 1
          ? t("forms.required")
          : t("forms.notRequired")}
      </span>
      <Field
        as="select"
        {...props}
        className={"test"}
        value={values.shelter}
        onChange={handleChange}
      >
        <option className="option-placeholder" value={""}>
          {placeholder}
        </option>
        {children}
      </Field>
      <ErrorMessageStyled
        name={props.name}
        component="div"
        className="error-message"
      />
    </FormInputStyled>
  );
};
