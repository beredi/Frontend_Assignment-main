import { useState } from "react";
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

export const useSubmitForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const { selectedAmount } = useSelectAmount();
  const { selectedHelpOption } = useSelectedHelpOption();
  const {
    phoneCountry: { number: prefix },
  } = usePhoneCountry();
  const { t } = useTranslation();
  const { setFormStep } = useFormStep();

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
    setError(null);
    setSuccess(false);

    const preparedData = prepareDataForSubmit(values);

    axios
      .post(`${API_URL}/contribute`, preparedData)
      .then((response) => {
        setSuccess(response.data.messages[0].type === "SUCCESS");
        toast.success(t("forms.submitSuccess"), {
          autoClose: 2000,
          position: "top-center",
        });
        setTimeout(() => {
          setFormStep(0);
          resetForm();
          resetReduxForm();
        }, 2001);
      })
      .catch((error) => {
        console.log(error);
        toast.error(t("forms.submitError"), {
          autoClose: 2000,
          position: "top-center",
        });
        {
          setError(
            "There was an error submitting the form. Please try again later."
          );
        }
      });
  };

  return { prepareDataForSubmit, error, success, submitForm };
};
