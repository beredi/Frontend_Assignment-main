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
};
