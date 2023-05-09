import { CardGroup } from "../CardGroup";
import { BoldParagraphStyled } from "../../common/styled/BoldParagraph.styled";
import { ShelterSelectField } from "../ShelterSelectField";
import { validateSelectShelter } from "../validators/validators";
import { Shelter } from "../../../types/shelters";
import { FormGroupStyled } from "../styled/FormGroup.styled";
import { AmountCardGroup } from "../AmountCardGroup";
import { FormStepStyled } from "../styled/FormStep.styled";
import { useTranslation } from "react-i18next";
import { useSelectedHelpOption } from "../../../hooks/useSelectedHelpOption";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

export const FirstStep = () => {
  const { t } = useTranslation();
  const { selectedHelpOption } = useSelectedHelpOption();
  const shelters = useSelector((state: RootState) => state.shelters);

  return (
    <FormStepStyled>
      <CardGroup />
      <BoldParagraphStyled>{t("links.about")}</BoldParagraphStyled>
      <ShelterSelectField
        name="shelter"
        label={t("forms.selectLabel")}
        placeholder={t("forms.selectPlaceholder")}
        validate={(value: string) =>
          validateSelectShelter(
            value,
            t("forms.selectRequired"),
            selectedHelpOption
          )
        }
      >
        {shelters &&
          shelters.map((shelter: Shelter) => (
            <option value={shelter.id} key={shelter.name}>
              {shelter.name}
            </option>
          ))}
      </ShelterSelectField>
      <FormGroupStyled>
        <BoldParagraphStyled>{t("forms.amountToHelp")}</BoldParagraphStyled>
        <AmountCardGroup />
      </FormGroupStyled>
    </FormStepStyled>
  );
};
