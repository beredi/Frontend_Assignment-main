export type SelectedCardType = 1 | 2;

export type PhoneCountryType = "sk" | "cz";

export type FormDataType = {
  selectedHelpOption: SelectedCardType;
  phoneCountry: PhoneCountryType;
};
