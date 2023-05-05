import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useTripsSelector from "./store";

const TripsSelector = () => {
  const CountrySelector = [{ label: "PL" }, { label: "DE" }];

  const MemberSelector = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
  ];

  const ScopeSelector = [
    { value: "0-100" },
    { value: "100-200" },
    { value: "200-300" },
    { value: "300-400" },
  ];

  const selectedCountry = useTripsSelector((s) => s.tripFilters.country);
  const setSelectedCountry = useTripsSelector((s) => s.setCountry);
  const currentCountry = CountrySelector.find(
    (country) => country.label === selectedCountry
  );

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {currentCountry?.label || "Country"}
        </MenuButton>
        <MenuList>
          {CountrySelector.map((country) => (
            <MenuItem
              key={country.label}
              value={country.label}
              onClick={() => setSelectedCountry(country.label)}
            >
              {country.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Members
        </MenuButton>
        <MenuList>
          {MemberSelector.map((member) => (
            <MenuItem key={member.value} value={member.value}>
              {member.value}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Price Scope
        </MenuButton>
        <MenuList>
          {ScopeSelector.map((scope) => (
            <MenuItem key={scope.value} value={scope.value}>
              {scope.value}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default TripsSelector;
