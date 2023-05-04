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

type SelectedCardType = 1 | 2;

export const Form = () => {
  const [cardSelected, setCardSelected] = useState<SelectedCardType>(1);
  const { t } = useTranslation();

  const isCardSelected = (numberOfCard: SelectedCardType) => {
    return numberOfCard === cardSelected;
  };

  return (
    <FormStepper
      initialValues={{
        name: "",
        lastname: "",
        email: "",
        phone: "",
        agree: false,
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
        <Checkbox name="agree" label={t("forms.agreement")} />
      </FormStep>
    </FormStepper>
  );
};
