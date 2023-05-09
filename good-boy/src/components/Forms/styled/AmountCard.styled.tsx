import styled from "styled-components";

interface AmountCardStyledProps {
  selected: boolean;
}

export const AmountCardStyled = styled.div<AmountCardStyledProps>`
  padding: 16px;
  gap: 10px;
  border: 1px solid #dfdfdf;
  border-radius: 8px;
  background: ${(props) =>
    props.selected
      ? "linear-gradient(115.41deg, #CD8A64 -1.77%, #C4794F 73.03%)"
      : "#FFFFFF"};
  color: ${(props) => (props.selected ? "#FFFFFF" : "#2f2f2f")};
  font-weight: 800;
  font-size: 16px;
  line-height: 21px;
  cursor: ${(props) => (props.selected ? "" : "pointer")};

  input {
    color: ${(props) => (props.selected ? "#FFFFFF" : "#2f2f2f")};
  }

  &:hover {
    background: ${(props) =>
      props.selected
        ? "linear-gradient(115.41deg, #CD8A64 -1.77%, #C4794F 73.03%)"
        : "#eceaea"};
    border: 1px solid #cd8b65;
  }
`;

export const AmountInputStyled = styled.input`
  border: none;
  border-bottom: 1px solid #dfdfdf;
  font-weight: 800;
  font-size: 16px;
  line-height: 21px;
  width: 86px;
  background: transparent;
  color: inherit;
  text-align: right;

  &:focus {
    outline: none;
    border-bottom: 1px solid #cd8b65;
  }

  @media screen and (max-width: 992px) {
    width: 95%;
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`;

export const AmountCardGroupStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 15px 0px;
  margin: 0;
  gap: 7px;
  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export const AmountCardWrapper = styled.div`
  position: relative;
  div.error-message {
    position: absolute;
  }

  @media screen and (max-width: 992px) {
    width: 100%;
    margin: 2px 0px;
  }
`;
