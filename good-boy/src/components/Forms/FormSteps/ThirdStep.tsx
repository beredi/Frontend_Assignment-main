import { FormStepStyled } from "../styled/FormStep.styled";
import { FormSummary } from "../FormSummary";
import { Checkbox } from "../../common/Forms/Checkbox";
import { useTranslation } from "react-i18next";

export const ThirdStep = () => {
  const { t } = useTranslation();

  return (
    <FormStepStyled>
      <FormSummary />
      <Checkbox name="agree" label={t("forms.agreement")} />
    </FormStepStyled>
  );
};
