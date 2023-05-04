import { FormStepper } from "./FormStepper";
import { FormStep } from "./FormStep";
import { useTranslation } from "react-i18next";
import { FormInput } from "../common/Forms/FormInput";
import { FormPhoneInput } from "../common/Forms/FormPhoneInput";
import { FormSummaryDetail } from "./FormSummaryDetail";
import { Checkbox } from "../common/Forms/Checkbox";

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
        <FormPhoneInput
          name="phone"
          label={t("forms.phone")}
          placeholder={t("forms.enterPhone") as string}
        />
      </FormStep>
      <FormStep title={t("forms.title3")}>
        <FormSummaryDetail
          field={t("forms.helpOption")}
          value={"This is my name"}
        />
        <FormSummaryDetail
          field={t("forms.chosenShelter")}
          value={"This is my name"}
        />
        <FormSummaryDetail
          field={t("forms.amountToHelp")}
          value={"This is my name"}
        />
        <FormSummaryDetail
          field={t("forms.fullName")}
          value={"This is my name"}
        />
        <FormSummaryDetail field={t("forms.email")} value={"This is my name"} />
        <FormSummaryDetail field={t("forms.phone")} value={"This is my name"} />
        <Checkbox label={t("forms.agreement")} />
      </FormStep>
    </FormStepper>
  );
};
