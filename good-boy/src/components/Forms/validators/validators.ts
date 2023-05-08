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
