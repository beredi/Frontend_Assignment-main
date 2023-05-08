import * as Yup from "yup";

export const validateSelectShelter = (
  value: string,
  errorMessage: string,
  selectedHelpOption: number
) => {
  if (selectedHelpOption === 1) {
    if (!value || value === "") {
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
