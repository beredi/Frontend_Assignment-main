import styled from "styled-components";

export const CheckboxStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding-top: 52px;
  span {
    margin-left: 10px;
    color: #2f2f2f;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
  }
  input {
    margin: 0;
    appearance: none;
    background: #ffffff;
    border: 1px solid #f3e2d9;
    border-radius: 8px;
    width: 34px;
    height: 34px;
    position: relative;
    &:checked {
      &::before {
        content: "\\2713";
        color: #ab7455;
        font-weight: 800;
        position: absolute;
        font-size: 16px;
        top: 30%;
        left: 45%;
        transform: translate(-50%, -50%);
        width: 6px;
        height: 12px;
        transform-origin: bottom;
        animation: checkmark 0.2s ease-in-out;
      }
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px #f3e2d9;
      border: 1px solid #f3e2d9;
    }

    @keyframes checkmark {
      0% {
        transform: translate(-50%, -50%) rotate(-45deg) scale(0.1, 0.1);
        opacity: 0;
      }
      50% {
        transform: translate(-50%, -50%) rotate(-45deg) scale(0.5, 0.5);
        opacity: 1;
      }
      100% {
        transform: translate(-50%, -50%) rotate(-45deg) scale(1, 1);
        opacity: 1;
      }
    }
  }
`;
