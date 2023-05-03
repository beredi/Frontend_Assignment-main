import {
  BarActiveLineStyled,
  BarLineStyled,
  BarStyled,
} from "../styled/Bar.styled";

export const Bar = () => {
  return (
    <BarStyled>
      <BarActiveLineStyled />
      <BarLineStyled />
      <BarLineStyled />
    </BarStyled>
  );
};
