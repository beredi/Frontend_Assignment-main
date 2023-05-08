import { AmountType } from "../components/Forms/AmountCard";

export type SelectedCardType = 1 | 2;

export type PhoneCountryLabelType = "sk" | "cz";
export type PhoneCountryType = {
  label: PhoneCountryLabelType;
  number: string;
  image: string;
};

export const PhoneSK: PhoneCountryType = {
  label: "sk",
  number: "+421",
  image: "/flags/sk.png",
};
export const PhoneCZ: PhoneCountryType = {
  label: "cz",
  number: "+420",
  image: "/flags/cz.png",
};

export type FormDataType = {
  selectedHelpOption: SelectedCardType;
  phoneCountry: PhoneCountryType;
  selectedAmount: AmountType;
  formStep: number;
};

export interface FormData {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  agree: boolean;
  shelter: string;
  amount: string;
}

export interface SubmitFormData {
  firstName?: string;
  lastName: string;
  email: string;
  phone?: string;
  value: number;
  shelterID?: number;
}
