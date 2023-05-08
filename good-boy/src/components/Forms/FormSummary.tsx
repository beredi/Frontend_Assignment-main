import { useFormikContext } from "formik";
import { FormSummaryDetail } from "./FormSummaryDetail";
import { useTranslation } from "react-i18next";
import { usePhoneCountry } from "../../hooks/usePhoneCountry";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Shelter } from "../../types/shelters";
import { useSelectedHelpOption } from "../../hooks/useSelectedHelpOption";
import { FormData } from "../../types/form";
import { useSelectAmount } from "../../hooks/useSelectAmount";

export const FormSummary = () => {
  const { t } = useTranslation();
  const {
    values: {
      name,
      lastname,
      email,
      phone,
      shelter: shelterId,
      amount: amountValue,
    },
  } = useFormikContext<FormData>();
  const {
    phoneCountry: { number: prefix },
  } = usePhoneCountry();
  const { selectedHelpOption } = useSelectedHelpOption();
  const { selectedAmount } = useSelectAmount();

  const shelter: Shelter | undefined = useSelector((state: RootState) =>
    state.shelters.find((shelter) => shelter.id === parseInt(shelterId))
  );

  const amount: string =
    (selectedAmount !== "custom" ? selectedAmount : amountValue) + " €";
  const phoneNumber: string = prefix + phone;
  const fullName: string = name ? name + " " + lastname : lastname;
  const helpOption =
    selectedHelpOption === 1
      ? t("forms.firstCardText")
      : t("forms.secondCardText");

  return (
    <div>
      <FormSummaryDetail field={t("forms.helpOption")} value={helpOption} />
      {shelter && (
        <FormSummaryDetail
          field={t("forms.chosenShelter")}
          value={shelter?.name ?? ""}
        />
      )}
      <FormSummaryDetail field={t("forms.amountToHelp")} value={amount} />
      <FormSummaryDetail field={t("forms.fullName")} value={fullName} />
      <FormSummaryDetail field={t("forms.email")} value={email} />
      {phone && (
        <FormSummaryDetail field={t("forms.phone")} value={phoneNumber} />
      )}
    </div>
  );
};
