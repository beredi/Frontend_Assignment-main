import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { SelectedCardType } from "../types/form";
import { editForm } from "../store/actions/formActions";

export const useSelectedHelpOption = () => {
  const dispatch = useDispatch();
  const { selectedHelpOption } = useSelector(
    (state: RootState) => state.formData
  );
  const isCardSelected = (numberOfCard: SelectedCardType) => {
    return numberOfCard === selectedHelpOption;
  };
  const setCardSelected = (value: number) => {
    dispatch(editForm("selectedHelpOption", value));
  };

  return { selectedHelpOption, isCardSelected, setCardSelected };
};
