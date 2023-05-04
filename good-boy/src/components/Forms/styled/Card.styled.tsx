import styled from "styled-components";
import { CardPosition } from "../Card";
interface CardStyledProps {
  selected: boolean;
  position: CardPosition;
}
export const CardStyled = styled.div<CardStyledProps>`
  background: ${(props) =>
    props.selected
      ? "linear-gradient(180deg, #CD8B65 0%, #BB6B3D 100%);"
      : "#faf9f9"};
  border: 1px solid #cd8b65;
  border-radius: ${(props) =>
    props.position === "right" ? "0px 24px 24px 0px;" : "24px 0px 0px 24px"};
  box-shadow: ${(props) =>
    !props.selected
      ? "none"
      : "0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802)"};
  width: 50%;
  margin: 0;
  padding: 25px;
  cursor: ${(props) => (props.selected ? "" : "pointer")};
  p {
    font-weight: 600;
    font-size: 16px;
    line-height: 21px;
    color: ${(props) => (props.selected ? "#FFFFFF" : "#585757")};
  }
  img {
    border-radius: 50%;
  }
`;
export const CardGroupStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0;
  padding: 28px 0;
`;
