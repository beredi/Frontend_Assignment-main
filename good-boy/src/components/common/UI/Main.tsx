import { MainStyled } from "../styled/Main.styled";
import { Container } from "../styled/Container.styled";
import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";

export const Main = () => {
  return (
    <Container>
      <MainStyled>
        <LeftSide />
        <RightSide />
      </MainStyled>
    </Container>
  );
};
