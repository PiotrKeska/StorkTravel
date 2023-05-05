import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useTripsSelector from "../store";

const CountrySelector = [{ label: "PL" }, { label: "DE" }];

const CountryFilter = () => {
  const selectedCountry = useTripsSelector((s) => s.tripFilters.country);
  const setSelectedCountry = useTripsSelector((s) => s.setCountry);
  const currentCountry = CountrySelector.find(
    (country) => country.label === selectedCountry
  );
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Country: {currentCountry?.label || "Country"}
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
    </>
  );
};

export default CountryFilter;
