import styled from "styled-components";

interface FormInputStyledProps {
  type?: string;
  value?: string;
}

export const FormInputStyled = styled.div<FormInputStyledProps>`
  position: relative;
  margin: 16px 0;
  input,
  select {
    border: 1px solid #dfdfdf;
    box-sizing: border-box;
    border-radius: 8px;
    width: 100%;
    height: 74px;
    padding: 37px 24px 16px 24px;
    font-size: 16px;
    line-height: 21px;
    color: ${(props) =>
      props.type === "select"
        ? props.value
          ? "#2f2f2f"
          : "#9f9f9f"
        : "#2f2f2f"};
    background: #ffffff;
    &:focus {
      border: 1px solid #cd8b65;
      outline: none;
    }
    &::placeholder {
      color: #9f9f9f;
    }
    option {
      color: #2f2f2f;
    }
    option.option-placeholder {
      color: #9f9f9f;
    }
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
  }

  select:invalid:not(:focus) {
    color: red; /* set the color of the select when the first option is selected */
  }

  img.dropdown-arrow {
    position: absolute;
    right: 35px;
    top: 50%;
    pointer-events: none;
  }

  p {
    position: absolute;
    left: 24px;
    font-weight: 800;
    font-size: 16px;
    line-height: 21px;
    color: #2f2f2f;
  }

  span.required {
    position: absolute;
    right: 0;
    top: -30px;
    font-weight: 800;
    font-size: 14px;
    line-height: 19px;
    color: #2f2f2f;
    opacity: 0.8;
  }
`;
