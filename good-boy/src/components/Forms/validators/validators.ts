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
