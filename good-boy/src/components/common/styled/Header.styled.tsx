import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #9f9f9f;
  font-size: 14px;

  img {
    opacity: 1;

    &:hover {
      opacity: 0.7;
    }
  }

  span.title {
    font-weight: bold;
  }
`;
