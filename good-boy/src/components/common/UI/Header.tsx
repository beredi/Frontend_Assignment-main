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
            {t("foundation")}
            <span className="title"> {t("goodBoy")}</span>
          </div>
          <div>
            <img src="/icon/facebook.png" alt="Facebook" />
            <img src="/icon/ig.png" alt="Instagram" />
          </div>
        </HeaderStyled>
      </Container>
    </TopBarStyled>
  );
};
