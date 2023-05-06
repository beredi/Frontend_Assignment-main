import { useState } from "react";
import {
  DropdownFlagContainer,
  DropdownFlagHeader,
  DropdownFlagItem,
  DropdownFlagList,
  FlagImage,
} from "../styled/CustomDrowpdown.styled";

interface Option {
  value: string;
  label: string;
  image: string;
}

const options: Option[] = [
  { value: "SK", label: "Slovakia", image: "/flags/sk.png" },
  { value: "CZ", label: "Czech Republic", image: "/flags/cz.png" },
];

export const CustomFlagDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <DropdownFlagContainer className={"custom-dropdown"}>
      <DropdownFlagHeader onClick={toggleDropdown}>
        <>
          <FlagImage
            src={selectedOption ? selectedOption.image : options[0].image}
            alt={selectedOption ? selectedOption.label : options[0].label}
          />
        </>
      </DropdownFlagHeader>
      {isOpen && (
        <DropdownFlagList>
          {options.map((option) => (
            <DropdownFlagItem
              key={option.value}
              onClick={() => handleOptionClick(option)}
            >
              <FlagImage src={option.image} alt={option.label} />
            </DropdownFlagItem>
          ))}
        </DropdownFlagList>
      )}
    </DropdownFlagContainer>
  );
};
