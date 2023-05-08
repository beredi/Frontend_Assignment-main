import {
  AmountCardStyled,
  AmountCardWrapper,
  AmountInputStyled,
} from "./styled/AmountCard.styled";
import React from "react";
import { Field, useFormikContext } from "formik";
import { FormData } from "../../types/form";
import { validateCustomAmount } from "./validators/validators";
import { useTranslation } from "react-i18next";
import { useSelectAmount } from "../../hooks/useSelectAmount";
import { ErrorMessageStyled } from "../common/styled/ErrorMessage.styled";

export type AmountType = "5" | "10" | "20" | "30" | "50" | "100" | "custom";

interface Props {
  selected: boolean;
  amount?: number;
  customAmount?: boolean;
  onClick: () => void;
}

export const AmountCard = ({
  selected,
  amount,
  customAmount,
  onClick,
}: Props) => {
  const {
    values: { amount: amountFormValue = "" },
    setFieldValue,
  } = useFormikContext<FormData>();
  const { t } = useTranslation();
  const { selectedAmount } = useSelectAmount();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = e.target.value;
    const regex = /^[0-9]*\.?[0-9]*$/;

    if (inputVal === "") {
      setFieldValue("amount", "");
    } else if (regex.test(inputVal)) {
      const parsedValue = parseFloat(inputVal);
      if (!isNaN(parsedValue) && parsedValue >= 0) {
        const roundedValue = parseFloat(parsedValue.toFixed(2));
        setFieldValue("amount", roundedValue);
      }
    }
  };
  const getAmount = () => {
    if (customAmount) {
      return (
        <Field
          component={AmountInputStyled}
          type="number"
          min={0}
          name={"amount"}
          onChange={handleInputChange}
          step="0.01"
          value={amountFormValue}
          validate={(value: string) =>
            validateCustomAmount(
              value,
              t("forms.requiredAmount"),
              selectedAmount
            )
          }
        />
      );
    } else {
      return amount ? amount : 0;
    }
  };
  return (
    <AmountCardWrapper>
      <AmountCardStyled selected={selected} onClick={onClick}>
        {getAmount()} €
      </AmountCardStyled>
      {customAmount && (
        <ErrorMessageStyled
          name="amount"
          component="div"
          className="error-message"
        />
      )}
    </AmountCardWrapper>
  );
};
