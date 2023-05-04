import { CardStyled } from "./styled/Card.styled";

export type CardPosition = "left" | "right";

interface Props {
  position: CardPosition;
  text: string;
  icon: string;
  selected: boolean;
  onClick: () => void;
}

export const Card = ({ position, text, icon, selected, onClick }: Props) => {
  return (
    <CardStyled position={position} selected={selected} onClick={onClick}>
      <img src={icon} alt={text} />
      <p>{text}</p>
    </CardStyled>
  );
};
