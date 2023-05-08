import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { editForm } from "../store/actions/formActions";
import { PhoneCountryType } from "../types/form";

export const usePhoneCountry = () => {
  const dispatch = useDispatch();
  const { phoneCountry } = useSelector((state: RootState) => state.formData);
  const setPhoneCountry = (value: PhoneCountryType) => {
    dispatch(editForm("phoneCountry", value));
  };

  return { phoneCountry, setPhoneCountry };
};
