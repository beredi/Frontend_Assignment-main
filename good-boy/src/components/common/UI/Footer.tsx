import { FooterStyled } from "../styled/Footer.styled";
import { Container } from "../styled/Container.styled";
import { useTranslation } from "react-i18next";
import { FooterElement } from "./FooterElement";
import { FooterLinks } from "./FooterLinks";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <FooterStyled>
        <FooterElement>
          <img src="/logo.png" alt="Logo Foundation" />
        </FooterElement>

        <FooterElement title={t("foundation") + " " + t("goodBoy")}>
          <FooterLinks />
        </FooterElement>
        <FooterElement title={t("foundation") + " " + t("goodBoy")}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in
            interdum ipsum, sit amet.
          </p>
        </FooterElement>
        <FooterElement title={t("foundation") + " " + t("goodBoy")}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in
            interdum ipsum, sit amet.
          </p>
        </FooterElement>
      </FooterStyled>
    </Container>
  );
};
