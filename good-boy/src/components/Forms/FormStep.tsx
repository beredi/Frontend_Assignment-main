import { FormikConfig, FormikValues } from "formik";
import { BoldParagraphStyled } from "../common/styled/BoldParagraph.styled";
import { FormTitle } from "./FormTitle";

export interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, "children" | "validationSchema"> {
  title: string;
  description?: string;
}
export const FormStep = ({ title, description, children }: FormikStepProps) => {
  return (
    <>
      <FormTitle text={title} />
      {description ? (
        <BoldParagraphStyled>{description}</BoldParagraphStyled>
      ) : null}
      {children}
    </>
  );
};
