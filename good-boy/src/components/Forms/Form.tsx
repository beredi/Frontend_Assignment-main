import { FormStepper } from "./FormStepper";
import { FormStep } from "./FormStep";
import { useTranslation } from "react-i18next";
import { FormInput } from "../common/Forms/FormInput";
import { FormPhoneInput } from "../common/Forms/FormPhoneInput";
import { Checkbox } from "../common/Forms/Checkbox";
import { BoldParagraphStyled } from "../common/styled/BoldParagraph.styled";
import { FormGroupStyled } from "./styled/FormGroup.styled";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Shelter } from "../../types/shelters";
import { useSelectedHelpOption } from "../../hooks/useSelectedHelpOption";
import {
  validateSelectShelter,
  validationSchema2,
  validationSchemaStep3,
} from "./validators/validators";
import { ShelterSelectField } from "./ShelterSelectField";
import { FormSummary } from "./FormSummary";
import { useSubmitForm } from "../../hooks/useSubmitForm";
import { FormStepStyled } from "./styled/FormStep.styled";
import { AmountCardGroup } from "./AmountCardGroup";
import { CardGroup } from "./CardGroup";

export const Form = () => {
  const shelters = useSelector((state: RootState) => state.shelters);
  const { t } = useTranslation();
  const { submitForm } = useSubmitForm();
  const { selectedHelpOption } = useSelectedHelpOption();

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
        <FormStepStyled>
          <CardGroup />
          <BoldParagraphStyled>{t("links.about")}</BoldParagraphStyled>
          <ShelterSelectField
            name="shelter"
            label={t("forms.selectLabel")}
            placeholder={t("forms.selectPlaceholder")}
            validate={(value: string) =>
              validateSelectShelter(
                value,
                t("forms.selectRequired"),
                selectedHelpOption
              )
            }
          >
            {shelters &&
              shelters.map((shelter: Shelter) => (
                <option value={shelter.id} key={shelter.name}>
                  {shelter.name}
                </option>
              ))}
          </ShelterSelectField>
          <FormGroupStyled>
            <BoldParagraphStyled>{t("forms.amountToHelp")}</BoldParagraphStyled>
            <AmountCardGroup />
          </FormGroupStyled>
        </FormStepStyled>
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
      </FormStep>
      <FormStep
        title={t("forms.title3")}
        validationSchema={validationSchemaStep3(t("forms.agreeMessage"))}
      >
        <FormStepStyled>
          <FormSummary />
          <Checkbox name="agree" label={t("forms.agreement")} />
        </FormStepStyled>
      </FormStep>
    </FormStepper>
  );
};
