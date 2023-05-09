import { Form, Formik, FormikConfig, FormikValues } from "formik";
import React, { ReactNode } from "react";
import { FormikStepProps } from "./FormStep";
import { Bar } from "../common/Forms/Bar";
import { Button } from "../common/Forms/Button";
import { ButtonGroupStyled } from "../common/styled/Button.styled";
import { useTranslation } from "react-i18next";
import { useFormStep } from "../../hooks/useFormStep";

export const FormStepper = ({
  children,
  ...props
}: FormikConfig<FormikValues>) => {
  const childrenArray = React.Children.toArray(
    children as ReactNode
  ) as React.ReactElement<FormikStepProps>[];
  const { formStep, setFormStep } = useFormStep();
  const currentChild = childrenArray[formStep];
  const { t } = useTranslation();

  const isLastStep = () => {
    return formStep === childrenArray.length - 1;
  };
  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
        } else {
          setFormStep(formStep + 1);
          helpers.setTouched({});
        }
      }}
    >
      {() => (
        <Form autoComplete="off">
          <Bar actualStep={formStep} />
          {currentChild}
          <ButtonGroupStyled>
            <div>
              {formStep > 0 ? (
                <Button
                  label={t("forms.back")}
                  color="secondary"
                  type="button"
                  onClick={() => setFormStep(formStep - 1)}
                />
              ) : null}
            </div>
            <Button
              label={isLastStep() ? t("forms.submit") : t("forms.next")}
              color={"primary"}
              shadow={true}
              textColor="light"
              type="submit"
            />
          </ButtonGroupStyled>
        </Form>
      )}
    </Formik>
  );
};
