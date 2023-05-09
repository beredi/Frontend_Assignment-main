import { AmountCardGroupStyled } from "./styled/AmountCard.styled";
import { AmountCard } from "./AmountCard";
import { useSelectAmount } from "../../hooks/useSelectAmount";

export const AmountCardGroup = () => {
  const { setSelectedAmount, isAmountSelected } = useSelectAmount();
  return (
    <AmountCardGroupStyled>
      <AmountCard
        amount={5}
        selected={isAmountSelected("5")}
        onClick={() => setSelectedAmount("5")}
      />
      <AmountCard
        amount={10}
        selected={isAmountSelected("10")}
        onClick={() => setSelectedAmount("10")}
      />
      <AmountCard
        amount={20}
        selected={isAmountSelected("20")}
        onClick={() => setSelectedAmount("20")}
      />
      <AmountCard
        amount={30}
        selected={isAmountSelected("30")}
        onClick={() => setSelectedAmount("30")}
      />
      <AmountCard
        amount={50}
        selected={isAmountSelected("50")}
        onClick={() => setSelectedAmount("50")}
      />
      <AmountCard
        amount={100}
        selected={isAmountSelected("100")}
        onClick={() => setSelectedAmount("100")}
      />
      <AmountCard
        selected={isAmountSelected("custom")}
        onClick={() => setSelectedAmount("custom")}
        customAmount={true}
      />
    </AmountCardGroupStyled>
  );
};
