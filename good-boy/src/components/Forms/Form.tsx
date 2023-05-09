import { FormStepper } from "./FormStepper";
import { FormStep } from "./FormStep";
import { useTranslation } from "react-i18next";
import {
  validationSchema2,
  validationSchemaStep3,
} from "./validators/validators";
import { useSubmitForm } from "../../hooks/useSubmitForm";
import { SecondStep } from "./FormSteps/SecondStep";
import { FirstStep } from "./FormSteps/FirstStep";
import { ThirdStep } from "./FormSteps/ThirdStep";

export const Form = () => {
  const { t } = useTranslation();
  const { submitForm } = useSubmitForm();

  return (
    <FormStepper
      initialValues={{
        name: "",
        lastname: "",
        email: "",
        phone: "",
        agree: false,
        shelter: "",
        amount: "",
      }}
      onSubmit={async (values, formikHelpers) => {
        await submitForm(values, formikHelpers.resetForm);
      }}
    >
      <FormStep title={t("forms.title1")}>
        <FirstStep />
      </FormStep>
      <FormStep
        title={t("forms.title2")}
        description={t("forms.aboutYou") as string}
        validationSchema={validationSchema2(
          t("forms.nameCharacters"),
          t("forms.lastnameRequired"),
          t("forms.lastnameCharacters"),
          t("forms.invalidEmail"),
          t("forms.invalidPhone"),
          t("forms.requiredEmail"),
          t("forms.nameRequired")
        )}
      >
        <SecondStep />
      </FormStep>
      <FormStep
        title={t("forms.title3")}
        validationSchema={validationSchemaStep3(t("forms.agreeMessage"))}
      >
        <ThirdStep />
      </FormStep>
    </FormStepper>
  );
};
