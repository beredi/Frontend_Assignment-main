import { Form, Formik, FormikConfig, FormikValues } from "formik";
import React, { ReactNode, useState } from "react";
import { FormikStepProps } from "./FormStep";
import { Bar } from "../common/Forms/Bar";
import { Button } from "../common/Forms/Button";
import { ButtonGroupStyled } from "../common/styled/Button.styled";
import { useTranslation } from "react-i18next";

export const FormStepper = ({
  children,
  ...props
}: FormikConfig<FormikValues>) => {
  const childrenArray = React.Children.toArray(
    children as ReactNode
  ) as React.ReactElement<FormikStepProps>[];
  const [step, setStep] = useState<number>(0);
  const currentChild = childrenArray[step];
  const [completed, setCompleted] = useState<boolean>(false);
  const { t } = useTranslation();

  const isLastStep = () => {
    return step === childrenArray.length - 1;
  };
  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          setCompleted(true);
        } else {
          setStep((s) => s + 1);
          console.log(values);
          helpers.setTouched({});
        }
      }}
    >
      {({}) => (
        <Form autoComplete="off">
          <Bar actualStep={step} />
          {currentChild}
          <ButtonGroupStyled>
            <div>
              {step > 0 ? (
                <Button
                  label={t("forms.back")}
                  color="secondary"
                  type="button"
                  onClick={() => setStep((step) => step - 1)}
                />
              ) : null}
            </div>
            <Button
              label={isLastStep() ? t("forms.submit") : t("forms.next")}
              color={"primary"}
              //disabled={!isValid}
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
