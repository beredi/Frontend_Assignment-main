import { Container } from "../styled/Container.styled";
import { TopBarStyled } from "../styled/TopBar.styled";
import { HeaderButtons, HeaderStyled } from "../styled/Header.styled";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t, i18n } = useTranslation();

  const getLanguage = () => {
    return i18n.language;
  };

  const setLanguage = async (lng: string) => {
    await i18n.changeLanguage(lng);
  };

  return (
    <TopBarStyled>
      <Container>
        <HeaderStyled>
          <div>
            {t("foundation")}
            <span className="title"> {t("goodBoy")}</span>
          </div>
          <HeaderButtons>
            <img src="/icon/facebook.png" alt="Facebook" />
            <img src="/icon/ig.png" alt="Instagram" />
            <button
              onClick={() => setLanguage(getLanguage() === "sk" ? "en" : "sk")}
            >
              {getLanguage() === "sk"
                ? "Switch to English"
                : "Prepnúť do Slovenčiny"}
            </button>
          </HeaderButtons>
        </HeaderStyled>
      </Container>
    </TopBarStyled>
  );
};
