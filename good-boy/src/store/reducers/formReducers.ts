import { FormDataType } from "../../types/form";
import * as actions from "./../actionTypes";
import { Reducer, AnyAction } from "redux";

type FormActions = {
  type: string;
  payload: { field: string; value: FormDataType };
};

const initialFormData: FormDataType = {
  selectedHelpOption: 2,
  phoneCountry: "sk",
};

export const formReducers: Reducer<FormDataType, FormActions | AnyAction> = (
  state: FormDataType = initialFormData,
  action: FormActions | AnyAction
): FormDataType => {
  switch (action.type) {
    case actions.RESET_FORM:
      return initialFormData;
    case actions.EDIT_FORM:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    default:
      return state;
  }
};
