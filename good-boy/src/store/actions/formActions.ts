import * as actions from "../actionTypes";
import { PhoneCountryType } from "../../types/form";

export const resetForm = () => ({
  type: actions.RESET_FORM,
});

export const editForm = (
  field: string,
  value: string | number | PhoneCountryType
) => ({
  type: actions.EDIT_FORM,
  payload: {
    field,
    value,
  },
});
