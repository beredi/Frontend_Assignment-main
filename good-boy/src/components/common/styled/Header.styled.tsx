import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #9f9f9f;
  font-size: 14px;

  img {
    opacity: 1;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  span.title {
    font-weight: bold;
  }
`;

export const HeaderButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  * {
    margin: 0px 4px;
  }
  button {
    text-decoration: none;
    color: #585757;
    opacity: 1;
    background-color: #eeeeee;
    border: none;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 35px;
    font-weight: 700;
    color: #585757;
    &:hover {
      opacity: 0.7;
    }
  }
`;
