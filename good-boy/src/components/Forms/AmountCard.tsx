import {
  AmountCardStyled,
  AmountInputStyled,
} from "./styled/AmountCard.styled";
import { useState } from "react";
import React from "react";

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
  const [customValue, setCustomValue] = useState<number | undefined>(undefined);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = e.target.value;
    const regex = /^[0-9]*\.?[0-9]*$/; // regex to allow only decimal numbers

    if (inputVal === "") {
      setCustomValue(undefined);
    } else if (regex.test(inputVal)) {
      const parsedValue = parseFloat(inputVal);
      if (!isNaN(parsedValue) && parsedValue >= 0) {
        const roundedValue = parseFloat(parsedValue.toFixed(2));
        setCustomValue(roundedValue);
      }
    }
  };

  const getAmount = () => {
    if (customAmount) {
      return (
        <AmountInputStyled
          type="number"
          min={0}
          value={customValue ?? ""}
          onChange={handleInputChange}
          step="0.01"
        />
      );
    } else {
      return amount ? amount : 0;
    }
  };
  return (
    <AmountCardStyled selected={selected} onClick={onClick}>
      {getAmount()} €
    </AmountCardStyled>
  );
};
