import styled from "styled-components";

export const FooterStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid #eeeeee;
  padding: 67px 0;

  @media screen and (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterElementStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 10px 15px 0 15px;
  color: #585757;
  width: 20%;
  font-size: 16px;
  .title {
    font-weight: bold;
    color: #2f2f2f;

    margin-top: 50px;
    @media screen and (max-width: 992px) {
      margin-top: 20px;
    }
  }
  .children {
    padding-top: 24px;
    @media screen and (max-width: 992px) {
      padding-top: 10px;
      width: 65%;
      text-align: center;
    }
  }
  @media screen and (max-width: 992px) {
    width: 100%;
    align-items: center;
  }
`;

export const FooterLinksStyled = styled.div`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 1em 0;
  }
  ul li {
    margin-bottom: 0.8em;
  }
  button {
    text-decoration: none;
    color: #585757;
    opacity: 1;
    background-color: transparent;
    border: none;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
      text-decoration: underline;
    }
  }
`;
