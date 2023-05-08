import styled from "styled-components";

export const BarStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  padding: 10px 0;
  div {
    margin-right: 5px;
  }
  @media screen and (max-width: 992px) {
    justify-content: center;
  }
`;

export const BarActiveLineStyled = styled.div`
  border-radius: 10px;
  height: 6px;
  width: 43.77px;
  background: linear-gradient(
      94.75deg,
      rgba(0, 0, 0, 0.24) 0%,
      rgba(0, 0, 0, 0) 100.7%
    ),
    #cd8b65;
  animation-name: zoomIn;
  animation-duration: 0.3s;

  @keyframes zoomIn {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`;

export const BarLineStyled = styled.div`
  border-radius: 10px;
  height: 6px;
  width: 20.6px;
  background: #9f9f9f;
  opacity: 0.36;
`;
