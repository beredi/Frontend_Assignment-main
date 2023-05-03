import React from "react";
import { FooterElementStyled } from "../styled/Footer.styled";

interface Props {
  title?: string;
  children: string | JSX.Element | JSX.Element[];
}

export const FooterElement = ({ title, children }: Props) => {
  return (
    <FooterElementStyled>
      {title && <div className="title">{title}</div>}
      <div className="children">{children}</div>
    </FooterElementStyled>
  );
};
