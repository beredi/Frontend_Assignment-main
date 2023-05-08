import { useFormikContext } from "formik";
import { FormSummaryDetail } from "./FormSummaryDetail";
import { useTranslation } from "react-i18next";
import { usePhoneCountry } from "../../hooks/usePhoneCountry";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Shelter } from "../../types/shelters";
import { useSelectedHelpOption } from "../../hooks/useSelectedHelpOption";

interface FormData {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  agree: boolean;
  shelter: string;
}

export const FormSummary = () => {
  const { t } = useTranslation();
  const {
    values: { name, lastname, email, phone, shelter: shelterId },
  } = useFormikContext<FormData>();
  const {
    phoneCountry: { number: prefix },
  } = usePhoneCountry();
  const { selectedHelpOption } = useSelectedHelpOption();

  const shelter: Shelter | undefined = useSelector((state: RootState) =>
    state.shelters.find((shelter) => shelter.id === parseInt(shelterId))
  );

  const phoneNumber: string = prefix + phone;
  const fullName: string = name + " " + lastname;
  const helpOption =
    selectedHelpOption === 1
      ? t("forms.firstCardText")
      : t("forms.secondCardText");

  return (
    <div>
      <FormSummaryDetail field={t("forms.helpOption")} value={helpOption} />
      <FormSummaryDetail
        field={t("forms.chosenShelter")}
        value={shelter?.name ?? ""}
      />
      <FormSummaryDetail
        field={t("forms.amountToHelp")}
        value={"This is my name"}
      />
      <FormSummaryDetail field={t("forms.fullName")} value={fullName} />
      <FormSummaryDetail field={t("forms.email")} value={email} />
      <FormSummaryDetail field={t("forms.phone")} value={phoneNumber} />
    </div>
  );
};
