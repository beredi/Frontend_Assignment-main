import { Card } from "./Card";
import { CardGroupStyled } from "./styled/Card.styled";
import { useSelectedHelpOption } from "../../hooks/useSelectedHelpOption";
import { useTranslation } from "react-i18next";

export const CardGroup = () => {
  const { setCardSelected, isCardSelected } = useSelectedHelpOption();
  const { t } = useTranslation();
  return (
    <CardGroupStyled>
      <Card
        position="left"
        text={t("forms.firstCardText")}
        icon={
          isCardSelected(1) ? "/icon/wallet-selected.png" : "/icon/wallet.png"
        }
        selected={isCardSelected(1)}
        onClick={() => setCardSelected(1)}
      />
      <Card
        position="right"
        text={t("forms.secondCardText")}
        icon={isCardSelected(2) ? "/icon/paw-selected.png" : "/icon/paw.png"}
        selected={isCardSelected(2)}
        onClick={() => setCardSelected(2)}
      />
    </CardGroupStyled>
  );
};
