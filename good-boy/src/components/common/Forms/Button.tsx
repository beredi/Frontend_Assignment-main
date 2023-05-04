import { ButtonStyled } from "../styled/Button.styled";
import React from "react";

export type buttonColors = "primary" | "secondary" | "grey";
export type textColors = "light" | "dark";
interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label: string;
  color?: buttonColors;
  textColor?: textColors;
  shadow?: boolean;
}

export const Button = ({
  label,
  color,
  textColor,
  shadow,
  ...props
}: Props) => {
  const generateButtonColor = () => {
    if (props.disabled) {
      return "#9F9F9F";
    } else {
      switch (color) {
        case "primary":
          return "linear-gradient(115.41deg, #CD8A64 -1.77%, #C4794F 73.03%)";
        case "secondary":
          return "#F3E2D9";
        default:
          return "#9F9F9F";
      }
    }
  };
  const generateTextColor = () => {
    if (props.disabled) {
      return "#FFFFFF";
    } else {
      switch (textColor) {
        case "light":
          return "#FFFFFF";
        default:
          return "#2F2F2F";
      }
    }
  };

  return (
    <ButtonStyled
      shadow={shadow ?? false}
      textColor={generateTextColor()}
      color={generateButtonColor()}
      disabled={props.disabled ?? false}
    >
      <button {...props}>{label}</button>
    </ButtonStyled>
  );
};
