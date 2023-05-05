import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useTripsSelector from "../store";

const MemberSelector = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }];

const MemberFilter = () => {
  const selectedMembers = useTripsSelector((s) => s.tripFilters.members);
  const setSelectedMembers = useTripsSelector((s) => s.setMembers);
  const currentMembers = MemberSelector.find(
    (member) => member.value === selectedMembers
  );
  return (
    <>
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
    </>
  );
};

export default MemberFilter;
