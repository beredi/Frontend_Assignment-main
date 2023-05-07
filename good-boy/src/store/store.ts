import { configureStore } from "@reduxjs/toolkit";
import { sheltersReducer } from "./reducers/sheltersReducer";

export const store = configureStore({
  reducer: {
    shelters: sheltersReducer,
  },
});
