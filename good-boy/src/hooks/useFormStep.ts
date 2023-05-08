import { useDispatch, useSelector } from "react-redux";
import { editForm } from "../store/actions/formActions";
import { RootState } from "../store/store";

export const useFormStep = () => {
  const dispatch = useDispatch();
  const { formStep } = useSelector((state: RootState) => state.formData);

  const setFormStep = (formStep: number) => {
    dispatch(editForm("formStep", formStep));
  };

  return { formStep, setFormStep };
};
