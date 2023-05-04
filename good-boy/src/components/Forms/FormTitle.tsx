import { FormTitleStyled } from "./styled/FormTitle.styled";

interface Props {
  text: string;
}

export const FormTitle = ({ text }: Props) => {
  return <FormTitleStyled>{text}</FormTitleStyled>;
};
