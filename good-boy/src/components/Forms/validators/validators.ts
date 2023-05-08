import * as Yup from "yup";
import { AmountType } from "../AmountCard";
import { SelectedCardType } from "../../../types/form";

export const validateSelectShelter = (
  value: string,
  errorMessage: string,
  selectedHelpOption: SelectedCardType
) => {
  if (selectedHelpOption === 1) {
    if (!value || value === "") {
      return errorMessage;
    }
  }
  return undefined;
};

export const validateCustomAmount = (
  value: string,
  errorMessage: string,
  selectedAmount: AmountType
) => {
  if (selectedAmount === "custom") {
    if (!value || value === "" || value === "0") {
      return errorMessage;
    }
  }
  return undefined;
};

export const validationSchemaStep3 = (message: string) =>
  Yup.object().shape({
    agree: Yup.bool().oneOf([true], message),
  });

export const validationSchema2 = (
  nameCharacters: string,
  lastnameRequired: string,
  lastnameCharacters: string,
  invalidEmail: string,
  invalidPhone: string
) =>
  Yup.object().shape({
    name: Yup.string().min(2, nameCharacters).max(20, nameCharacters),
    lastname: Yup.string()
      .required(lastnameRequired)
      .min(2, lastnameCharacters)
      .max(30, lastnameCharacters),
    email: Yup.string()
      .email(invalidEmail)
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
        invalidEmail
      ),
    phone: Yup.string().matches(/^[1-9]\d*$/, invalidPhone),
  });
