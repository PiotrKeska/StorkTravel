import { Box, Tab, TabList, Tabs } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Box paddingY={4}>
        <Tabs isFitted variant="enclosed">
          <TabList>
            <Tab>
              <NavLink to="home">Home</NavLink>
            </Tab>
            <Tab>
              <NavLink to="trips">Trips</NavLink>
            </Tab>
            <Tab>
              <NavLink to="opinions">Opinions</NavLink>
            </Tab>
            <Tab>
              <NavLink to="contact">Contact</NavLink>
            </Tab>
          </TabList>
        </Tabs>
      </Box>
    </>
  );
};

export default NavBar;
