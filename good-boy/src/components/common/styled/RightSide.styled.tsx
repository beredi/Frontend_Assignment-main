import styled from "styled-components";

export const RightSideStyled = styled.div`
  animation: slide-right 0.3s forwards;

  @keyframes slide-right {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  @media screen and (max-width: 992px) {
    display: none;
  }
`;
