import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useTripsSelector from "../store";

const ScopeSelector = [
  { value: "0-100" },
  { value: "100-200" },
  { value: "200-300" },
  { value: "300-400" },
];

const ScopeFilter = () => {
  const selectedScope = useTripsSelector((s) => s.tripFilters.scope);
  const setSelectedScope = useTripsSelector((s) => s.setScope);
  const currentScope = ScopeSelector.find(
    (scope) => scope.value === selectedScope
  );
  return (
    <>
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

export default ScopeFilter;
