import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useTripsSelector from "../store";
import useCountry from "./useCountry";

const CountryFilter = () => {
  const selectedCountry = useTripsSelector((s) => s.tripFilters.country);
  const setSelectedCountry = useTripsSelector((s) => s.setCountry);
  const currentCountry = useCountry();

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Country: {selectedCountry || "Country"}
        </MenuButton>
        <MenuList>
          {currentCountry.map((country) => (
            <MenuItem
              key={country}
              value={country}
              onClick={() => setSelectedCountry(country)}
            >
              {country}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default CountryFilter;
