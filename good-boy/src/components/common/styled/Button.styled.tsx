import styled from "styled-components";

interface ButtonStyledProps {
  color: string;
  textColor: string;
  shadow: boolean;
  disabled?: boolean;
}

export const ButtonStyled = styled.div<ButtonStyledProps>`
  button {
    background: ${(props) => props.color};
    color: ${(props) => props.textColor};
    border-radius: 100px;
    box-shadow: ${(props) =>
      props.shadow
        ? "0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);"
        : "none"};
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 20px 24px;
    gap: 10px;
    border: 0;
    font-weight: 800;
    font-size: 14px;
    line-height: 19px;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    opacity: 1;
    &:hover {
      opacity: ${(props) => (props.disabled ? 1 : 0.9)};
    }
  }
`;

export const ButtonGroupStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 60px 0px;
  animation-name: zoomIn;
  animation-duration: 0.4s;
`;
