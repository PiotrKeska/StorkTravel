import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useTripsSelector from "../store";
import useMembers from "./useMembers";

const MemberFilter = () => {
  const selectedMembers = useTripsSelector((s) => s.tripFilters.members);
  const setSelectedMembers = useTripsSelector((s) => s.setMembers);

  const currentMembers = useMembers();

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Members: {selectedMembers || "Members"}
        </MenuButton>
        <MenuList>
          {currentMembers.map((member) => (
            <MenuItem
              key={member}
              value={member}
              onClick={() => setSelectedMembers(member)}
            >
              {member}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default MemberFilter;
