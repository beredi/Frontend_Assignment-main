import styled from "styled-components";

export const FormInputStyled = styled.div`
  position: relative;
  margin: 16px 0;
  input {
    border: 1px solid #dfdfdf;
    box-sizing: border-box;
    border-radius: 8px;
    width: 100%;
    height: 74px;
    padding: 37px 24px 16px 24px;
    font-size: 16px;
    line-height: 21px;
    color: #2f2f2f;
    &:focus {
      border: 1px solid #cd8b65;
      outline: none;
    }
    &::placeholder {
      color: #9f9f9f;
    }
  }
  p {
    position: absolute;
    left: 24px;
    font-weight: 800;
    font-size: 16px;
    line-height: 21px;
    color: #2f2f2f;
  }
`;
