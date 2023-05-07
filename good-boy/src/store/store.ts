import { configureStore } from "@reduxjs/toolkit";
import { sheltersReducer } from "./reducers/sheltersReducer";
import { Shelter } from "../types/shelters";
import { formReducers } from "./reducers/formReducers";
import { FormDataType } from "../types/form";

export const store = configureStore({
  reducer: {
    shelters: sheltersReducer,
    formData: formReducers,
  },
});

export type RootState = {
  shelters: Shelter[];
  formData: FormDataType;
};
