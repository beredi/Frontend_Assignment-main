import { FormStepper } from "./FormStepper";
import { FormStep } from "./FormStep";
import { useTranslation } from "react-i18next";
import { FormInput } from "../common/Forms/FormInput";
import { FormPhoneInput } from "../common/Forms/FormPhoneInput";
import { FormSummaryDetail } from "./FormSummaryDetail";
import { Checkbox } from "../common/Forms/Checkbox";
import { Card } from "./Card";
import { CardGroupStyled } from "./styled/Card.styled";
import { BoldParagraphStyled } from "../common/styled/BoldParagraph.styled";
import { useState } from "react";
import { AmountCard, AmountType } from "./AmountCard";
import { AmountCardGroup } from "./styled/AmountCard.styled";
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

export const Form = () => {
  const [selectedAmount, setSelectedAmount] = useState<AmountType>("50");
  const shelters = useSelector((state: RootState) => state.shelters);
  const { setCardSelected, isCardSelected, selectedHelpOption } =
    useSelectedHelpOption();
  const { t } = useTranslation();

  const isAmountSelected = (amountOfCard: AmountType) => {
    return amountOfCard === selectedAmount;
  };

  return (
    <FormStepper
      initialValues={{
        name: "",
        lastname: "",
        email: "",
        phone: "",
        agree: false,
        shelter: "",
      }}
      onSubmit={async (values) => {
        console.log("values", values);
      }}
    >
      <FormStep title={t("forms.title1")}>
        <CardGroupStyled>
          <Card
            position="left"
            text={t("forms.firstCardText")}
            icon={
              isCardSelected(1)
                ? "/icon/wallet-selected.png"
                : "/icon/wallet.png"
            }
            selected={isCardSelected(1)}
            onClick={() => setCardSelected(1)}
          />
          <Card
            position="right"
            text={t("forms.secondCardText")}
            icon={
              isCardSelected(2) ? "/icon/paw-selected.png" : "/icon/paw.png"
            }
            selected={isCardSelected(2)}
            onClick={() => setCardSelected(2)}
          />
        </CardGroupStyled>
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
          <AmountCardGroup>
            <AmountCard
              amount={5}
              selected={isAmountSelected("5")}
              onClick={() => setSelectedAmount("5")}
            />
            <AmountCard
              amount={10}
              selected={isAmountSelected("10")}
              onClick={() => setSelectedAmount("10")}
            />
            <AmountCard
              amount={20}
              selected={isAmountSelected("20")}
              onClick={() => setSelectedAmount("20")}
            />
            <AmountCard
              amount={30}
              selected={isAmountSelected("30")}
              onClick={() => setSelectedAmount("30")}
            />
            <AmountCard
              amount={50}
              selected={isAmountSelected("50")}
              onClick={() => setSelectedAmount("50")}
            />
            <AmountCard
              amount={100}
              selected={isAmountSelected("100")}
              onClick={() => setSelectedAmount("100")}
            />
            <AmountCard
              selected={isAmountSelected("custom")}
              onClick={() => setSelectedAmount("custom")}
              customAmount={true}
            />
          </AmountCardGroup>
        </FormGroupStyled>
      </FormStep>
      <FormStep
        title={t("forms.title2")}
        description={t("forms.aboutYou") as string}
        validationSchema={validationSchema2()}
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
        <FormPhoneInput name="phone" label={t("forms.phone")} />
      </FormStep>
      <FormStep
        title={t("forms.title3")}
        validationSchema={validationSchemaStep3(t("forms.agreeMessage"))}
      >
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
        <Checkbox name="agree" label={t("forms.agreement")} />
      </FormStep>
    </FormStepper>
  );
};
