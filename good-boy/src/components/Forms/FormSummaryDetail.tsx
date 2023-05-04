import { FormSummaryDetailStyled } from "./styled/FormSummaryDetail.styled";

interface Props {
  field: string;
  value: string;
}

export const FormSummaryDetail = ({ field, value }: Props) => {
  return (
    <FormSummaryDetailStyled>
      <p className="field">{field}</p>
      <p className="value">{value}</p>
    </FormSummaryDetailStyled>
  );
};
