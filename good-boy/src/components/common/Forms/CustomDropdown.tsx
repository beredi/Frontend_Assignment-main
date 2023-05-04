import { useState } from "react";
import {
  DropdownContainer,
  DropdownHeader,
  DropdownItem,
  DropdownList,
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

export const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <DropdownContainer className={"custom-dropdown"}>
      <DropdownHeader onClick={toggleDropdown}>
        <>
          <FlagImage
            src={selectedOption ? selectedOption.image : options[0].image}
            alt={selectedOption ? selectedOption.label : options[0].label}
          />
        </>
      </DropdownHeader>
      {isOpen && (
        <DropdownList>
          {options.map((option) => (
            <DropdownItem
              key={option.value}
              onClick={() => handleOptionClick(option)}
            >
              <FlagImage src={option.image} alt={option.label} />
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};
