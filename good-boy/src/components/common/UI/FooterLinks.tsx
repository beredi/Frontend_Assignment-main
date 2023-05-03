import { FooterLinksStyled } from "../styled/Footer.styled";
import { useTranslation } from "react-i18next";

export const FooterLinks = () => {
  const { t } = useTranslation();
  return (
    <FooterLinksStyled>
      <ul>
        <li>
          <a href="#">{t("links.about")}</a>
        </li>
        <li>
          <a href="#">{t("links.how")}</a>
        </li>
        <li>
          <a href="#">{t("links.contact")}</a>
        </li>
      </ul>
    </FooterLinksStyled>
  );
};
