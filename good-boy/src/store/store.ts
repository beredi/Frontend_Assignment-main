import { configureStore } from "@reduxjs/toolkit";
import { sheltersReducer } from "./reducers/sheltersReducer";
import { Shelter } from "../types/shelters";

export const store = configureStore({
  reducer: {
    shelters: sheltersReducer,
  },
});

export type RootState = {
  shelters: Shelter[];
};
