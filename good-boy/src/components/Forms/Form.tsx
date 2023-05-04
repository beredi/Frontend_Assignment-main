import { FormStepper } from "./FormStepper";
import { FormStep } from "./FormStep";
import { useTranslation } from "react-i18next";
import { FormInput } from "../common/Forms/FormInput";

export const Form = () => {
  const { t } = useTranslation();
  return (
    <FormStepper
      initialValues={{
        name: "",
        lastname: "",
        email: "",
        phone: "",
      }}
      onSubmit={async (values) => {
        console.log("values", values);
      }}
    >
      <FormStep
        title={t("forms.title1")}
        description={t("links.about") as string}
      >
        <input type="text" />
      </FormStep>
      <FormStep
        title={t("forms.title2")}
        description={t("forms.aboutYou") as string}
      >
        <FormInput
          name="name"
          label={t("forms.name")}
          placeholder={t("forms.enterName") as string}
        />
        <FormInput
          name="lastname"
          label={t("forms.lastname")}
          placeholder={t("forms.enterLastname") as string}
        />
        <FormInput
          name="email"
          label={t("forms.email")}
          placeholder={t("forms.enterEmail") as string}
        />
        <FormInput name="phone" label={t("forms.phone")} />
      </FormStep>
      <FormStep title={t("forms.title3")}>
        <input type="text" />
        <input type="text" />
      </FormStep>
    </FormStepper>
  );
};
