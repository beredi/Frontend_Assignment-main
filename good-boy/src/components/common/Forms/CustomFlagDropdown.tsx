import { useState } from "react";
import {
  DropdownFlagContainer,
  DropdownFlagHeader,
  DropdownFlagItem,
  DropdownFlagList,
  FlagImage,
} from "../styled/CustomDrowpdown.styled";
import { usePhoneCountry } from "../../../hooks/usePhoneCountry";
import { PhoneCountryLabelType, PhoneCZ, PhoneSK } from "../../../types/form";

interface Option {
  number: string;
  label: PhoneCountryLabelType;
  image: string;
}

const options: Option[] = [PhoneSK, PhoneCZ];

export const CustomFlagDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { phoneCountry, setPhoneCountry } = usePhoneCountry();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: Option) => {
    setPhoneCountry(option);
    setIsOpen(false);
  };

  return (
    <DropdownFlagContainer className={"custom-dropdown"}>
      <DropdownFlagHeader onClick={toggleDropdown}>
        <>
          <FlagImage
            src={phoneCountry ? phoneCountry.image : options[0].image}
            alt={phoneCountry ? phoneCountry.label : options[0].label}
          />
        </>
      </DropdownFlagHeader>
      {isOpen && (
        <DropdownFlagList>
          {options.map((option) => (
            <DropdownFlagItem
              key={option.number}
              onClick={() => handleOptionClick(option)}
            >
              <FlagImage src={option.image} alt={option.label} />
            </DropdownFlagItem>
          ))}
        </DropdownFlagList>
      )}
      <span>{phoneCountry.number}</span>
    </DropdownFlagContainer>
  );
};
