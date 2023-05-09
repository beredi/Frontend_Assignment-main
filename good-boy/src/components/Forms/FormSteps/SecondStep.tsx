import { useTranslation } from "react-i18next";
import { FormStepStyled } from "../styled/FormStep.styled";
import { FormInput } from "../../common/Forms/FormInput";
import { FormPhoneInput } from "../../common/Forms/FormPhoneInput";

export const SecondStep = () => {
  const { t } = useTranslation();

  return (
    <FormStepStyled>
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
      <FormPhoneInput name="phone" label={t("forms.phone")} />
    </FormStepStyled>
  );
};
