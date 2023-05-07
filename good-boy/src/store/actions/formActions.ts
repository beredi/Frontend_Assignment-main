import * as actions from "../actionTypes";

export const resetForm = () => ({
  type: actions.RESET_FORM,
});

export const editForm = (field: string, value: number | string | boolean) => ({
  type: actions.EDIT_FORM,
  payload: {
    field,
    value,
  },
});
