import { useState } from "react";
import axios from "axios";
import { API_URL } from "../types/api";
import { SubmitFormData } from "../types/form";
import { FormikValues } from "formik";
import { useSelectAmount } from "./useSelectAmount";
import { useSelectedHelpOption } from "./useSelectedHelpOption";
import { usePhoneCountry } from "./usePhoneCountry";

type ResponseType = "SUCCESS" | "ERROR";

export const useSubmitForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const { selectedAmount } = useSelectAmount();
  const { selectedHelpOption } = useSelectedHelpOption();
  const {
    phoneCountry: { number: prefix },
  } = usePhoneCountry();

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

  const submitForm = async (values: FormikValues) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    const preparedData = prepareDataForSubmit(values);

    axios
      .post(`${API_URL}/contribute`, preparedData)
      .then((response) => {
        setSuccess(response.data.messages[0].type === "SUCCESS");
      })
      .catch((error) => {
        console.log(error);
        {
          setError(
            "There was an error submitting the form. Please try again later."
          );
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { prepareDataForSubmit, error, success, submitForm };
};
