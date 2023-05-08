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

export const validationSchema2 = () =>
  Yup.object().shape({
    name: Yup.string().min(2).max(20),
    lastname: Yup.string().required().min(2).max(30),
    email: Yup.string()
      .email("Invalid email address")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
        "Invalid email address"
      ),
    phone: Yup.string().matches(/^[1-9]\d*$/, "Invalid phone number"),
  });
