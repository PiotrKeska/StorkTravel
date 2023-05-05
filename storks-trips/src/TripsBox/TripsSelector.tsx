import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const TripsSelector = () => {
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Country
        </MenuButton>
        <MenuList>
          <MenuItem>PL</MenuItem>
          <MenuItem>DE</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Members
        </MenuButton>
        <MenuList>
          <MenuItem>1</MenuItem>
          <MenuItem>2</MenuItem>
          <MenuItem>3</MenuItem>
          <MenuItem>4</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Price Scope
        </MenuButton>
        <MenuList>
          <MenuItem>0-100</MenuItem>
          <MenuItem>100-200</MenuItem>
          <MenuItem>200-300</MenuItem>
          <MenuItem>300-400</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default TripsSelector;
