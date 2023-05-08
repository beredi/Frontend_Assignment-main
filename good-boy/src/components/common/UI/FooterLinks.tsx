import { FooterLinksStyled } from "../styled/Footer.styled";
import { useTranslation } from "react-i18next";

export const FooterLinks = () => {
  const { t } = useTranslation();
  return (
    <FooterLinksStyled>
      <ul>
        <li>
          <button>{t("links.about")}</button>
        </li>
        <li>
          <button>{t("links.how")}</button>
        </li>
        <li>
          <button>{t("links.contact")}</button>
        </li>
      </ul>
    </FooterLinksStyled>
  );
};
