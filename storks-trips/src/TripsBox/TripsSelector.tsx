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

  const selectedMembers = useTripsSelector((s) => s.tripFilters.members);
  const setSelectedMembers = useTripsSelector((s) => s.setMembers);
  const currentMembers = MemberSelector.find(
    (member) => member.value === selectedMembers
  );

  const selectedScope = useTripsSelector((s) => s.tripFilters.scope);
  const setSelectedScope = useTripsSelector((s) => s.setScope);
  const currentScope = ScopeSelector.find(
    (scope) => scope.value === selectedScope
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
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Members: {currentMembers?.value || "Members"}
        </MenuButton>
        <MenuList>
          {MemberSelector.map((member) => (
            <MenuItem
              key={member.value}
              value={member.value}
              onClick={() => setSelectedMembers(member.value)}
            >
              {member.value}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Price: {currentScope?.value || "Scope"}
        </MenuButton>
        <MenuList>
          {ScopeSelector.map((scope) => (
            <MenuItem
              key={scope.value}
              value={scope.value}
              onClick={() => setSelectedScope(scope.value)}
            >
              {scope.value}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default TripsSelector;
