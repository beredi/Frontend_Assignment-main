import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (max-width: 992px) {
    max-width: 960px;
  }

  @media screen and (max-width: 768px) {
    max-width: 720px;
  }

  @media screen and (max-width: 576px) {
    max-width: 540px;
    padding: 0 10px;
  }
`;
