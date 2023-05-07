import { Box, Tab, TabList, Tabs } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <>
      <Box paddingY={4}>
        <Tabs isFitted variant="enclosed">
          <TabList>
            <Tab>
              <p>link to Home</p>
            </Tab>
            <Tab>Trips Selector</Tab>
            <Tab>
              <p>Opinions</p>
            </Tab>
            <Tab>
              <p>Contact</p>
            </Tab>
          </TabList>
        </Tabs>
      </Box>
    </>
  );
};

export default NavBar;
