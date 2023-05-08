import { AmountType } from "../components/Forms/AmountCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { editForm } from "../store/actions/formActions";

export const useSelectAmount = () => {
  const { selectedAmount } = useSelector((state: RootState) => state.formData);
  const dispatch = useDispatch();

  const isAmountSelected = (amountOfCard: AmountType) => {
    return amountOfCard === selectedAmount;
  };

  const setSelectedAmount = (selectAmount: AmountType) => {
    dispatch(editForm("selectedAmount", selectAmount));
  };

  return { selectedAmount, isAmountSelected, setSelectedAmount };
};
