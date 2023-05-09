import axios from "axios";
import { API_URL } from "../types/api";
import { SubmitFormData } from "../types/form";
import { FormikValues } from "formik";
import { useSelectAmount } from "./useSelectAmount";
import { useSelectedHelpOption } from "./useSelectedHelpOption";
import { usePhoneCountry } from "./usePhoneCountry";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useFormStep } from "./useFormStep";
import { resetForm as resetReduxForm } from "../store/actions/formActions";
import { useDispatch } from "react-redux";

export const useSubmitForm = () => {
  const { selectedAmount } = useSelectAmount();
  const { selectedHelpOption } = useSelectedHelpOption();
  const {
    phoneCountry: { number: prefix },
  } = usePhoneCountry();
  const { t } = useTranslation();
  const { setFormStep } = useFormStep();
  const dispatch = useDispatch();

  const prepareDataForSubmit = (values: FormikValues) => {
    const submitValues: SubmitFormData = {
      firstName: values.name,
      lastName: values.lastname,
      email: values.email,
      value:
        selectedAmount === "custom"
          ? parseFloat(values.amount)
          : parseInt(selectedAmount),
    };

    selectedHelpOption === 1 &&
      values.shelter &&
      (submitValues["shelterID"] = parseInt(values.shelter));

    values.phone && (submitValues["phone"] = prefix + values.phone);

    return submitValues;
  };

  const submitForm = async (values: FormikValues, resetForm: () => void) => {
    const preparedData = prepareDataForSubmit(values);

    axios
      .post(`${API_URL}/contribute`, preparedData)
      .then(() => {
        toast.success(t("forms.submitSuccess"), {
          autoClose: 2000,
          position: "top-center",
        });
        resetForm();
        dispatch(resetReduxForm());
        setTimeout(() => {
          setFormStep(0);
        }, 2001);
      })
      .catch((error) => {
        console.log(error);
        toast.error(t("forms.submitError"), {
          autoClose: 2000,
          position: "top-center",
        });
      });
  };

  return { submitForm };
};
