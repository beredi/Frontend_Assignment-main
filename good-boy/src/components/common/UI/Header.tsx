import { Container } from "../styled/Container.styled";
import { TopBarStyled } from "../styled/TopBar.styled";
import { HeaderStyled } from "../styled/Header.styled";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();
  return (
    <TopBarStyled>
      <Container>
        <HeaderStyled>
          <div>
            <span>{t("foundation")} </span>
            <span className="title">{t("goodBoy")}</span>
          </div>
          <div>
            <a href="#">
              <img src="/icon/facebook.png" alt="Facebook" />
            </a>
            <a href="#">
              <img src="/icon/ig.png" alt="Instagram" />
            </a>
          </div>
        </HeaderStyled>
      </Container>
    </TopBarStyled>
  );
};
