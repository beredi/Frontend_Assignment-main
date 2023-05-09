import styled from "styled-components";

export const FormStepStyled = styled.div`
  animation: slide-left 0.3s forwards;

  @keyframes slide-left {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;
