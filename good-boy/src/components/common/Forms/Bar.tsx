import {
  BarActiveLineStyled,
  BarLineStyled,
  BarStyled,
} from "../styled/Bar.styled";

import React from "react";

interface Props {
  actualStep: number;
}
export const Bar = ({ actualStep }: Props) => {
  const lines = [];
  for (let i = 0; i <= 2; i++) {
    lines.push(
      <React.Fragment key={i}>
        {i === actualStep ? <BarActiveLineStyled /> : <BarLineStyled />}
      </React.Fragment>
    );
  }
  return <BarStyled>{lines}</BarStyled>;
};
